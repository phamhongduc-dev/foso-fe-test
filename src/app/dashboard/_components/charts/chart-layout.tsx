'use client'

import { Card, CardHeader } from '@/components/ui/card'
import React, { forwardRef, Fragment, HTMLAttributes } from 'react'

interface ChartLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode
  buttonContent?: React.ReactNode
}

const ChartLayout = forwardRef<HTMLDivElement, ChartLayoutProps>(
  ({ className, title, children, buttonContent, ...props }, ref) => (
    <Card ref={ref} className={className} {...props}>
      <CardHeader>
        <div className='flex shrink-0 grow basis-0 items-center gap-4'>
          <div className='flex shrink-0 grow basis-0 flex-col items-start gap-1'>
            <h3 className='self-stretch text-lg leading-7 font-medium text-[#141522]'>{title}</h3>
          </div>
        </div>
        {buttonContent && buttonContent}
      </CardHeader>

      <Fragment>{children}</Fragment>
    </Card>
  )
)

ChartLayout.displayName = 'ChartLayout'

export default ChartLayout
