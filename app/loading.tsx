import React from 'react'

const Loading = () => {
  return (
    <div className={'mx-auto max-w-7xl px-lg py-xl animate-[fade-in_.25s_ease]'}>
      <div className={'flex flex-wrap items-center justify-center gap-lg'}>
        <h1 className={'text-4xl text-[color:var(--color-palette-gray-300))] font-bold'}>{'Loading...'}</h1>
      </div>
    </div>
  )
}

export default Loading
