import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'

const IconWithText = ({ children, ...props }) => (
    <ContainerFlex {...props} direction="row" x="center" y="center">
        {children}
    </ContainerFlex>
)

export default IconWithText