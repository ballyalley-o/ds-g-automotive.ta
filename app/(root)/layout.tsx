import React from 'react'

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={'min-h-dvh'}>
        <main className={'mx-auto'}>{children}</main>
    </div>
  )
}

export default RootLayout