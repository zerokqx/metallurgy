import { TargetAndTransition } from 'motion/react'
import { AnimationOptions } from 'motion'

export type AnimationProperties = {
    initialStyles: TargetAndTransition;
    animationStyles: TargetAndTransition;
    controls?: AnimationOptions | undefined;
};
declare module '@/animation/*.anim' {
    const value: AnimationProperties
    export default value
}


