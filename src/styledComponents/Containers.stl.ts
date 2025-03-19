import styled, { css } from 'styled-components'
import { TContainerFlex } from '@/types/styledComponents/containers.types'
import { motion } from 'motion/react'
import { TSpacing } from '@/types/styledComponents/css/spacing.types.ts'
import { TFlexBox } from '@/types/styledComponents/flex.types'
import flexBox from '@/styledComponents/css/flex.stl'
import { size } from '@/styledComponents/css/size.stl'
import { spacing } from '@/styledComponents/css/spaces.stl'
import { alignStyles } from '@/styledComponents/css/alignJustify.stl'
import TContainerGrid from '@/types/styledComponents/css/grid.types'
import TAlignProperties from '@/types/styledComponents/css/alignJustify.types'

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
    Readonly<
        TContainerFlex &
            TSpacing &
            TFlexBox &
            Pick<TAlignProperties, 'justifyContent' | 'alignItems'>
    >
>`
    ${alignStyles}
    ${flexBox};
    ${size};
    ${spacing};
    background-color: ${(props) => props.background || 'transparent'};
    padding: ${(props) => props.padding || '0px'};
    margin: ${(props) => props.margin || '0px'};
`

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
 * @param {TContainerGrid} props
 * @returns {React.ComponentType} - A styled grid container component.
 */
export const gridBox = css<Readonly<TContainerGrid>>`
    ${alignStyles};
    display: grid;
    grid-template-columns: ${(props) => props.gridTemplateColumns};
    grid-template-rows: ${(props) => props.gridTemplateRows};
    grid-template-areas: ${(props) => props.gridTemplateAreas};
    column-gap: ${(props) => props.columnGap};
    row-gap: ${(props) => props.rowGap};
    justify-items: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
`
