import styled, { useTheme } from 'styled-components'
import { size } from '@/styledComponents/css/size.stl'
import { ContainerFlex } from '@/styledComponents/Containers.stl'
import logotype from '@/assets/Group 5.svg'
import ThemeSwitch from '@/components/Header/ThemeSwitch/ThemeSwitch.tsx'
import { NavLink } from 'react-router'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import SeparatorWrapper from '@/components/Wrappers/SeparatorWrapper'
import { useAppSelector } from '@/hooks/useRedux'
import { selectShortUserName } from '@/redux/slices/userSlice'
import AvatarWrapper from '@/components/Wrappers/AvatarWrapper'

const HeaderLeft = () => {
    const theme = useTheme() as TTheme
    const LogotypeLocal = styled.img.attrs({ src: logotype })`
        ${size};
    `
    const shortName = useAppSelector(selectShortUserName)
    return (
        <ContainerFlex
            background={theme.background.accent}
            width={'max-content'}
            gap={'20px'}
            padding={'0 20px 0 10px'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <NavLink to={'/'}>
                <LogotypeLocal width={'70px'} height={'70px'} />
            </NavLink>
            <SeparatorWrapper />
            <ThemeSwitch />
            <SeparatorWrapper />

            <NavLink to={'user/profile'} end>
                <AvatarWrapper
                    // profilePictureUrl={user.profilePictureUrl}
                    profilePictureUrl={''}
                    nameFallback={shortName}
                    w={'50px'}
                />
            </NavLink>
            <SeparatorWrapper />
        </ContainerFlex>
    )
}

export default HeaderLeft
