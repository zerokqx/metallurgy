import styled, { CSSProperties } from 'styled-components'
import { baseFont } from '@/styledComponents/css/font.stl.ts'
import { BaseFontProps } from '@/Types/styledComponents/font.types'
import { lightTheme } from '@/styledComponents/css/theme.stl.ts'

interface ExtendedSpanBlueProps extends BaseFontProps {
    color?: CSSProperties["color"],
    height?: CSSProperties["height"]
}

interface CustomParagraphProps extends BaseFontProps{
    color:  keyof typeof lightTheme.text
}

export const SpanBlue = styled.span<ExtendedSpanBlueProps>`
    color: ${({ color }) => color};
    ${({ wg, fs }) => baseFont({ fm: "Rubik", wg, fs })}
    height: max-content;
`


export  const CustomP = styled.p<CustomParagraphProps>`
    color: ${({ color ,theme}) => theme.text[color] };
    ${({ wg, fs }) => baseFont({ wg, fs,fm:"Rubik" })};
    height: max-content;
    
    

`
