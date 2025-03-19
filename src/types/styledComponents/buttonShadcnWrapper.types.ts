import { CSSProperties } from 'styled-components'

export type TButtonShadcnWrapper = Partial<
    Readonly<Pick<CSSProperties, 'color' | 'background' | 'border'>>
>
