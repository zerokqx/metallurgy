import { CSSProperties } from 'styled-components'
import { TPosition } from '@/types/styledComponents/css/position.types'
import { TSize } from '@/types/styledComponents/css/size.type'

export type TGlassEffect = Partial<
    Readonly<
        Pick<CSSProperties, 'opacity' | 'display'> &
            TPosition &
            TSize & {
                blur?: number
                stateBlur?: boolean
            }
    >
>

export default TGlassEffect
