import { CSSProperties } from "react"
import { css } from "styled-components"

interface BaseFontProps {
    weight?: CSSProperties["fontWeight"]
    family: CSSProperties["fontFamily"]
}

export const baseFont = ({ weight, family }: BaseFontProps) => css`
    font-weight: ${weight || 400};
    font-family:  ${family}, sans-serif;
`




