import { css } from 'styled-components'
import { TFlexBox } from '@/types/styledComponents/flex.types.ts'

/**
 * @description Стили FlexBox
 * @param props
 */
const flexBox = (props: Readonly<TFlexBox>) => css`
    display: flex;
    flex-direction: ${props.flexDirection || 'inherit'};
    gap: ${props.gap || 'inherit'};
`

export default flexBox
