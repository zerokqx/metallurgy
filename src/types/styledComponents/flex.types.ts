import { CSSProperties } from 'styled-components/dist/types'

export type TFlexBox = Partial<
    Partial<
        Pick<
            CSSProperties,
            'flexDirection' | 'justifyContent' | 'alignItems' | 'gap'
        >
    >
>
