import { css } from 'styled-components'
import { BaseFontProps } from '@/types/styledComponents/font.types.ts'

/**
 * @description Конструктор стилей для шрифтов
 * @param wg Жирность шрифта
 * @param fm Семейство шрифта
 * @param fs Размер шрифта
 */
export const baseFont = ({ wg, fm, fs }: BaseFontProps) => css`
    font-weight: ${wg || 400};
    font-family:  ${fm}, sans-serif;
    font-size: ${fs || '20px'};
`




