import { CSSProperties } from "styled-components"




export interface BaseFontProps {
    weight: CSSProperties["fontWeight"],
    family: CSSProperties["fontFamily"]
    fs?: CSSProperties["fontSize"]
}