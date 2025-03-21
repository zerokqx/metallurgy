import styled from 'styled-components'
import { AvatarFallback } from '@/components/ui/avatar'
import { TTheme } from '@/styledComponents/css/theme.stl'

const AvatarFallbackStyled = styled(AvatarFallback)`
    background: ${({ theme }) => (theme as TTheme).icon.accent};
    color: ${({ theme }) => (theme as TTheme).text.primary};
    cursor: pointer;
`
export default AvatarFallbackStyled
