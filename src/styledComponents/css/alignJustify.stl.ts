import { css } from 'styled-components'
import TAlignProperties from '@/types/styledComponents/css/alignJustify.types'

/**
 * @description Стили для выравнивания элементов
 * @param props
 */
export const alignStyles = (props: Readonly<TAlignProperties>) => css`
    ${props.justifyContent && `justify-content: ${props.justifyContent};`}
    ${props.alignItems && `align-items: ${props.alignItems};`}
    ${props.alignContent && `align-content: ${props.alignContent};`}
    ${props.justifySelf && `justify-self: ${props.justifySelf};`}
    ${props.alignSelf && `align-self: ${props.alignSelf};`}
`
