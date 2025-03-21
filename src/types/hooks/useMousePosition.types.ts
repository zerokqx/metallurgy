import { RefObject } from 'react'

type TPosState = {
    readonly x: number
    readonly y: number
}

type FUseMousePosition = (
    targetListener?: string | RefObject<HTMLElement>
) => TPosState
export type { TPosState }
export default FUseMousePosition
