import React from 'react'
import { cn } from 'lib/util'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('', className)} {...props} />
  )
})

Card.displayName = 'Card'
export default Card