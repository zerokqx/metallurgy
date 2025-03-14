import { JSX } from 'react'
import { DataNav, DataNavScheme } from '@/Types/header/header.types'
import { HeaderStyle } from '@/styledComponents/header.stl'
import styled, { useTheme } from 'styled-components'
import logotype from '@@/Group 5.svg'
import { size } from '@/styledComponents/css/size.stl.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { Theme } from '@/styledComponents/css/theme.stl.ts'


const Logotype = () => {
    const theme = useTheme() as Theme
    const LogotypeLocal = styled.img.attrs<{ src: string }>({ src: logotype })`
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


const Header: ({ data }: { data: DataNav }) => JSX.Element = ({ data }) => {
    const theme = useTheme() as Theme
    DataNavScheme.parse(data)

    return (
        <>
            <HeaderStyle x={'center'} y={'center'} col={'100px 1fr'} colGap={'10px'} row={'1'}
                         className="header header--flex">
                <Logotype />
                <ContainerFlex background={theme.background.lowWhite} padding={'20px'} style={{
                    borderRadius: '20px',
                    border: `3px ${theme.border.accent} solid`,
                }} x={'center'} y={'center'} maxWidth={'max-content'}>
                    {data.map((element, index) => (
                        <a
                            key={index}
                            href={element.link || ''}
                            className="header__text header__text--rubik-font"
                        >
                            {element.text}
                        </a>

                    ))}
                </ContainerFlex>

            </HeaderStyle>
        </>
    )
}

export default Header
