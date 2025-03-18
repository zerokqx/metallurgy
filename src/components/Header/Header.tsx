import { DataNav } from '@/types/components/header/header.types'
import { HeaderStyle } from '@/styledComponents/header.stl'
import styled, { useTheme } from 'styled-components'
import logotype from '@/assets/Group 5.svg'
import { size } from '@/styledComponents/css/size.stl.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { Theme } from '@/styledComponents/css/theme.stl.ts'
import IconWithText from '@/lib/components/IconWithText.tsx'
import { MotionConfig } from 'motion/react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setBlurAuto } from '@/redux/slices/blurSlice.ts'

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

interface HeaderProps {
    data: DataNav[];

}

const Header: FC<HeaderProps> = ({ data }) => {
    const theme = useTheme() as Theme
    const dispatch = useDispatch()
    return (
        <>
            <MotionConfig transition={{ duration: 1 }}>
                <HeaderStyle
                    onHoverStart={() => {
                        dispatch(setBlurAuto())
                    }}
                    onHoverEnd={() => {
                        dispatch(setBlurAuto())
                    }}
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