import Animation from '@/animation/animationObj'
import { AnimationScope } from 'motion'
import { RefObject } from 'react'

type Fvoid = () => void


type FUseMotionAnimation = (
    animationObject: Animation,
    customRef?: AnimationScope<any> | RefObject<Element>,
    effect?: boolean,
) => [Fvoid, AnimationScope<any>, Fvoid]

export default FUseMotionAnimation