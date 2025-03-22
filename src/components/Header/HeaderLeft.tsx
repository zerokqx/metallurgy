import styled, { useTheme } from 'styled-components'
import { size } from '@/styledComponents/css/size.stl'
import { ContainerFlex } from '@/styledComponents/Containers.stl'
import logotype from '@/assets/Group 5.svg'
import ThemeSwitch from '@/components/Header/ThemeSwitch.tsx'
import { Avatar } from '@/components/ui/avatar'
import AvatarFallbackStyled from '@/styledComponents/AvatarFallback.stl'
import { NavLink } from 'react-router'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import SeparatorWrapper from '@/components/Wrappers/SeparatorWrapper'

const HeaderLeft = () => {
    const theme = useTheme() as TTheme

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
                <Avatar>
                    <AvatarFallbackStyled>Z</AvatarFallbackStyled>
                </Avatar>
            </NavLink>
            <SeparatorWrapper />
        </ContainerFlex>
    )
}

export default HeaderLeft
