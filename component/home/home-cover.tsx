"use client"

import { ASSET_DIR } from 'dealer-studio.dir'
import Image from 'next/image'
import { Button } from "component/button"
import { formatText } from 'lib/util/format-text'

const HomeCover = () => {
    const COVER_TITLE  = 'welcome to g automotive'
    const COVER_BUTTON = 'contact us'
  return (
    <div className={'relative object-cover w-full h-auto lg:h-[calc(100dvh-var(--home-cards-height))]'}>
      <div className={'absolute inset-0 flex flex-col gap-4 items-center m-auto justify-center z-40'}>
        <h1 className={'text-4xl font-bold'}>{formatText(COVER_TITLE, 'capitalize')}</h1>
        <Button label={formatText(COVER_BUTTON, 'capitalize')} />
      </div>
      <div className={'absolute inset-0 bg-gradient-to-b from-transparent to-background z-30'}></div>
      <Image src={ASSET_DIR.BACKGROUND_WIDE} alt={'cover-image'} width={1200} height={800} className={'w-full h-full object-cover opacity-40'} />
    </div>
  )
}

export default HomeCover
