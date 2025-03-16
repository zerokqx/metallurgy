import { JSX } from 'react'
import { DataNav } from '@/types/header/header.types'
import { HeaderStyle } from '@/styledComponents/header.stl'
import styled, { useTheme } from 'styled-components'
import logotype from '@/assets/Group 5.svg'
import { size } from '@/styledComponents/css/size.stl.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { Theme } from '@/styledComponents/css/theme.stl.ts'
import IconWithText from '@/lib/components/IconWithText.tsx'
import { MotionConfig } from 'motion/react'

const Logotype = () => {
    const theme = useTheme() as Theme
    const LogotypeLocal = styled.img.attrs({ src: logotype })`
        ${size};
    `
    return (
        <ContainerFlex background={theme.background.lowWhite} style={{
            borderRadius: '20px',
            border: `3px ${theme.border.accent}  solid`,
        }} x={'center'} y={'center'}>
            <LogotypeLocal width={'70px'} height={'70px'} />
        </ContainerFlex>
    )
}


const Header: ({ data }: { data: DataNav[] }) => JSX.Element = ({ data }) => {
    const theme = useTheme() as Theme

    return (
        <>
            <MotionConfig transition={{ duration: 1 }}>
                <HeaderStyle
                    initial={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
                    animate={{ gridTemplateColumns: '100px 1fr' }}
                    x={'center'}
                    y={'center'}
                    col={'100px 1fr'}
                    colGap={'10px'}
                    row={'1'}
                    className="header header--flex"
                >
                    <Logotype />
                    <ContainerFlex background={theme.background.lowWhite} padding={'20px'}
                                   style={{
                                       borderRadius: '20px',
                                       border: `3px ${theme.border.accent} solid`,
                                   }} x={'center'} y={'center'} width={'max-content'}>
                        {data.map(({ text, icon, link }, index) => (
                            <IconWithText key={index}>
                                {icon}
                                <a
                                    key={index}
                                    href={link || ''}
                                    className="header__text header__text--rubik-font"
                                >
                                    {text}
                                </a>
                            </IconWithText>

                        ))}
                    </ContainerFlex>

                </HeaderStyle>
            </MotionConfig>
        </>
    )
}

export default Header
