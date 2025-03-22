import { TDataNav } from '@/types/components/header/header.types'
import { HeaderStyle } from '@/styledComponents/header.stl'
import { useTheme } from 'styled-components'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import IconWithText from '@/styledComponents/IconWithText.tsx'
import { MotionConfig } from 'motion/react'
import { cloneElement, FC } from 'react'
import { useDispatch } from 'react-redux'
import { setBlur } from '@/redux/slices/blurSlice.ts'
import HeaderLeftPanel from '@/components/Header/HeaderLeftPanel.tsx'
import TTheme from '@/types/styledComponents/css/theme/theme.types'

const Header: FC<{ data: TDataNav[] }> = ({ data }) => {
    const theme = useTheme() as TTheme
    const dispatch = useDispatch()

    return (
        <>
            <MotionConfig transition={{ duration: 1 }}>
                <HeaderStyle
                    onHoverStart={() => {
                        dispatch(setBlur(true))
                    }}
                    onHoverEnd={() => {
                        dispatch(setBlur(false))
                    }}
                    alignItems={'center'}
                    justifyItems={'center'}
                    gridTemplateColumns={'max-content 1fr'}
                    gridTemplateRows={'1fr'}
                >
                    <HeaderLeftPanel />
                    <ContainerFlex
                        background={theme.background.accent}
                        padding={'20px'}
                        style={{
                            borderRadius: '20px',
                            border: `3px ${theme.border.accent} solid`,
                        }}
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={'max-content'}
                        gap={'10px'}
                    >
                        {data.map(({ text, icon, link }, index) => (
                            <IconWithText key={index}>
                                {cloneElement(icon, {
                                    color: theme.icon.primary, // Устанавливаем динамический цвет
                                })}
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
