import styled from 'styled-components'
import { motion } from 'motion/react'
import { TTheme } from '@/styledComponents/css/theme.stl'

export const FooterStyled = styled(motion.footer)`
    padding: 10px;
    height: 70px;
    background: ${({ theme }) => theme.background.white};
    border-top: ${({ theme }) => (theme as TTheme).contrast.accent} 2px solid;
    width: 100%;
    display: flex;
`
