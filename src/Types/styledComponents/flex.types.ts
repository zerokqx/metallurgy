import { CSSProperties } from "styled-components/dist/types";


export interface FlexBoxProps {
    direction?: CSSProperties["flexDirection"];
    x?: CSSProperties["justifyContent"];
    y?: CSSProperties["alignItems"]
    gap?: CSSProperties["gap"]
}