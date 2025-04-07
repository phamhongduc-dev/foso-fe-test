'use client'

import React from 'react'
import Image from 'next/image'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

import ChartLayout from './chart-layout'
import { useGetProductionPlansQuery } from '@/queries/useDashboard'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const chartConfig = {
  planned: {
    label: 'Kế hoạch',
    color: '#0375F3'
  },
  actual: {
    label: 'Thực hiện',
    color: '#1FC583'
  }
} satisfies ChartConfig

export default function ProductionPlanChart() {
  const { data, isLoading, isError, error } = useGetProductionPlansQuery()
  const productionPlans = data?.payload.data ?? []

  let content = null

  if (isLoading) {
    content = <Skeleton className='h-[294px] w-[870px]' />
  } else if (isError) {
    content = (
      <div className='flex items-center justify-center gap-4 self-stretch px-12 py-0'>
        <p className='text-red-500'>Có lỗi xảy ra: {error.message || 'Không thể tải dữ liệu'}</p>
      </div>
    )
  } else if (productionPlans.length === 0) {
    const data = Array.from({ length: 5 }).map(() => ({
      name: '_',
      planned: 0,
      actual: 0
    }))
    content = (
      <ChartContainer config={chartConfig} className='flex h-[316px] w-[870px] shrink-0 flex-col items-start p-6'>
        <BarChart accessibilityLayer data={data} barSize={22}>
          <YAxis tickLine={false} tickMargin={10} axisLine={false} width={100} ticks={[0, 20, 40, 60, 80, 100]} />
          <XAxis dataKey='name' tickLine={false} tickMargin={10} axisLine={false} />
          <Bar dataKey='planned' fill='var(--color-planned)' radius={[4, 4, 0, 0]} maxBarSize={20} top={10} />
          <Bar dataKey='actual' fill='var(--color-actual)' radius={[4, 4, 0, 0]} maxBarSize={20} tooltipType='none' />
        </BarChart>
      </ChartContainer>
    )
  } else {
    content = (
      <ChartContainer config={chartConfig} className='flex h-[316px] w-[870px] shrink-0 flex-col items-start p-6'>
        <BarChart accessibilityLayer data={productionPlans} barSize={22}>
          <YAxis tickLine={false} tickMargin={10} axisLine={false} width={100} />
          <XAxis dataKey='name' tickLine={false} tickMargin={10} axisLine={false} name='Mặt hàng' />
          <ChartTooltip
            cursor={false}
            // position={{ y: 0, x: 0 }}
            content={
              <ChartTooltipContent
                formatter={(value, name, item) => (
                  <>
                    <div
                      className='h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]'
                      style={
                        {
                          '--color-bg': item?.payload?.fill,
                          opacity: item?.dataKey === 'remainingRate' ? 0.5 : 1
                        } as React.CSSProperties
                      }
                    />
                    {chartConfig[name as keyof typeof chartConfig]?.label || name}
                    <div className='text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums'>
                      {value as number} cái
                    </div>
                  </>
                )}
              />
            }
            labelFormatter={(label) => label}
          />
          <Bar dataKey='planned' fill='var(--color-planned)' radius={[4, 4, 0, 0]} maxBarSize={20} top={10} />
          <Bar dataKey='actual' fill='var(--color-actual)' radius={[4, 4, 0, 0]} maxBarSize={20} tooltipType='none' />
        </BarChart>
      </ChartContainer>
    )
  }

  return (
    <ChartLayout
      title='Kế hoạch sản xuất'
      className='h-[424px]'
      buttonContent={
        <Button>
          <div className='flex items-center gap-2'>
            <Image src='/assets/calendar-blank.svg' alt='calendar-blank' width={16} height={16} />
            <p className='text-[#3A3E4C]'>Quý này</p>
          </div>
          <Image src='/assets/caret-down.svg' alt='caret-down' width={12} height={12} className='aspect-[1/1]' />
        </Button>
      }
    >
      <div className='flex flex-wrap content-start items-start justify-end gap-4 self-stretch px-4 py-0'>
        {/* legend item */}
        <div className='flex w-[102px] items-center gap-[10px]'>
          <Image src='/assets/rectangle.svg' alt='Rectangle' width={24} height={24} />
          <p className='font-["Lexend_Deca"] text-sm leading-[24px] font-medium text-[#3A3E4C] not-italic'>Kế hoạch</p>
        </div>
        <div className='flex items-center gap-[10px]'>
          <Image src='/assets/rectangle-34.svg' alt='Rectangle' width={24} height={24} />
          <p className='font-["Lexend_Deca"] text-sm leading-[24px] font-medium text-[#3A3E4C] not-italic'>Thực hiện</p>
        </div>
      </div>
      <div className='px-4'>{content}</div>
    </ChartLayout>
  )
}
