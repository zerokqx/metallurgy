import styled from 'styled-components'
import { baseFont } from './css/font.stl.ts'
import { gridBox } from '@/styledComponents/Containers.stl.ts'
import { Theme } from '@/styledComponents/css/theme.stl.ts'
import { motion } from 'motion/react'
import { alignStyles } from '@/styledComponents/css/alignJustify.stl'
import { THeaderStyle } from '@/types/styledComponents/header.types'

const spaceBase = 20
export const toPx = (num: Readonly<number>): string => `${num}px`

export const HeaderStyle = styled(motion.header)<THeaderStyle>`
    ${gridBox};
    ${alignStyles};
    background-color: transparent;
    padding: ${toPx(spaceBase)};
    z-index: 100;

    .header__text {
        color: ${({ theme }) => (theme as Theme).text.accent};

        &--rubik-font {
            ${baseFont({ fontWeight: 500, fontFamily: 'Rubik' })}
        }
    }
`
