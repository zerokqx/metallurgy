import { AnimationOptions, TargetAndTransition } from 'motion/react'

export type AnimationProperties = {
    initialStyles: TargetAndTransition;
    animationStyles: TargetAndTransition;
    controls?: AnimationOptions | undefined;
} & Record<string, TargetAndTransition>;

declare module '@/animation/*.anim' {
    const value: AnimationProperties
    export default value
}


