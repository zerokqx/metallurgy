import { CardStyled } from '@/styledComponents/Card.ts'
import { CardPrice } from '@/components/Card/CardPrice'
import { ButtonCard } from '@/components/Card/ButtonCard'
import { ImageCard } from '@/components/Card/ImageCard'
import { FC } from 'react'

type TCard = Parameters<typeof CardPrice>[0] & Parameters<typeof ImageCard>[0]

export const Card: FC<TCard> = ({ text, image }) => {
    return (
        <CardStyled>
            <ImageCard image={image} />
            <CardPrice text={text} />
            <ButtonCard />
        </CardStyled>
    )
}
