'use client'

import React from 'react'
import Image from 'next/image'

import ChartLayout from './chart-layout'
import { useGetProductionProgressByGroupQuery } from '@/queries/useDashboard'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

const ProductionProgressByGroup = () => {
  const { data, isLoading, isError, error } = useGetProductionProgressByGroupQuery()
  const progress = data?.payload.data ?? []

  let content = null

  if (isLoading) {
    content = <Skeleton className='h-[528px] w-[476px]' />
  } else if (isError) {
    content = (
      <div className='flex items-center justify-center gap-4 self-stretch px-12 py-0'>
        <p className='text-red-500'>Có lỗi xảy ra: {error.message || 'Không thể tải dữ liệu'}</p>
      </div>
    )
  } else if (progress.length === 0) {
    content = Array.from({ length: 7 }).map((_, index) => (
      <div key={index} className='flex flex-col items-start gap-2 self-stretch'>
        <span className='flex items-start justify-between self-stretch'>
          <p className='w-[112px] min-w-max self-stretch text-sm leading-[20px] font-medium text-[#1C252E]'>
            Chưa có mặt hàng
          </p>
          <div className='flex items-start'>
            <p className='min-w-max text-right font-["Public_Sans"] text-sm leading-[22px] font-semibold tracking-[0] text-[#1C252E]'>
              -
            </p>
          </div>
        </span>
        <div className='relative flex h-2 flex-col items-start self-stretch rounded-[500px] bg-[#919EAB]'></div>
      </div>
    ))
  } else {
    content = progress.map((item, index) => (
      <div key={index} className='flex flex-col items-start gap-2 self-stretch'>
        {/* Tên nhóm sản phẩm */}
        <span className='flex items-start justify-between self-stretch'>
          <p className='w-[112px] min-w-max self-stretch text-sm leading-[20px] font-medium text-[#1C252E]'>
            {item.name}
          </p>
          <div className='flex items-start'>
            <p className='min-w-max text-right font-["Public_Sans"] text-sm leading-[22px] font-semibold tracking-[0] text-[#1C252E]'>
              {item.quantity} cái
            </p>
            <p className='w-[50%] font-["Public_Sans"] text-sm leading-[22px] font-normal tracking-[0] text-[#637381]'>
              &nbsp;{item.percentage}%
            </p>
          </div>
        </span>

        {/* Thanh tiến độ */}
        <div className='relative flex h-2 flex-col items-start self-stretch rounded-[500px] bg-[rgba(145,158,171,0.12)]'>
          <div className='h-2 rounded-[500px] bg-[#1FC583]' style={{ width: `${item.percentage}%` }}></div>
        </div>
      </div>
    ))
  }

  return (
    <ChartLayout
      title='Tiến độ sản xuất theo nhóm'
      buttonContent={
        <Button>
          <div className='flex items-center gap-2'>
            <Image src='/assets/calendar-blank.svg' alt='calendar-blank' width={16} height={16} />
            <p className='text-[#3A3E4C]'>Hoàn thành</p>
          </div>
          <Image src='/assets/caret-down.svg' alt='caret-down' width={12} height={12} className='aspect-[1/1]' />
        </Button>
      }
    >
      <div className='flex flex-col items-start gap-8 self-stretch px-6 pt-2 pb-8'>{content}</div>
    </ChartLayout>
  )
}

export default ProductionProgressByGroup
