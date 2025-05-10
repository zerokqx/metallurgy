import { AnimationOptions, TargetAndTransition } from 'motion/react'
import TAnimationProperties from '@/types/other/animation.types.ts'

declare module '@/animation/*.anim' {
    const value: TAnimationProperties
    export default value
}
