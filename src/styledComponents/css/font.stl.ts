import { css } from "styled-components"
import { BaseFontProps } from "@/Types/styledComponents/font.types.ts"

/**
 * @description Конструктор стилей для шрифтов
 * @param weight Жирность шрифта
 * @param family Семейство шрифта
 */
export const baseFont = ({ weight, family, fs }: BaseFontProps) => css`
    font-weight: ${weight || 400};
    font-family:  ${family}, sans-serif;
    font-size: ${fs || "20px"};
`




