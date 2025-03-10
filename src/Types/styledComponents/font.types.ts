import { CSSProperties } from "styled-components"
import { z } from "zod"




export interface BaseFontProps {
    weight: CSSProperties["fontWeight"],
    family: CSSProperties["fontFamily"]
}