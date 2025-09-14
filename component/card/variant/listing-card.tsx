import React from 'react'
import Image from 'next/image'
import { cn } from 'lib/util'
import { Card, CardBody, CardHeader, CardImage } from 'component/card'
import { Button } from 'component/button'

export type ListingCardProps = {
  className  ?: string
  surface    ?: 1 | 2 | 3
  title       : string
  description : string
  image       : {
    src      : string
    alt     ?: string
    width   ?: number
    height  ?: number
    priority?: boolean
  }
  cta?: {
    label    : string
    onClick ?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
    variant ?: 'default' | 'outline' | 'destructive'
    disabled?: boolean
  }
  active?: boolean
}

const ListingCard: React.FC<ListingCardProps> = ({ className, surface = 1, title, description, image, cta, active }) => {
  return (
    <Card
      surface={surface}
      className={cn('w-[300px] h-[length:var(--card-height)] flex flex-col transition-colors duration-200',
        active && 'border-[color:var(--color-palette-brand)] shadow-[var(--shadow-md)] ring-2 ring-[color:var(--color-palette-brand)]',
        className
      )}
    >
      <CardImage>
        <Image src={image.src} alt={image.alt ?? 'card-image'} width={image.width ?? 300} height={image.height ?? 150} priority={image.priority} />
      </CardImage>
      <CardBody className={"flex flex-col flex-1"}>
        <CardHeader>{title}</CardHeader>
        <p className={"text-justify whitespace-pre-wrap"}>{description}</p>
        {cta && <Button className={"mt-auto w-full"} variant={cta.variant} disabled={cta.disabled} onClick={cta.onClick} label={cta.label} />}
      </CardBody>
    </Card>
  )
}

export default ListingCard
