import { FVoid } from '@/types/hooks/useMotionAnimation.types'
import TAnimationProperties from '@/types/other/animation.types'
import { AnimationScope } from 'motion'

export type TUseMotionAnimationDynamic = (
    animationObject: Pick<TAnimationProperties, 'animationStyles' | 'controls'>
) => [AnimationScope<any>, FVoid]

export type TUseMotionAnimationDynamicParam =
    Parameters<TUseMotionAnimationDynamic>[0]
