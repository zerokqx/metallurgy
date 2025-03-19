import styled, { CSSProperties } from 'styled-components'
import { baseFont } from '@/styledComponents/css/font.stl.ts'
import { TBaseFontProps } from '@/types/styledComponents/font.types'

interface ExtendedSpanBlueProps extends TBaseFontProps {
    color?: CSSProperties['color']
    height?: CSSProperties['height']
}

interface CustomParagraphProps extends TBaseFontProps {
    color: CSSProperties['color']
}

export const SpanBlue = styled.span<Readonly<ExtendedSpanBlueProps>>`
    color: ${({ color }) => color};
    ${({ fontWeight, fontSize }) =>
        baseFont({ fontFamily: 'Rubik', fontWeight, fontSize })}
    ${({ fontWeight, fontSize }) =>
        baseFont({ fontFamily: 'Rubik', fontWeight, fontSize })}
    height: max-content;
`

export const CustomP = styled.p<CustomParagraphProps>`
    color: ${({ color }) => color};
    ${({ fontWeight, fontSize }) =>
        baseFont({ fontWeight, fontSize, fontFamily: 'Rubik' })};
    height: max-content;
`
