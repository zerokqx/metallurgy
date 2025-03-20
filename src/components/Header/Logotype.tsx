import styled, { useTheme } from 'styled-components'
import { TTheme } from '@/styledComponents/css/theme.stl.ts'
import logotype from '@/assets/Group 5.svg'
import { size } from '@/styledComponents/css/size.stl.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'

const Logotype = () => {
    const theme: TTheme = useTheme() as TTheme
    const LogotypeLocal = styled.img.attrs({ src: logotype })`
        ${size};
    `
    return (
        <ContainerFlex
            background={theme.background.lowWhite}
            style={{
                borderRadius: '20px',
                border: `3px ${theme.border.accent}  solid`,
            }}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <LogotypeLocal width={'70px'} height={'70px'} />
        </ContainerFlex>
    )
}

export default Logotype
