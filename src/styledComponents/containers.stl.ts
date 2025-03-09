import styled from "styled-components";
import flexBox, { FlexBoxProps } from "./flex.stl";


interface ContainerProps extends FlexBoxProps {
    d: string
}

export const Container = styled.div<ContainerProps>`
    ${props => flexBox(props)}
    
`