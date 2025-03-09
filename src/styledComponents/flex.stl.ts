import { css } from "styled-components";
import { CSSProperties } from "styled-components/dist/types";


interface FlexBoxProps {
    direction?: CSSProperties["flexDirection"];
    x?: CSSProperties["justifyContent"];
    y?: CSSProperties["alignItems"]
    gap?: CSSProperties["gap"]

}

const flexBox = ({ direction, x, y, gap }: FlexBoxProps) => css`
    display: flex;
    flex-direction: ${direction || "inherit"};
    justify-content: ${x || "inherit"} ;
    align-items: ${y || "inherit"};
    gap:${gap || "inherit"};

    
`

export default flexBox