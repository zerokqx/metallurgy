import styled, { css } from 'styled-components'
import { TContainerFlex } from '@/types/styledComponents/containers.types'
import flexBox from './css/flex.stl.ts'
import { size } from '@/styledComponents/css/size.stl.ts'
import { CSSProperties } from 'styled-components/dist/types'
import { spacing } from '@/styledComponents/css/spaces.stl.ts'
import { motion } from 'motion/react'
import { TFlexBox } from '@/types/styledComponents/flex.types.ts'
import { TSpacing } from '@/types/styledComponents/css/spacing.types.ts'

/**
 * @description Div контейнер с некими настройками стилей
 * @param {string} [props.direction] Какой flex контейнер будет row или column или другие
 * @param {string} [props.justifyContent] justify выравнивание для flex контейнера `(По оси X)`
 * @param {string} [props.alignItems] align выравнивание для flex контейнера `(По оси Y)`
 * @param {string} [props.gap] Растояние (Пробел) между flex элементами
 * @param {string} [props.background] Цвет фона контейнера свойство background-color
 * @param {string} [props.padding] Внутрение пробелы
 * @param {string} [props] Внейшние пробелы
 * @component
 * @see spacing
 * @see size
 * @see flexBox
 */

export const ContainerFlex = styled(motion.div)<
    Readonly<TContainerFlex & TSpacing & TFlexBox>
>`
    ${flexBox};
    ${size};
    ${spacing};
    background-color: ${(props) => props.background || 'transparent'};
    padding: ${(props) => props.padding || '0px'};
    margin: ${(props) => props.margin || '0px'};
`

/**
 * @property {CSSProperties['gridTemplateColumns']} col - Определяет структуру столбцов в сетке, например, "1fr 2fr" или "repeat(3, 1fr)".
 * Значение может включать фиксированные размеры (px, %, fr) или автоматическое распределение (auto).
 * @property {CSSProperties['gridTemplateRows']} row - Определяет структуру строк в сетке, например, "100px auto 1fr".
 * Используется для задания высоты строк, аналогично столбцам.
 * @property {CSSProperties['gridTemplateAreas']} areas - Задаёт именованные области сетки.
 * Значение записывается в виде строк, например, `"header header" "sidebar main"`. Это помогает размещать элементы в логических зонах.
 * @property {CSSProperties['columnGap']} colGap - Устанавливает промежуток между столбцами в сетке.
 * Значение задаётся в единицах CSS, таких как "10px", "1rem", и т.д.
 * @property {CSSProperties['rowGap']} rowGap - Устанавливает промежуток между строками в сетке.
 * Работает аналогично `colGap` для строк.
 * @property {CSSProperties['justifyContent']} x - Определяет горизонтальное выравнивание содержимого сетки.
 * Возможные значения: "start", "center", "end", "space-between", "space-around", "space-evenly".
 * @property {CSSProperties['alignItems']} y - Определяет вертикальное выравнивание содержимого сетки.
 * Возможные значения: "start", "center", "end", "stretch".
 */
export interface ContainerGridProps {
    col?: CSSProperties['gridTemplateColumns']
    row?: CSSProperties['gridTemplateRows']
    areas?: CSSProperties['gridTemplateAreas']
    colGap?: CSSProperties['columnGap']
    rowGap?: CSSProperties['rowGap']
    x?: CSSProperties['justifyContent']
    y?: CSSProperties['alignItems']
}

/**
 * A styled grid container component with customizable properties.
 *
 * Example usage:
 * ```tsx
 * <ContainerGrid
 *   col="repeat(3, 1fr)"
 *   row="100px auto"
 *   areas='"header header" "sidebar main"'
 *   colGap="20px"
 *   rowGap="10px"
 *   x="center"
 *   y="stretch"
 * />
 * ```
 *
 * @param {ContainerGridProps} props
 * @returns {React.ComponentType} - A styled grid container component.
 */
export const gridBox = css<ContainerGridProps>`
    display: grid;
    grid-template-columns: ${(props) => props.col};
    grid-template-rows: ${(props) => props.row};
    grid-template-areas: ${(props) => props.areas};
    column-gap: ${(props) => props.colGap};
    row-gap: ${(props) => props.rowGap};
    justify-items: ${(props) => props.x};
    align-items: ${(props) => props.y};
`
