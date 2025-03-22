import styled from 'styled-components'
import { Separator } from '@/components/ui/separator'
import { TSeparatorStyled } from '@/types/styledComponents/SeparatorStyled.types'
import { size } from '@/styledComponents/css/size.stl'
import { TTheme } from '@/styledComponents/css/theme/light.stl'

const SeparatorStyled = styled(Separator)<TSeparatorStyled>`
    background: ${({ theme }) => (theme as TTheme).icon.primary};
    ${size}
`
export default SeparatorStyled
