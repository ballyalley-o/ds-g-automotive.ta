import React from 'react'
import { HomeTitle, HomeCover, HomeCardContainer } from 'component/home'
import { formatText } from 'lib/util/format-text'


export default function Homepage() {
  return (
    <React.Fragment>
      <section className={'w-full'}>
        <HomeCover />
        <div className={'flex flex-wrap justify-center gap-lg px-lg py-xl pb-[length:calc(var(--space-xl)*2)] md:pb-[length:var(--space-xl)] md:h-[length:var(--home-cards-height)]'}>
          <HomeTitle title={formatText('technical assessment', 'capitalize')} />
          <HomeCardContainer />
        </div>
      </section>
    </React.Fragment>
  )
}
