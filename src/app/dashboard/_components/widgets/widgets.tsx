'use client'

import React from 'react'
import Image from 'next/image'

import WidgetSummary from './widget-summary'
import { Button } from '@/components/ui/button'
import WidgetSummaryEmpty from './widget-summary-empty'
import WidgetSummarySkeleton from './widget-summary-skeleton'
import { useGetTopProductsQuery } from '@/queries/useDashboard'

export default function Widgets() {
  const { data, isLoading, isError, error } = useGetTopProductsQuery()

  const topProducts = data?.payload.data ?? []

  let content = null

  if (isLoading) {
    content = Array.from({ length: 5 }).map((_, index) => <WidgetSummarySkeleton key={`skeleton-${index}`} />)
  } else if (isError) {
    content = (
      <div className='flex items-center justify-center gap-4 self-stretch px-12 py-0'>
        <p className='text-red-500'>Có lỗi xảy ra: {error.message || 'Không thể tải dữ liệu'}</p>
      </div>
    )
  } else if (topProducts.length === 0) {
    content = <WidgetSummaryEmpty />
  } else {
    content = topProducts.map((item, index) => (
      <WidgetSummary key={`${item.name}-${index}`} name={item.name} quantity={item.quantity} growth={item.growth} />
    ))
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4 self-stretch px-12 py-0'>
      {/* Card header */}
      <div className='flex items-center gap-4 self-stretch'>
        {/* stack */}
        <div className='flex shrink-0 grow basis-0 items-center gap-4'>
          <div className='flex shrink-0 grow basis-0 flex-col items-start gap-1'>
            <div className='self-stretch font-["Lexend_Deca"] text-lg leading-7 font-medium text-[#141522] capitalize not-italic'>
              Top sản phẩm sản xuất nhiều nhất
            </div>
          </div>
        </div>
        {/* Button teriany */}
        <Button>
          <div className='flex items-center gap-2'>
            <Image src='/assets/calendar-blank.svg' alt='calendar-blank' width={16} height={16} />
            <p className='text-[#3A3E4C]'>Tháng này</p>
          </div>
          <Image src='/assets/caret-down.svg' alt='caret-down' width={12} height={12} className='aspect-[1/1]' />
        </Button>
      </div>
      {/* App/Widget summary */}
      <div className='flex items-start gap-6 self-stretch'>{content}</div>
    </div>
  )
}
