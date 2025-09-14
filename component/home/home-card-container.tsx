import { Suspense } from 'react'
import { PATH_DIR } from 'dealer-studio.dir'

import HomeCardList from './home-card-list'

export type CardData = {
  id         : string | number
  title      : string
  description: string
  image      : { src: string; alt: string }
}

async function fetchCards(): Promise<CardData[]> {
  const res = await fetch(PATH_DIR.API_CARD, { cache: 'no-store', next : { revalidate: 0 } })
  if (!res.ok) {
    throw new Error('error fetching')
  }
  const { data } = await res.json()
  return data as CardData[]
}

const HomeCardContainer = async () => {
  const data = await fetchCards()
  return (
    <Suspense>
      <HomeCardList data={data} />
    </Suspense>
  )
}

export default HomeCardContainer
