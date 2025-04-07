'use client'

import React from 'react'
import Image from 'next/image'

import ChartLayout from './chart-layout'
import { useGetMaterialNeedsQuery } from '@/queries/useDashboard'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function MaterialNeedsChart() {
  const { data, isLoading, isError, error } = useGetMaterialNeedsQuery()
  const materials = data?.payload.data ?? []

  let content = null

  if (isLoading) {
    content = Array.from({ length: 5 }).map((_, index) => (
      <TableRow key={index} className='border-[#F3F3F4]'>
        <TableCell colSpan={4}>
          <Skeleton className='h-[90px] w-full' />
        </TableCell>
      </TableRow>
    ))
  } else if (isError) {
    content = (
      <div className='flex items-center justify-center gap-4 self-stretch px-12 py-0'>
        <p className='text-red-500'>Có lỗi xảy ra: {error.message || 'Không thể tải dữ liệu'}</p>
      </div>
    )
  } else if (materials.length === 0) {
    content = (
      <TableRow>
        <TableCell colSpan={4} className='h-[400px]'>
          <div className='flex h-full flex-col items-center justify-center gap-6'>
            <div className='relative aspect-[1/1] size-[250px]'>
              <Image
                src='/assets/empty-background.svg'
                alt='empty-background'
                width={250}
                height={250}
                className='shrink-0'
              />
              <Image
                src='/assets/empty-stack.svg'
                alt='empty-stack'
                width={134}
                height={108}
                className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-[0.48]'
              />
            </div>
            <p className='text-2xl leading-[32px] font-medium text-[#52575E]'>Chưa có dữ liệu</p>
          </div>
        </TableCell>
      </TableRow>
    )
  } else {
    content = materials.map((material, index) => (
      <TableRow key={index} className='border-[#F3F3F4]'>
        <TableCell className='h-[90px] w-16 p-2 text-center'>{index + 1}</TableCell>
        <TableCell className='w-[326px] p-2 py-4'>
          <div className='flex items-start gap-2'>
            <Image src='/assets/image.svg' alt={material.material} width={32} height={32} className='aspect-[1/1]' />
            <div className='flex flex-col items-start gap-1'>
              <p className='text-sm font-semibold text-[#141522]'>{material.material}</p>
              <div className='flex flex-col items-start gap-1'>
                <p className='text-[10px] text-[#667085]'>None</p>
                <p className='text-[10px] text-[#3276FA]'>{material.code}</p>
              </div>
            </div>
          </div>
        </TableCell>
        <TableCell className='w-[99px] p-2'>{material.unit}</TableCell>
        <TableCell className='w-[103px] p-2 text-center'>{material.quantity}</TableCell>
      </TableRow>
    ))
  }

  return (
    <ChartLayout
      title='Nguyên vật liệu cần mua'
      buttonContent={
        <Button>
          <div className='flex items-center gap-2'>
            <Image src='/assets/calendar-blank.svg' alt='calendar-blank' width={16} height={16} />
            <p className='text-[#3A3E4C]'>Tuần này</p>
          </div>
          <Image src='/assets/caret-down.svg' alt='caret-down' width={12} height={12} className='aspect-[1/1]' />
        </Button>
      }
    >
      <Table>
        <TableHeader className='bg-[#F3F4F6]'>
          <TableRow className='border border-solid border-[#F3F3F4]'>
            <TableHead className='h-12 w-16 p-2 text-center'>STT</TableHead>
            <TableHead className='w-[326px] p-2'>Nguyên vật liệu</TableHead>
            <TableHead className='w-[99px] p-2'>Đơn vị tính</TableHead>
            <TableHead className='w-[103px] p-2 text-center'>Số lượng</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{content}</TableBody>
      </Table>
    </ChartLayout>
  )
}
