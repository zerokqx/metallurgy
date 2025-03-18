import Animation from '@/animation/animationObj'
import { AnimationScope } from 'motion'
import { RefObject } from 'react'

type voidFN = () => void


type FUseMotionAnimation = (
    animationObject: Animation,
    customRef?: AnimationScope<any> | RefObject<Element>,
    effect?: boolean,
) => [voidFN, AnimationScope<any>, voidFN]

export default FUseMotionAnimation