import React from 'react'
import { formatText } from 'lib/util/format-text'

const Loading = () => {
  return (
    <div className={'m-auto max-w-7xl px-lg py-xl animate-[fade-in_.25s_ease]'}>
      <div className={'flex flex-wrap items-center justify-center gap-lg'}>
        <h1 className={'text-4xl text-[color:var(--color-palette-gray-300))] font-bold'}>{formatText('loading...', 'capitalize')}</h1>
      </div>
    </div>
  )
}

export default Loading
