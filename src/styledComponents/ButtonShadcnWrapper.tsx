import styled from 'styled-components'
import { Button } from '@/components/ui/button.tsx'
import { TButtonShadcnWrapper } from '@/types/styledComponents/buttonShadcnWrapper.types.ts'
import chroma from 'chroma-js'

/**
 * @description Обертка для кнопки из библиотеки `Shadcn`. Синхронизируеться полностью с темой
 */
const ButtonShadcnWrapper = styled(Button).attrs({
    variant: 'destructive',
})<Readonly<TButtonShadcnWrapper>>`
    background: ${({ theme }) => theme.background.accent};
    color: ${({ theme }) => theme.contrast.accent};
    border: 2px solid ${({ theme }) => theme.border.accent};
    transition: 0.1s cubic-bezier(0.62, 0.92, 0, 0.98);

    &:hover {
        background: ${({ theme }) =>
            chroma(theme.background.accent)
                .mix(theme.button.accent, 0.15)
                .hex()};
    }
`

export default ButtonShadcnWrapper
