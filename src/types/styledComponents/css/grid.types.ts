import { CSSProperties } from 'styled-components/dist/types'
import TAlignProperties from '@/types/styledComponents/css/alignJustify.types'

export type TContainerGrid = Partial<
    Pick<CSSProperties, 'gridTemplateAreas' | 'columnGap' | 'rowGap'>
> &
    Required<Pick<CSSProperties, 'gridTemplateColumns' | 'gridTemplateRows'>> &
    TAlignProperties
export default TContainerGrid
