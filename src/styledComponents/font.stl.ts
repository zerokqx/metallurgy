import { CSSProperties } from "react"
import { css } from "styled-components"



interface NunitoProps {
    weight: CSSProperties["fontWeight"]
}

export const nunito = ({ weight }: NunitoProps) => css`
    font-weight: ${weight || 400};
    font-family:  "Nunito Sans", sans-serif;
`

export const golos = ({ weight }: NunitoProps) => css`
    font-weight: ${weight || 400};
    font-family:  "GolosTextWebRegular",sans-serif ;
`
