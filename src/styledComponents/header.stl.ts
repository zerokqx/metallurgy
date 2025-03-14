import styled from 'styled-components'
import { baseFont } from './css/font.stl.ts'
import { ContainerGridProps, gridBox } from '@/styledComponents/Containers.stl.ts'
import { Theme } from '@/styledComponents/css/theme.stl.ts'

const spaceBase = 20
export const toPx = (num: number) => `${num}px`


export const HeaderStyle = styled.header<ContainerGridProps>`
    ${gridBox};

    background-color: transparent;
    width: 100%;
    padding: ${toPx(spaceBase)};


    .header__text {
        color: ${({ theme }) => (theme as Theme).text.accent};

        &--rubik-font {
            ${baseFont({ wg: 500, fm: 'Rubik' })}
        }
    }
`
