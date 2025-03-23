import styled, { useTheme } from 'styled-components'
import { size } from '@/styledComponents/css/size.stl'
import { ContainerFlex } from '@/styledComponents/Containers.stl'
import logotype from '@/assets/Group 5.svg'
import ThemeSwitch from '@/components/Header/ThemeSwitch.tsx'
import { NavLink } from 'react-router'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import SeparatorWrapper from '@/components/Wrappers/SeparatorWrapper'
import { useAppSelector } from '@/hooks/useRedux'
import { selectUser } from '@/redux/slices/userSlice'
import AvatarWrapper from '@/components/Wrappers/AvatarWrapper'

const HeaderLeft = () => {
    const theme = useTheme() as TTheme
    const user = useAppSelector(selectUser)
    const LogotypeLocal = styled.img.attrs({ src: logotype })`
        ${size};
    `
    return (
        <ContainerFlex
            background={theme.background.accent}
            width={'max-content'}
            gap={'20px'}
            padding={'0 20px 0 10px'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <LogotypeLocal width={'70px'} height={'70px'} />
            <SeparatorWrapper />
            <ThemeSwitch />
            <SeparatorWrapper />

            <NavLink to={'user/profile'} end>
                <AvatarWrapper
                    src={user.profilePictureUrl}
                    nameFallback={user.name.slice(1, 2)}
                    w={'50px'}
                />
            </NavLink>
            <SeparatorWrapper />
        </ContainerFlex>
    )
}

export default HeaderLeft
