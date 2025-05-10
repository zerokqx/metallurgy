import { FC } from 'react'
import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'

const CardPriceText: FC<{ text: string }> = ({ text }) => {
    const theme = useTheme() as TTheme
    console.log(theme)
    return (
        <p
            style={{
                fontWeight: 800,
                fontSize: 30,
                color: theme.text.accent,
            }}
        >
            {text}
        </p>
    )
}

export const CardPrice: FC<Parameters<typeof CardPriceText>[0]> = ({
    text,
}) => {
    const theme = useTheme() as TTheme

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: theme.background.accent,
                gridRow: 2,
                borderRadius: 15,
            }}
        >
            <CardPriceText text={text} />
        </div>
    )
}
