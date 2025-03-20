import { css } from 'styled-components'
import TAlignProperties from '@/types/styledComponents/css/alignJustify.types'

/**
 * @description Стили для выравнивания элементов
 * @param props
 */
export const alignStyles = css<Readonly<TAlignProperties>>`
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    align-content: ${(props) => props.alignContent};
    justify-self: ${(props) => props.justifySelf};
    align-self: ${(props) => props.alignSelf};
    justify-items: ${(props) => props.justifyItems};
`
