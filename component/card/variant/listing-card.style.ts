import { cn } from 'lib/util'

export function listingCardRootClass(active: boolean, extra?: string) {
  const base          = 'relative group w-[300px] h-[length:var(--card-height)] flex flex-col transition-colors duration-200'
  const activeClasses = active
    ? 'border-[color:var(--color-palette-brand)] shadow-[var(--shadow-md)] ring-2 ring-[color:var(--color-palette-brand)]'
    : ''
  return cn(base, activeClasses, extra)
}

