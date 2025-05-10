import { CSSProperties } from 'styled-components'

export type TPosition = Partial<
    Pick<
        CSSProperties,
        'position' | 'top' | 'right' | 'bottom' | 'left' | 'zIndex'
    >
>
