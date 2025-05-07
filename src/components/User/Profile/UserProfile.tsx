import { ContainerFlex } from '@/styledComponents/Containers.stl'
import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import { useAppSelector } from '@/hooks/useRedux'
import { selectShortUserName, selectUser } from '@/redux/slices/userSlice'
import TInitialStateUser from '@/types/redux/userSlice.types'
import AvatarWrapper from '@/components/Wrappers/AvatarWrapper'
import UserData from '@/components/User/Profile/UserData'

const UserProfile = () => {
    const theme = useTheme() as TTheme
    const { name, email, phone, profilePictureUrl }: TInitialStateUser =
        useAppSelector(selectUser)
    const shortName = useAppSelector(selectShortUserName)
    
    return (
        <main>
            <ContainerFlex
                background={theme.background.accent}
                height={'100%'}
                width={'50%'}
                style={{
                    borderRadius: '20px',
                    border: `1px solid ${theme.border.muted}`,
                }}
                padding={'20px'}
            >
                <ContainerFlex
                    width={'100%'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    height={'30%'}
                    padding={'20px'}
                    background={theme.background.primary}
                    style={{
                        border: `1px solid ${theme.border.muted}`,
                        borderRadius: '20px',
                    }}
                >
                    <AvatarWrapper
                        w={'150px'}
                        profilePictureUrl={profilePictureUrl}
                        nameFallback={shortName}
                    />
                    <UserData name={name} email={email} phone={phone} />
                </ContainerFlex>
            </ContainerFlex>
        </main>
    )
}

export default UserProfile
