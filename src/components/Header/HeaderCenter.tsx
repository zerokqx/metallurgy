import { ContainerFlex } from '@/styledComponents/Containers.stl'
import IconWithText from '@/styledComponents/IconWithText'
import { cloneElement, FC, ReactNode } from 'react'
import { useLoaderData } from 'react-router'
import { TDataNav } from '@/types/components/header/header.types.ts'
import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types.ts'

const HeaderCenter: FC<{ children?: ReactNode }> = ({ children }) => {
    const data = useLoaderData<TDataNav[]>()
    const theme = useTheme() as TTheme

    return (
        <ContainerFlex
            background={theme.background.accent}
            padding={'5px'}
            style={{
                borderRadius: '20px',
                border: `3px ${theme.border.accent} solid`,
            }}
            justifyContent={'center'}
            alignItems={'center'}
            width={'90%'}
            gap={'1%'}
        >
            {children}
            {data.map(({ text, icon, link }, index) => (
                <IconWithText key={index}>
                    {cloneElement(icon, {
                        color: theme.icon.primary,
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
    )
}

export default HeaderCenter
