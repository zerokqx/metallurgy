import { Avatar, AvatarImage } from '@/components/ui/avatar.tsx'
import AvatarFallbackStl from '@/styledComponents/AvatarFallback.stl.ts'
import { FC } from 'react'
import { useTheme } from 'styled-components'
import TInitialStateUser from '@/types/redux/userSlice.types'

const AvatarWrapper: FC<
    { nameFallback: string; w: string } & Pick<
        TInitialStateUser,
        'profilePictureUrl'
    >
> = ({ profilePictureUrl, nameFallback, w }) => {
    const theme = useTheme()
    return (
        <Avatar
            style={{
                width: w,
                height: w,
                border: `10px solid ${theme.background.accent} `,
            }}
        >
            <AvatarImage src={profilePictureUrl} />
            <AvatarFallbackStl>{nameFallback}</AvatarFallbackStl>
        </Avatar>
    )
}
export default AvatarWrapper
