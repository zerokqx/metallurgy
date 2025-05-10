import { ContainerFlex } from '@/styledComponents/Containers.stl'
import IconWithText from '@/styledComponents/IconWithText'
import { cloneElement, FC, ReactNode } from 'react'
import { NavLink, useLoaderData } from 'react-router'
import { TDataNav } from '@/types/components/header/header.types.ts'
import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types.ts'
import { LangSelector } from '@/components/LanguageSelector/LangSelector'

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
                        color: theme.icon.accent,
                    })}
                    <NavLink
                        key={index}
                        to={link || ''}
                        className={'header__text header__text--rubik-font'}
                    >
                        {text}
                    </NavLink>
                </IconWithText>
            ))}
            <LangSelector />
        </ContainerFlex>
    )
}

export default HeaderCenter
