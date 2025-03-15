import { CSSProperties } from 'styled-components'

declare module '@/animation/*.anim.ts' {
    const animation: [CSSProperties, CSSProperties]
    export default animation
}