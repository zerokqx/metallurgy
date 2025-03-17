import styled, { CSSProperties } from 'styled-components'
import { position, PositionProps } from '@/styledComponents/css/position.stl'
import { size, SizeProps } from '@/styledComponents/css/size.stl'

// interface GlassEffectProps {
//     blur?: number;
//     opacity?: number;
// }
type GlassEffectProps = Pick<CSSProperties, 'opacity' | 'display'>
    & PositionProps
    & SizeProps
    & {
    blur?: number,
    stateBlur?: boolean,
}


const GlassEffect = styled.div<GlassEffectProps>`
    ${position};
    ${size};
    pointer-events: none;
        //display: ${props => props.display};
    opacity: ${props => props.opacity || 1};
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 20px;
    background: rgba(255, 255, 255, 0.27);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`

export default GlassEffect