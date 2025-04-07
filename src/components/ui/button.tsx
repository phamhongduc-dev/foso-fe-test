import { cn } from '@/lib/utils'
import { forwardRef, HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => (
  <button ref={ref} className={cn('flex cursor-pointer items-start', className)} {...props}>
    <div className='flex items-center gap-2 rounded-[8px] border border-solid border-[#D0D5DD] bg-white px-3 py-2'>
      {children}
    </div>
  </button>
))

Button.displayName = 'Button'

export { Button }
