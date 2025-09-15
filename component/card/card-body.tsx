import React from 'react'
import { cn } from 'lib/util'

const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('text-sm md:text-md leading-[var(--line-height-body)] p-5', className)} {...props} />
    )
  }
)

CardBody.displayName = 'CardBody'
export default CardBody
