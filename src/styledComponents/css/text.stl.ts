import styled from 'styled-components'
import { baseFont } from '@/styledComponents/css/font.stl.ts'
import { Theme } from '@/styledComponents/css/theme.stl.ts'


export const SpanBlue = styled.span`
    color: ${({ color }) => color};
    ${baseFont({family:"Rubik",weight:600})}
    font-size: ${({fontSize}) => fontSize };
    height: max-content;
`

export const EmojiInsert = styled.span`
    font-size: ${({fontSize}) => fontSize};
    text-shadow:
            0 0 30px rgba(255, 202, 40, 0.7); 
            0 0 40px rgba(255, 202, 40, 0.5); 
            0 0 5px #FFCA28,  
            0 0 10px #FFCA28, 
            0 0 20px #FFCA28, 
         
`