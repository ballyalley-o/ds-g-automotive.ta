'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from 'component/button'
import { formatText } from 'lib/util/format-text'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const DEF_ERR_MSG = formatText('internal server error', 'capitalize')
  useEffect(() => {
    toast.error(error.message || DEF_ERR_MSG)
  }, [error])

  return (
    <section className={'h-screen'}>
      <div className={'w-full flex flex-col justify-start items-center m-auto gap-2'}>
        <p className={'text-4xl'}>{DEF_ERR_MSG}</p>
        <Button variant={'destructive'} onClick={reset}>{formatText('try again', 'capitalize')}</Button>
      </div>
    </section>
  )
}
