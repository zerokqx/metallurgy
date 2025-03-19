import Animation from '@/animation/animationObj'
import { AnimationScope } from 'motion'
import { RefObject } from 'react'

export type FVoid = () => void

type FUseMotionAnimation = (
    animationObject: Animation,
    customRef?: AnimationScope<any> | RefObject<Element>,
    effect?: boolean
) => [FVoid, AnimationScope<any>, FVoid]

export default FUseMotionAnimation
