import { FVoid } from '@/types/hooks/useMotionAnimation.types'
import { useAnimate } from 'motion/react'
import { TUseMotionAnimationDynamic } from '@/types/hooks/useMotionAnimationDynamic.types'

/**
 * @description Хук для динамического управление анимацией. Динамический это
 * значит, что в строку с анимацией подставлять некое значение по пути.
 * @example
 *   const pos = useMousePosition()
 *     const styles: TUseMotionAnimationDynamicParam = {
 *         animationStyles: {
 *             transform: `translate(${pos.x - 100}px, ${pos.y - 200}px)`,
 *         },
 *         controls: { duration: 0 },
 *     }
 *     const [scope, animate] = useMotionAnimationDynamic(styles)
 *     useEffect(() => {
 *         animate()
 *     }, [animate, pos])
 * @param animationObject
 * @version 1.0.0
 */
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
