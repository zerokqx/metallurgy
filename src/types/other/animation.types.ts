import { AnimationOptions, TargetAndTransition } from 'motion/react'

type TAnimationProperties = {
    initialStyles: TargetAndTransition;
    animationStyles: TargetAndTransition;
    controls?: AnimationOptions | undefined;
} & Record<string, TargetAndTransition>;


export default TAnimationProperties;