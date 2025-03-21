import { css } from 'styled-components'
import { TFlexBox } from '@/types/styledComponents/flex.types.ts'

/**
 * @description Стили FlexBox
 * @param props
 */
const flexBox = css<Readonly<TFlexBox>>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    gap: ${(props) => props.gap};
`

export default flexBox
