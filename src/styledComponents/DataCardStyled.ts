import styled from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'


export const DataCardStyled = styled.div`
    
    aspect-ratio: auto;
    column-gap: 10px;
    row-gap: 10px;
    height: max-content;
    display: flex;
    width: 600px;
    flex-direction: row;
    overflow: hidden;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => (theme as TTheme).background.accent};
    background: ${({ theme }) => (theme as TTheme).background.primary};
    
    
`


export const DataCardTitle = styled.h2`
color: ${({ theme }) => (theme as TTheme).text.accent};
font-weight: bold;
    text-wrap: nowrap;
    height: max-content;
`
export const DataCardRabota = styled.h3`
    font-weight: bold;
    color: ${({ theme }) => (theme as TTheme).text.accent};
    text-wrap: nowrap;
    height: max-content;
`
export const DataCardText = styled.p`
    font-weight:normal;
    padding: 2px;
    width: 100%;
    word-wrap: break-word;
    border-radius: 5px;
    background: ${({ theme }) => (theme as TTheme).background.accent};
    color: ${({ theme }) => (theme as TTheme).text.primary};
    height: max-content;
`
