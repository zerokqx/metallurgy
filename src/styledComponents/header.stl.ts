import styled from 'styled-components'
import flexBox from './css/flex.stl.ts'
import { baseFont } from './css/font.stl.ts'

const spaceBase = 20
export const toPx = (num: number) => `${num}px`

export const HeaderStyle = styled.header`

    background-color: var(--dark-gray);
    border-bottom: 2px solid var(--bruze-color);
    width: 100%;
    ${flexBox({
    direction: 'row',
    x: 'center',
    y: 'center',
    gap: toPx(spaceBase),
})}
    padding: ${toPx(spaceBase)};

    .header__text {
        color: white;
        &--golos-font {
            ${baseFont({ weight: 400, family: 'GolosTextWebRegular' })}
        }
    }
`
