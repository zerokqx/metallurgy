import styled from 'styled-components'
import { motion } from 'motion/react'

export const FooterStyled = styled(motion.footer)`
    padding: 10px;
    height: 70px;
    background: ${({ theme }) => theme.background.white};
    border-top: ${({ theme }) => theme.contrast.contrastRISD_Blue} 2px solid;
    width: 100%;
    display: flex;



`