import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'lib/util'

const buttonVariants = cva('inline-flex items-center gap-2', {
    variants: {
        variant: {
            default  : '',
            desctruct: '',
            outline  : ''
        },
        size: {
            xs: '',
            sm: '',
            md: '',
            lg: '',
            xl: ''
        }

}, defaultVariants: {} })

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, label, variant, size, icon, ...props }, ref) => {
  return <button ref={ref}>{label}</button>
})

Button.displayName = 'Button'
export default Button