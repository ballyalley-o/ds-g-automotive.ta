import React from 'react'
import Image from 'next/image'
import { Card, CardBody, CardHeader, CardImage } from 'component/card'
import { Button } from 'component/button'

import { listingCardRootClass } from './listing-card.style'

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
    <Card surface={surface} className={listingCardRootClass(!!active, className)}>
        <CardImage className="relative flex-shrink-0">
          <Image src={image.src} alt={image.alt ?? 'card-image'} width={image.width ?? 300} height={image.height ?? 150} priority={image.priority} className={"object-cover w-full h-auto"} />
        </CardImage>
          {cta && (
            <div className={'pointer-events-none absolute inset-0 show-on-hover items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-gradient-to-b from-[color:var(--color-palette-darker-blue)]/40 to-[color:var(--color-palette-dark-blue)]/20 p-[length:var(--space-lg)]'}>
              <div className={"pointer-events-auto"}>
                <Button variant={cta.variant} disabled={cta.disabled} onClick={cta.onClick} label={cta.label} />
              </div>
            </div>
          )}
        <CardBody className={"flex flex-col min-h-0 flex-1"}>
          <CardHeader>{title}</CardHeader>
          <p className={"text-justify text-sm md:text-md whitespace-pre-wrap line-clamp-6"}>{description}</p>

          {cta && (
            <Button className={"mt-auto w-full hide-on-hover"} variant={cta.variant} disabled={cta.disabled} onClick={cta.onClick} label={cta.label} />
          )}
        </CardBody>
    </Card>
  )
}

export default ListingCard
