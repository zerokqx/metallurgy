import { useAnimate } from 'motion/react'
import { AnimationScope } from 'motion'
import '@/animation'
import { RefObject, useCallback, useEffect } from 'react'
import Animation from '@/animation/animationObj'

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
 * @version 2.0.0
 */
type voidFN = () => void
const useMotionAnimation: (
    animationObject: Animation,
    customRef?: AnimationScope<any> | RefObject<Element>,
    effect?: boolean
) => [voidFN, AnimationScope<any>, voidFN] = (
    animationObject,
    customRef,
    effect = false
) => {
    const [scope, a] = useAnimate()
    const { animationStyles, controls } = animationObject.animationProps
    const animate = () => {
        a(
            customRef?.current ? customRef.current : scope?.current,
            animationStyles,
            controls
        )
    }
    const animateKeyFrames = useCallback(() => {
        for (const [
            index,
            keyFrame,
        ] of animationObject.roadKeyframesProps.entries()) {
            typeof keyFrame !== 'object' &&
                console.error(`${index} элемент не является объектом`)
            a(
                customRef?.current ? customRef.current : scope?.current,
                keyFrame,
                controls
            )
        }
    }, [animationObject.roadKeyframesProps, a, customRef, scope])
    useEffect(() => {
        if (scope?.current && effect) {
            try {
                animate()
            } catch (e) {
                throw new Error('Произошла внутренняя ошибка `animate`')
            }
        }
    }, [effect])

    return [animate, scope, animateKeyFrames]
}

export default useMotionAnimation
