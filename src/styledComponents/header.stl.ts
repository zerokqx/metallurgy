import styled from 'styled-components'
import flexBox from './css/flex.stl.ts'
import { baseFont } from './css/font.stl.ts'

const spaceBase = 20
export const toPx = (num: number) => `${num}px`

export const HeaderStyle = styled.header`

    background-color: ${props => props.theme.background.white};
    border-bottom: 1px solid ${props => props.theme.border.borderPlatinum};
    width: 100%;
    ${flexBox({
    direction: 'row',
    x: 'center',
    y: 'center',
    gap: toPx(spaceBase),
})}
    padding: ${toPx(spaceBase)};

    .header__text {
        color: ${props => props.theme.background.textNight};
        &--golos-font {
            ${baseFont({ weight: 500, family: 'Rubik' })}
        }
    }
`
