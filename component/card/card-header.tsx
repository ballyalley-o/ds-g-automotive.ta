import React from 'react'
import { cn } from 'lib/util'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('', className)} {...props} />
})

CardHeader.displayName = 'CardHeader'
export default CardHeader