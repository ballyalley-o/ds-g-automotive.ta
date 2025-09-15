"use client"

import React from 'react'
import type { CardData } from './home-card-container'
import { ListingCard } from 'component/card'
import { formatText } from 'lib/util/format-text'

const HomeCardList = ({ data }: { data: CardData[] }) => {
  const [activeIdx, setActiveIdx] = React.useState<number>(1)
  const cardRefs = React.useRef<Record<string | number, HTMLDivElement | null>>({})

  const handleSelect = (idx: number, id: string | number) => {
    setActiveIdx(idx)
    const el = cardRefs.current[id]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
  }

  return (
    <div className={"flex flex-wrap justify-center gap-lg pb-[length:var(--space-xl)] pb-[length:env(safe-area-inset-bottom)]"}>
      {data.map((item, idx) => (
        <div key={item.id} ref={(el) => { cardRefs.current[item.id] = el }}>
          <ListingCard
            surface={1}
            active={activeIdx === idx}
            title={formatText(item.title, 'capitalize')}
            description={item.description}
            image={{ src: item.image.src, alt: item.image.alt }}
            cta={{ disabled: false, onClick: () => handleSelect(idx, item.id), label: formatText('click to switch', 'capitalize') }}
          />
        </div>
      ))}
    </div>
  )
}

export default HomeCardList
