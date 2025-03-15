import { CSSProperties } from 'styled-components'

export type AnimationProperties = [CSSProperties, CSSProperties]

declare module '@/animation/*.anim.ts' {
    const animation: AnimationProperties
    export default animation
}