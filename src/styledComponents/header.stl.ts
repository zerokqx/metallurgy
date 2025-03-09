import styled from "styled-components";
import flexBox from "./flex.stl";
import { nunito, golos } from "./font.stl";

const spaceBase = 20;
export const toPx = (num: number) => `${num}px`

export const HeaderStyle = styled.header`

    background-color: #0F0F17;
    border-bottom: 2px solid var(--bruze-color);
    width: 100%;
    ${flexBox({ direction: "row", x: "center", y: "center", gap: toPx(spaceBase) })}
    padding: ${toPx(spaceBase)};

    .header__text{
    color: white;

        &--nunito{
            
            ${golos({ weight: "normal" })}
        }
    }




    

`
