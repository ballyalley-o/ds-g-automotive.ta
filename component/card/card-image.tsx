import React from 'react'
import { cn } from 'lib/util'

const CardImage = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('aspect-[3/1] w-full overflow-hidden mb-3', className)} {...props} />
    )
  }
)

CardImage.displayName = 'CardImage'
export default CardImage
