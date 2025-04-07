import { cn } from '@/lib/utils'
import { forwardRef, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex shrink-0 grow basis-0 flex-col items-start rounded-[16px] bg-white shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)]',
      className
    )}
    {...props}
  >
    {children}
  </div>
))

const CardHeader = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center gap-4 self-stretch p-6 pr-4', className)} {...props}>
    {children}
  </div>
))

const CardContent = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex min-w-[343px] shrink-0 grow basis-0 items-start rounded-[16px] bg-white p-6 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)]',
      className
    )}
    {...props}
  >
    {children}
  </div>
))

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardContent }
