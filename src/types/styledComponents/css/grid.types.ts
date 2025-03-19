import { CSSProperties } from 'styled-components/dist/types'
import { TAlignContentItems } from '@/types/styledComponents/css/alignJustify.types'

export type TContainerGrid = Partial<
    Pick<CSSProperties, 'gridTemplateAreas' | 'columnGap' | 'rowGap'>
> &
    Required<Pick<CSSProperties, 'gridTemplateColumns' | 'gridTemplateRows'>> &
    TAlignContentItems
export default TContainerGrid
