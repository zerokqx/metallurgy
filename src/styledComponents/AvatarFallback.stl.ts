import styled from 'styled-components'
import { AvatarFallback } from '@/components/ui/avatar'
import TTheme from '@/types/styledComponents/css/theme/theme.types'

const AvatarFallbackStyled = styled(AvatarFallback)`
    background: ${({ theme }) => (theme as TTheme).icon.accent};
    color: ${({ theme }) => (theme as TTheme).text.primary};
    cursor: pointer;
`
export default AvatarFallbackStyled
