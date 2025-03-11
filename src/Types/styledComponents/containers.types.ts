import { FlexBoxProps } from "./flex.types"
import { CSSProperties } from 'styled-components/dist/types'
export interface ContainerFlexProps extends FlexBoxProps {
    background?: CSSProperties["background"],
    padding?: CSSProperties["padding"],
    margin?: CSSProperties["margin"]
    maxWidth?: CSSProperties["maxWidth"],
    maxHeight?: CSSProperties["maxHeight"],

}