import Animation from '@/animation/animationObj'
import { AnimationScope } from 'motion'
import { RefObject } from 'react'

export type FVoid = () => void

type FUseMotionAnimation = (
    animationObject: Readonly<Animation>,
    customRef?: Readonly<AnimationScope<HTMLElement> | RefObject<Element>>,
    effect?: Readonly<boolean>
) => [FVoid, AnimationScope<HTMLElement>, FVoid]

export default FUseMotionAnimation
