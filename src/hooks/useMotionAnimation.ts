import { AnimationProperties } from '@/animation/animation'
import { useAnimate } from 'motion/react'
import { AnimationScope } from 'motion'
import '@/animation'
import { RefObject, useEffect } from 'react'

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
 */
const useMotionAnimation: (animationObject: AnimationProperties,customRef?:AnimationScope<any>|RefObject<never>, effect?: boolean,)
    => [() => void, AnimationScope<any>]
    = (animationObject,customRef, effect = false) => {
    const [scope, a] = useAnimate()
    const { animationStyles, controls } = animationObject

    const animate = () => {
        console.log(112)
            a(customRef?.current ? customRef.current: scope?.current, animationStyles, controls)
    }

    useEffect(() => {
        if (scope?.current && effect) {
            try {
                animate()
            } catch (e) {
                throw new Error('Произошла внутренняя ошибка `animate`')
            }
        }
    }, [effect])

    return [animate, scope]
}

export default useMotionAnimation
