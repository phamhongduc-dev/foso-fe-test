'use client'

import Image from 'next/image'
import React, { Fragment } from 'react'
import { Label, Pie, PieChart } from 'recharts'

import ChartLayout from './chart-layout'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetProductionStatusQuery } from '@/queries/useDashboard'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

import { DUMMY_DATA_EMPTY } from '@/data/dummy-data'

const chartConfig = {
  value: {
    label: 'Số lượng'
  }
} satisfies ChartConfig

export default function ProductionStatusChart() {
  const { data, isLoading, isError, error } = useGetProductionStatusQuery()
  const productionStatus = data?.payload.data ?? []
  const total = productionStatus?.reduce((acc, curr) => acc + curr.value, 0) ?? 0

  let content = null

  if (isLoading) {
    content = (
      <Fragment>
        <Skeleton className='h-[268px] w-[268px] rounded-full' />
        <div className='flex items-start justify-center gap-2 self-stretch'>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className='h-14 w-full' />
          ))}
        </div>
      </Fragment>
    )
  } else if (isError) {
    content = (
      <div className='flex items-center justify-center gap-4 self-stretch px-12 py-0'>
        <p className='text-red-500'>Có lỗi xảy ra: {error.message || 'Không thể tải dữ liệu'}</p>
      </div>
    )
  } else if (productionStatus.length === 0) {
    const emptyData = [
      { status: 'Đang sản xuất', value: 1, fill: '#DADFE4' },
      { status: 'Hoàn thành', value: 1, fill: '#DADFE4' },
      { status: 'Chờ sản xuất', value: 1, fill: '#DADFE4' }
    ]
    content = (
      <Fragment>
        <ChartContainer config={chartConfig} className='h-[268px] w-[268px]'>
          <PieChart width={268} height={268}>
            <Pie
              data={emptyData}
              dataKey='value'
              nameKey='status'
              innerRadius={90}
              outerRadius={134}
              strokeWidth={5}
              paddingAngle={2}
              stroke='#fff'
              cornerRadius={10}
              className='aspect-[1/1]'
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                        <tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-3xl font-bold'>
                          {total.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className='fill-muted-foreground'>
                          Lệnh sản xuất
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className='flex items-start justify-center gap-2 self-stretch'>
          {DUMMY_DATA_EMPTY.productionStatus.map((item) => (
            <div
              key={item.status}
              className='flex shrink-0 grow basis-0 flex-col items-start gap-1 rounded-[8px] border border-solid border-[#DDDDE2] p-2'
            >
              <p
                className={`self-stretch font-["Lexend_Deca"] text-2xl leading-[32px] font-semibold`}
                style={{ color: item.fill }}
              >
                {item.value}
              </p>
              <p className='self-stretch font-["Lexend_Deca"] text-sm leading-[20px] font-normal'>{item.status}</p>
            </div>
          ))}
        </div>
      </Fragment>
    )
  } else {
    content = (
      <Fragment>
        <ChartContainer config={chartConfig} className='h-[268px] w-[268px]'>
          <PieChart width={268} height={268}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={productionStatus}
              dataKey='value'
              nameKey='status'
              innerRadius={90}
              outerRadius={134}
              strokeWidth={5}
              paddingAngle={2}
              stroke='#fff'
              cornerRadius={10}
              className='aspect-[1/1]'
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                        <tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-3xl font-bold'>
                          {total.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className='fill-muted-foreground'>
                          Lệnh sản xuất
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className='flex items-start justify-center gap-2 self-stretch'>
          {productionStatus.map((item) => (
            <div
              key={item.status}
              className='flex shrink-0 grow basis-0 flex-col items-start gap-1 rounded-[8px] border border-solid border-[#DDDDE2] p-2'
            >
              <p
                className={`self-stretch font-["Lexend_Deca"] text-2xl leading-[32px] font-semibold`}
                style={{ color: item.fill }}
              >
                {item.value}
              </p>
              <p className='self-stretch font-["Lexend_Deca"] text-sm leading-[20px] font-normal'>{item.status}</p>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }

  return (
    <ChartLayout
      title='Tình hình sản xuất'
      buttonContent={
        <Button>
          <div className='flex items-center gap-2'>
            <Image src='/assets/calendar-blank.svg' alt='calendar-blank' width={16} height={16} />
            <p className='text-[#3A3E4C]'>Hôm nay</p>
          </div>
          <Image src='/assets/caret-down.svg' alt='caret-down' width={12} height={12} className='aspect-[1/1]' />
        </Button>
      }
      className='shrink-0 grow basis-0 flex-col items-center justify-between p-6 pt-0'
    >
      {content}
    </ChartLayout>
  )
}
