import { css } from 'styled-components'

export const position = css<Readonly<TPositionProps>>`
    position: ${(props) => props.position || 'static'};
    top: ${(props) => props.top || 'auto'};
    right: ${(props) => props.right || 'auto'};
    bottom: ${(props) => props.bottom || 'auto'};
    left: ${(props) => props.left || 'auto'};
    z-index: ${(props) => props.zIndex || 'auto'};
`
