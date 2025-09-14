import React from 'react'
import { cn } from 'lib/util'

type  CardHeaderProps = React.HTMLAttributes<HTMLDivElement>

const CardHeader      = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col space-y-1.5 py-[length:var(--space-sm)] text-xl leading-[var(--line-height-heading)] font-bold', className)} {...props} />
    )
  }
)

CardHeader.displayName = 'CardHeader'
export default CardHeader
