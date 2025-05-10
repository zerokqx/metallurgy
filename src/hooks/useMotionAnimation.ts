import { useAnimate } from 'motion/react'
import '@/animation'
import { useCallback, useEffect } from 'react'
import FUseMotionAnimation, {
    FVoid,
} from '@/types/hooks/useMotionAnimation.types'

/**
 * @description Декларативный хук который может автоматически запустить анимацию,
 * сконфигурировать функцию анимации в соответствии с параметром `animationObject`
 * @example
 * import {animation} from "./animation"
 * const TestComponent = ()=>{
 *     const [scope] = useGetAnimation(animation, true,true)
 *     return (
 *     <p ref={scope}>Hello World!!</p>
 *     )
 *
 * }
 * @param animationObject Непосредственно объект анимаций.
 * @param customRef
 * @param effect Если true то автоматически запустить анимацию в `useEffect`
 * которые расположены по ключу `initialStyles`
 * @version 2.0.1
 */
const useMotionAnimation: FUseMotionAnimation = (
    animationObject,
    customRef,
    effect = false
) => {
    const [scope, animateHook] = useAnimate()
    const { animationStyles, controls } = animationObject.animationProps
    const animate = useCallback(() => {
        animateHook(
            customRef?.current ? customRef.current : scope?.current,
            animationStyles,
            controls
        )
    }, [animateHook, animationStyles, controls, customRef, scope])
    const animateKeyFrames: FVoid = useCallback(() => {
        for (const [
            index,
            keyFrame,
        ] of animationObject.roadKeyframesProps.entries()) {
            if (typeof keyFrame !== 'object')
                console.error(`${index} элемент не является объектом`)
            else {
                animateHook(
                    customRef?.current ? customRef.current : scope?.current,
                    keyFrame,
                    controls
                )
            }
        }
    }, [
        animationObject.roadKeyframesProps,
        animateHook,
        customRef,
        scope,
        controls,
    ])

    useEffect(() => {
        if (scope?.current && effect)
            try {
                animate()
            } catch (e) {
                throw new Error('Произошла внутренняя ошибка `animate`\n' + e)
            }
    }, [animate, effect, scope])

    return [animate, scope, animateKeyFrames]
}

export default useMotionAnimation
