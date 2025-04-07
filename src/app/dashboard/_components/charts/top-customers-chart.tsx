'use client'

import React from 'react'
import Image from 'next/image'
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import ChartLayout from './chart-layout'
import { useGetTopCustomersQuery } from '@/queries/useDashboard'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const chartConfig = {
  quantity: {
    label: 'Sản lượng',
    color: '#0375F3'
  }
} satisfies ChartConfig

const formatLabel = (label: string) => {
  if (label.length > 20) {
    return label.substring(0, 20) + '...'
  }
  return label
}

export default function TopCustomersChart() {
  const { data, isLoading, isError, error } = useGetTopCustomersQuery()
  const topCustomers = data?.payload.data ?? []

  let content = null

  if (isLoading) {
    content = <Skeleton className='h-[316px] w-[870px]' />
  } else if (isError) {
    content = (
      <div className='flex items-center justify-center gap-4 self-stretch px-12 py-0'>
        <p className='text-red-500'>Có lỗi xảy ra: {error.message || 'Không thể tải dữ liệu'}</p>
      </div>
    )
  } else if (topCustomers.length === 0) {
    const emptyData = Array.from({ length: 5 }).map(() => ({
      name: '-',
      quantity: 0
    }))
    content = (
      <ChartContainer config={chartConfig} className='flex h-[316px] w-[870px] shrink-0 flex-col items-start p-6'>
        <BarChart data={emptyData} layout='vertical' barSize={8}>
          <YAxis
            dataKey='name'
            type='category'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            width={120}
            tickFormatter={formatLabel}
          />
          <XAxis
            dataKey='quantity'
            type='number'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            name='Sản lượng'
            ticks={[0, 800, 1600, 2400, 3200]}
          />
          <Bar dataKey='quantity' fill='var(--color-quantity)' radius={[4, 4, 0, 0]} maxBarSize={20} top={10} />
        </BarChart>
      </ChartContainer>
    )
  } else {
    content = (
      <ChartContainer config={chartConfig} className='flex h-[316px] w-[870px] shrink-0 flex-col items-start p-6'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={topCustomers} layout='vertical' barSize={8}>
            <YAxis
              dataKey='name'
              type='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={120}
              tickFormatter={formatLabel}
            />
            <XAxis
              dataKey='quantity'
              type='number'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              name='Sản lượng'
            />
            <Tooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className='rounded border bg-white p-2 shadow'>
                      <p className='font-medium'>{payload[0].payload.name}</p>
                      <p>Sản lượng: {payload[0].value} cái</p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Bar dataKey='quantity' fill='var(--color-quantity)' radius={[0, 4, 4, 0]} maxBarSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  }

  return (
    <ChartLayout
      title='Top 5 khách hàng có sản lượng cao nhất'
      buttonContent={
        <Button>
          <div className='flex items-center gap-2'>
            <Image src='/assets/calendar-blank.svg' alt='calendar-blank' width={16} height={16} />
            <p className='text-[#3A3E4C]'>Năm nay</p>
          </div>
          <Image src='/assets/caret-down.svg' alt='caret-down' width={12} height={12} className='aspect-[1/1]' />
        </Button>
      }
      className='h-[424px] px-4'
    >
      {content}
    </ChartLayout>
  )
}
