import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'lib/util'

const cardVariants = cva(
  'rounded-[length:var(--radius-md)] border w-[length:280px] overflow-hidden',
  {
    variants: {
      surface: {
        1: 'bg-[color:var(--surface-1-bg)] text-[color:var(--surface-1-fg)] border-[color:var(--surface-1-border)] shadow-[var(--surface-1-shadow)]',
        2: 'bg-[color:var(--surface-2-bg)] text-[color:var(--surface-2-fg)] border-[color:var(--surface-2-border)] shadow-[var(--surface-2-shadow)]',
        3: 'bg-[color:var(--surface-3-bg)] text-[color:var(--surface-3-fg)] border-[color:var(--surface-3-border)] shadow-[var(--surface-3-shadow)]'
      }
    },
    defaultVariants: {
      surface: 1
    }
  }
)

type CardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, surface, ...props }, ref) => {
  return <div ref={ref} className={cn(cardVariants({ surface }), className)} {...props} />
})

Card.displayName = 'Card'
export default Card
