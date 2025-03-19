import { css } from 'styled-components'
import { TBaseFontProps } from '@/types/styledComponents/font.types.ts'

/**
 * @description Конструктор стилей для шрифтов
 * @param fontWeight Жирность шрифта
 * @param fontFamily Семейство шрифта
 * @param fontSize Размер шрифта
 */
export const baseFont = ({
    fontFamily,
    fontWeight,
    fontSize,
}: Readonly<TBaseFontProps>) => css`
    font-weight: ${fontWeight || 400};
    font-family: ${fontFamily}, sans-serif;
    font-size: ${fontSize || '20px'};
`
