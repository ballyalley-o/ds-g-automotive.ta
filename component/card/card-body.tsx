import React from 'react'
import { cn } from 'lib/util'

const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('', className)} {...props} />
})

CardBody.displayName = 'CardBody'
export default CardBody