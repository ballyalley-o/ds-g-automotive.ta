import { listingCardRootClass } from 'component/card/variant/listing-card.style'

describe('listingCardRootClass', () => {
  test('includes active border + ring classes when active', () => {
    const cls = listingCardRootClass(true)
    expect(cls).toContain('ring-2')
    expect(cls).toContain('border-[color:var(--color-palette-brand)]')
    expect(cls).toContain('shadow-[var(--shadow-md)]')
  })

  test('does not include active classes when not active', () => {
    const cls = listingCardRootClass(false)
    expect(cls).not.toContain('ring-2')
    expect(cls).not.toContain('border-[color:var(--color-palette-brand)]')
  })
})
