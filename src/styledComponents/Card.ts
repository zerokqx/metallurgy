import styled from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'

export const CardStyled = styled.div`
    padding: 15px;
    column-gap: 10px;
    row-gap: 10px;
    flex-shrink:0;
    min-height: 100px;
    display: grid;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => (theme as TTheme).background.accent};
    background: ${({ theme }) => (theme as TTheme).background.primary};
`
