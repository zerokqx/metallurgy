import Animation from '@/animation/animationObj'
import { AnimationScope } from 'motion'
import { RefObject } from 'react'

export type FVoid = () => void

type FUseMotionAnimation = (
    animationObject: Readonly<Animation>,
    customRef?: Readonly<AnimationScope<any> | RefObject<any>>,
    effect?: Readonly<boolean>
) => [FVoid, AnimationScope<any>, FVoid]

export default FUseMotionAnimation
