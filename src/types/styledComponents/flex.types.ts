import { CSSProperties } from 'styled-components/dist/types'

export type TFlexBox = Partial<
    Pick<CSSProperties, 'direction' | 'justifyContent' | 'alignItems' | 'gap'>
>
