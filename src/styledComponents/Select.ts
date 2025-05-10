import styled from 'styled-components'
import { SelectTrigger } from '@/components/ui/select'
import TTheme from '@/types/styledComponents/css/theme/theme.types'

export const SelectStyled = styled(SelectTrigger)`
    width: 100px;
    background-color: ${({ theme }) =>
        (theme as TTheme).background.accent} !important;
`
