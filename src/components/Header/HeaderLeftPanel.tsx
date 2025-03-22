import styled, { useTheme } from 'styled-components'
import { size } from '@/styledComponents/css/size.stl'
import { ContainerFlex } from '@/styledComponents/Containers.stl'
import logotype from '@/assets/Group 5.svg'
import ThemeSwitch from '@/components/Header/ThemeSwitch.tsx'
import SeparatorStyled from '@/styledComponents/SeparatorStyled.stl'
import { Avatar } from '@/components/ui/avatar'
import AvatarFallbackStyled from '@/styledComponents/AvatarFallback.stl'
import { NavLink } from 'react-router'
import TTheme from '@/types/styledComponents/css/theme/theme.types'

const HeaderLeftPanel = () => {
    const theme = useTheme() as TTheme

    const LogotypeLocal = styled.img.attrs({ src: logotype })`
        ${size};
    `
    return (
        <ContainerFlex
            background={theme.background.accent}
            width={'max-content'}
            style={{
                borderRadius: '20px',
                border: `3px ${theme.border.accent}  solid`,
            }}
            gap={'20px'}
            padding={'0 20px 0 10px'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <LogotypeLocal width={'70px'} height={'70px'} />
            <SeparatorStyled
                width={'1px'}
                height={'20px'}
                orientation={'vertical'}
            />
            <ThemeSwitch />
            <SeparatorStyled
                width={'1px'}
                height={'20px'}
                orientation={'vertical'}
            />
            <NavLink to={'user/'} end>
                <Avatar>
                    <AvatarFallbackStyled>ZR</AvatarFallbackStyled>
                </Avatar>
            </NavLink>
        </ContainerFlex>
    )
}

export default HeaderLeftPanel
