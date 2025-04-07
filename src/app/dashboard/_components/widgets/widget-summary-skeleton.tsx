import React from 'react'

import { CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function WidgetSummarySkeleton() {
  return (
    <CardContent>
      <div className='flex shrink-0 grow basis-0 items-start justify-between'>
        <div className='flex flex-col items-start justify-center gap-2'>
          <Skeleton className='h-[40px] w-[24px] font-["Barlow"] text-[32px] leading-12 font-bold text-[#0375F3]' />
          <Skeleton className='h-[20px] w-[128px] font-["Lexend_Deca"] text-sm leading-[20px] font-normal text-[#141522]' />
        </div>
        <div className='flex items-center gap-1'>
          <Skeleton className='h-[20px] w-[24px]' />
          <Skeleton className='h-[20px] w-[20px]' />
        </div>
      </div>
    </CardContent>
  )
}
