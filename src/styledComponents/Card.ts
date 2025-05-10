import styled from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'


export const CardStyled = styled.div`
    width: max-content;
    padding: 15px;
    max-height: 400px;
    
    column-gap: 10px;
    row-gap: 10px;
    display: grid;
    border-radius: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 30%;
    border:2px solid ${({theme})=> (theme as TTheme).background.accent};
    background: ${({theme})=> (theme as TTheme).background.primary};
`