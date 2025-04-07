import React from 'react'

import { CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function WidgetSummarySkeleton() {
  return (
    <CardContent>
      <div className='flex shrink-0 grow basis-0 items-start justify-between'>
        <div className='flex flex-col items-start justify-center'>
          <Skeleton className='h-[32px] w-[128px]' />
          <Skeleton className='h-[20px] w-[128px]' />
        </div>
        <div className='flex items-center gap-1'>
          <Skeleton className='h-[24px] w-[24px]' />
          <Skeleton className='h-[20px] w-[20px]' />
        </div>
      </div>
    </CardContent>
  )
}
