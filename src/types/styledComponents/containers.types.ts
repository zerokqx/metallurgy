import { TFlexBox } from './flex.types'
import { CSSProperties } from 'styled-components'

export type TContainerFlex = Partial<Pick<
    CSSProperties,
    | 'background'
    | 'padding'
    | 'margin'
    | 'maxWidth'
    | 'maxHeight'
    | 'width'
    | 'height'
>> &
    TFlexBox
