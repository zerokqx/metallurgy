import styled, { CSSProperties } from 'styled-components'
import { motion } from 'motion/react'
import { size, SizeProps } from '@/styledComponents/css/size.stl'
import { position, PositionProps } from '@/styledComponents/css/position.stl'


export type LightCircleStyledProps = Pick<CSSProperties, 'backgroundColor'> & {
    blur?: number,
}
const BlurableBlock = styled(motion.div)<SizeProps
    & LightCircleStyledProps
    & PositionProps>`
    ${size};
    ${position};
    filter: blur(${props => props.blur}px);
    background-color: ${(props) => props.backgroundColor};
    
`

export default BlurableBlock