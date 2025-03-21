import TContainerGrid from '@/types/styledComponents/css/grid.types'
import TAlignProperties from '@/types/styledComponents/css/alignJustify.types'
import { TSize } from '@/types/styledComponents/css/size.type'

export type THeaderStyle = Readonly<
    TContainerGrid &
        Pick<TAlignProperties, 'justifyItems' | 'alignItems'> &
        Pick<TSize, 'width'>
>
