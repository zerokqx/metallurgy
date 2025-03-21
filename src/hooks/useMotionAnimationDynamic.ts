import { FVoid } from '@/types/hooks/useMotionAnimation.types'
import { useAnimate } from 'motion/react'
import { TUseMotionAnimationDynamic } from '@/types/hooks/useMotionAnimationDynamic.types'

const useMotionAnimationDynamic: TUseMotionAnimationDynamic = (
    animationObject
) => {
    const [scope, a] = useAnimate()
    const { animationStyles, controls } = animationObject
    const animate: FVoid = () => {
        a(scope?.current, animationStyles, controls)
    }
    return [scope, animate]
}
export default useMotionAnimationDynamic
