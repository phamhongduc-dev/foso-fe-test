import React from 'react'
import Image from 'next/image'

import { CardContent } from '@/components/ui/card'
import { GetTopProductsResType } from '@/schema/dashboard.schema'

type WidgetSummaryProps = GetTopProductsResType['data'][0]

export default function WidgetSummary({ name, quantity, growth }: WidgetSummaryProps) {
  return (
    <CardContent>
      <div className='flex shrink-0 grow basis-0 items-start justify-between'>
        <div className='flex flex-col items-start justify-center'>
          <h3 className='font-["Barlow"] text-[32px] leading-12 font-bold text-[#0375F3]'>{quantity}</h3>
          <p className='font-["Lexend_Deca"] text-sm leading-[20px] font-normal text-[#141522]'>{name}</p>
        </div>
        <div className='flex items-center gap-1'>
          <Image
            src={
              growth > 0
                ? '/assets/ic-solar_double-alt-arrow-up-bold-duotone.svg'
                : '/assets/ic-solar_double-alt-arrow-down-bold-duotone.svg'
            }
            alt='ic-solar_double-alt-arrow-up-bold-duotone'
            width={24}
            height={24}
          />
          {/* /* Lexend/Medium/text-sm */}
          <p className='font-["Lexend_Deca"] text-sm leading-[20px] font-medium text-[#3A3E4C]'>{growth}%</p>
        </div>
      </div>
    </CardContent>
  )
}
