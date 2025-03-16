import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { JSX } from 'react'

const IconWithText = ({ children, ...props }: { children: [JSX.Element, JSX.Element] }) => (
    <ContainerFlex {...props} direction="row" x="center" y="center">
        {children[0]}
        {children[1]}
    </ContainerFlex>
)

export default IconWithText