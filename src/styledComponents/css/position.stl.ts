import { css, CSSProperties } from 'styled-components'

export type PositionProps = Pick<
    CSSProperties,
    'position' | 'top' | 'right' | 'bottom' | 'left' | 'zIndex'
>;

export const position = css<PositionProps>`
    position: ${(props) => props.position || 'static'};
    top: ${(props) => props.top || 'auto'};
    right: ${(props) => props.right || 'auto'};
    bottom: ${(props) => props.bottom || 'auto'};
    left: ${(props) => props.left || 'auto'};
    z-index: ${(props) => props.zIndex || 'auto'};
`