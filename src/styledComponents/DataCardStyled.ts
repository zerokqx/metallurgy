import styled from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'

export const DataCardStyled = styled.div`
    row-gap: 0px;
    height: 200px;
    display: flex;
    width: 400px;
    flex-direction: column;
    overflow: hidden;
    padding: 10px;
    justify-content: start;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => (theme as TTheme).background.accent};
    background: ${({ theme }) => (theme as TTheme).background.primary};
`
export const LightText = styled.p`
    font-weight: normal;
    opacity: 0.8;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;      /* Ограничение количества строк */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => (theme as TTheme).text.primary};`
export const UserPersonality = styled.div`
    display: flex;
    height: max-content;
    flex-direction: row;
    column-gap: 10px;
    row-gap: 5px;
    & h1{
        font-weight: bold;
        color: ${({ theme }) => (theme as TTheme).text.primary};
    }

`

export const Price = styled.h2`
    font-weight: bold;
    opacity: 0.8;
    width: max-content;
    color: ${({ theme }) => (theme as TTheme).text.accent};
`