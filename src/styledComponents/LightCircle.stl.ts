import styled, { CSSProperties } from 'styled-components'
import { motion } from 'motion/react'
import { size } from '@/styledComponents/css/size.stl'
import { position } from '@/styledComponents/css/position.stl'
import { SizeProps } from '@/types/styledComponents/css/size.type.ts'
import { TPositionProps } from '@/types/styledComponents/css/position.types.ts'

export type LightCircleStyledProps = Pick<CSSProperties, 'backgroundColor'> & {
    blur?: number
}
const BlurableBlock = styled(motion.div)<
    Readonly<SizeProps & LightCircleStyledProps & TPositionProps>
>`
    ${size};
    ${position};
    filter: blur(${(props) => props.blur}px);
    background-color: ${(props) => props.backgroundColor};
`

export default BlurableBlock
