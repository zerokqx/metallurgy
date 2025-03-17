import { AnimationProperties } from '@/animation/animation'
import { useAnimate } from 'motion/react'
import { AnimationScope } from 'motion'
import '@/animation'
import { useEffect } from 'react'

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
 * @param effect Если true то автоматически запустить анимацию в `useEffect`
 * которые расположены по ключу `initialStyles`
 */
const useMotionAnimation: (animationObject: AnimationProperties, effect?: boolean)
    => [AnimationScope<any>, ()
    => void]
    = (animationObject, effect = false) => {
    const [scope, a] = useAnimate()
    const { initialStyles, animationStyles, controls } = animationObject
    const animate = () => {
        if (scope?.current) {
            a(scope.current, animationStyles, controls)
        }
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

    return [scope, animate]
}

export default useMotionAnimation
