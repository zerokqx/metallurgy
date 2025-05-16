import styled, { css, CSSProperties } from 'styled-components';
import TTheme from '@/types/styledComponents/css/theme/theme.types';

// Общие стили для текста с обрезкой
const TextEllipsisStyled = css`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// Универсальный компонент для текстов
const BaseText = styled.p<{ opacity?: CSSProperties['opacity'], color?: string }>`
    font-weight: normal;
    text-align: left;
    opacity: ${({ opacity }) => opacity || 0.8};
    color: ${({ color, theme }) => color || theme.text.primary};
`;

export const LightText = styled(BaseText)`
    ${TextEllipsisStyled}
`;

export const CardName = styled(BaseText)`
    font-weight: bold;
`;

export const Price = styled(BaseText)`
    font-weight: bold;
    color: ${({ theme }) => theme.text.accent};
`;

// Общие контейнерные стили
const FlexContainer = styled.div`
    display: flex;
`;

export const DataCardStyled = styled(FlexContainer)`
    row-gap: 0px;
    height: 200px;
    border:2px solid ${({ theme }) => (theme as TTheme).border.accent};
    width: 400px;
    flex-direction: column;
    overflow: hidden;
    padding: 10px;
    justify-content: start;
    border-radius: 20px;
    transition: .2s ease-in;
    background: ${({ theme }) => (theme as TTheme).background.primary};
    &:hover {
        
        transform: translateY(-2px);
        box-shadow: 20px 20px 100px rgba(0, 0, 0, 0.1); /* Базовая тень */
        
    }
 
    

 
`;

export const UserPersonality = styled(FlexContainer)`
    height: max-content;
    flex-direction: row;
    column-gap: 10px;
    row-gap: 5px;

    & h1 {
        font-weight: bold;
        color: ${({ theme }) => (theme as TTheme).text.primary};
    }
`;
