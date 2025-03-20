import styled, { useTheme } from 'styled-components'
import { size } from '@/styledComponents/css/size.stl'
import { ContainerFlex } from '@/styledComponents/Containers.stl'
import logotype from '@/assets/Group 5.svg'
import { TTheme } from '@/styledComponents/css/theme.stl.ts'
import ThemeSwitch from '@/components/Header/ThemeSwitch.tsx'

const Logotype = () => {
    const theme = useTheme() as TTheme

    const LogotypeLocal = styled.img.attrs({ src: logotype })`
        ${size};
    `
    return (
        <ContainerFlex
            background={theme.background.lowWhite}
            width={'max-content'}
            style={{
                borderRadius: '20px',
                border: `3px ${theme.border.accent}  solid`,
            }}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <LogotypeLocal width={'70px'} height={'70px'} />
            <ThemeSwitch />
        </ContainerFlex>
    )
}

export default Logotype
