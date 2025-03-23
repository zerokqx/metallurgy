import { Avatar, AvatarImage } from '@/components/ui/avatar.tsx'
import AvatarFallbackStl from '@/styledComponents/AvatarFallback.stl.ts'
import { FC } from 'react'
import { useTheme } from 'styled-components'

const AvatarWrapper: FC<{ src: string; nameFallback: string; w: string }> = ({
    src,
    nameFallback,
    w,
}) => {
    const theme = useTheme()
    return (
        <Avatar
            style={{
                width: w,
                height: w,
                border: `10px solid ${theme.background.accent} `,
            }}
        >
            <AvatarImage src={src} />
            <AvatarFallbackStl>{nameFallback}</AvatarFallbackStl>
        </Avatar>
    )
}
export default AvatarWrapper
