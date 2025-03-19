import { CSSProperties } from 'styled-components'

export type TPositionProps = Pick<
    CSSProperties,
    'position' | 'top' | 'right' | 'bottom' | 'left' | 'zIndex'
>
