import React from 'react'

import { CardContent } from '@/components/ui/card'

export default function WidgetSummaryEmpty() {
  return (
    <CardContent>
      <div className='flex shrink-0 grow basis-0 items-start justify-between'>
        <div className='flex flex-col items-start justify-center'>
          <h3 className='font-["Barlow"] text-[32px] leading-12 font-bold text-[#0375F3]'>0</h3>
          <p className='font-["Lexend_Deca"] text-sm leading-[20px] font-normal text-[#141522]'>Chưa có mặt hàng</p>
        </div>
      </div>
    </CardContent>
  )
}
