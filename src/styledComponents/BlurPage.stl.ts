import styled from 'styled-components'
import { position } from '@/styledComponents/css/position.stl'
import { size } from '@/styledComponents/css/size.stl'
import TGlassEffect from '@/types/styledComponents/blurPage.types'
import { TTheme } from '@/styledComponents/css/theme.stl'

const GlassEffect = styled.div<TGlassEffect>`
    ${position};
    ${size};
    pointer-events: none;
    opacity: ${(props) => props.opacity || 1};
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 20px;
    background: ${({ theme }) => (theme as TTheme).glass.accent};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`

export default GlassEffect
