import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'lib/util'

const buttonVariants = cva('inline-flex items-center justify-center gap-2 rounded-[length:var(--radius-md)] font-medium transition-colors duration-150 cursor-pointer', {
    variants: {
        variant: {
            default    : 'bg-[color:var(--color-palette-brand)] text-[color:var(--color-palette-white)] hover:opacity-90 disabled:bg-[color:var(--color-default-bg)]/90 disabled:text-[color:var(--color-default-fg)]/30',
            outline    : 'bg-transparent border border-[color:var(--border-color)] text-[color:var(--color-palette-brand)] hover:bg-[color:var(--color-palette-brand)]/10 disabled:border-[color:var(--color-default-bg)]/90 disabled:text-[color:var(--color-default-fg)]/50',
            destructive: 'bg-[color:var(--color-destructive-bg)] text-[color:var(--color-destructive-fg)] hover:bg-[color:var(--color-destructive-bg)]/90 disabled:bg-[color:var(--color-destructive-bg)]/40 disabled:text-[color:var(--color-destructive-fg)]/50'
        },
        size: {
            xs: 'h-7 px-[length:var(--space-xs)] text-[length:var(--font-size-xs)] rounded-[length:var(--radius-xs)]',
            sm: 'h-8 px-[length:var(--space-sm)] text-[length:var(--font-size-sm)] rounded-[length:var(--radius-sm)]',
            md: 'h-10 px-[length:var(--space-md)] text-[length:var(--font-size-md)] rounded-[length:var(--radius-md)]',
            lg: 'h-12 px-[length:var(--space-lg)] text-[length:var(--font-size-lg)] rounded-[length:var(--radius-lg)]',
            xl: 'h-14 px-[length:var(--space-xl)] text-[length:var(--font-size-xl)] rounded-[length:var(--radius-xl)]'
        }

}, defaultVariants: {
    variant: "default",
    size   : "md"
} })

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    label?: string
    icon ?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, label, variant, children, size, icon, ...props }, ref) => {
  return <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>{icon}{label ?? children}</button>
})

Button.displayName = 'Button'
export default Button
