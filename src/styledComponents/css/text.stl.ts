import styled, { CSSProperties } from 'styled-components'
import { baseFont } from '@/styledComponents/css/font.stl.ts'
import { BaseFontProps } from '@/types/styledComponents/font.types'

interface ExtendedSpanBlueProps extends BaseFontProps {
    color?: CSSProperties['color']
    height?: CSSProperties['height']
}


interface CustomParagraphProps extends BaseFontProps {
    color: CSSProperties['color']
}

export const SpanBlue = styled.span<ExtendedSpanBlueProps>`
    color: ${({ color }) => color};
    ${({ wg, fs }) => baseFont({ fm: 'Rubik', wg, fs })}
    ${({ wg, fs }) => baseFont({ fm: 'Rubik', wg, fs })}
    height: max-content;
`


export const CustomP = styled.p<CustomParagraphProps>`
    color: ${({ color }) => color};
    ${({ wg, fs }) => baseFont({ wg, fs, fm: 'Rubik' })};
    height: max-content;



`
