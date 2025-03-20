import { CSSProperties } from 'styled-components/dist/types'

export type TContainerGrid = Partial<
    Pick<
        CSSProperties,
        | 'gridTemplateAreas'
        | 'columnGap'
        | 'rowGap'
        | 'gridTemplateRows'
        | 'gridTemplateColumns'
    >
>
export default TContainerGrid
