import { Avatar, AvatarImage } from '@/components/ui/avatar.tsx'
import AvatarFallbackStl from '@/styledComponents/AvatarFallback.stl.ts'
import { useTheme } from 'styled-components'
import { TAvatarWrapper } from '@/types/components/avatarWrapper.types'

const AvatarWrapper: TAvatarWrapper = ({
    profilePictureUrl,
    nameFallback,
    w,
    ...props
}) => {
    const theme = useTheme()
    return (
        <Avatar
            style={{
                width: w,
                height: w,
                border: `10px solid ${theme.background.accent} `,
            }}
            {...props}
        >
            <AvatarImage src={profilePictureUrl} />
            <AvatarFallbackStl>{nameFallback}</AvatarFallbackStl>
        </Avatar>
    )
}
export default AvatarWrapper
