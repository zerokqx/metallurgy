import { useContext } from 'react'
import { AnimationContext } from '@/providers/animation.prv'
import { AnimationProperties } from '@/animation/animation'
import { useAnimate } from 'motion/react'
import { AnimationPlaybackControls, AnimationScope } from 'motion'
import '@/animation/main'

/**
 * @description Хук для взаимодействия с провайдером анимаций.
 * @param name Имя анимации. Например, у нас есть файл с анимацией pulse.anim.ts
 * то `name` будет `pulse`.
 * @returns [anim, scope, autoAnimate, animate] Возвращать сам объект анимаций (Array из двух
 * элементов, первый initial второй animation со стилями css), ref ссылку на
 * которая должна повеситься на `React-Component`, авто функцию анимации,
 * автоматически подтягивает `scope.current` и стили по индексу 2 (animation) а
 * также ручная функция animate
 *
 */
const useGetAnimation: (name: string) => [AnimationProperties, AnimationScope<any>, AnimationPlaybackControls] = (name) => {
    const animation = useContext(AnimationContext)
    const [scope, animate] = useAnimate()
    if (animation) {
        console.log(animation)

        if (animation && animation[name]) {
            return [animation[name], scope, animate]
        }

    } else [undefined, scope, undefined]
    // const autoAnimate = useCallback(() => {
    //     if (target && scope.current) {
    //         animate(scope.current, target.animationStyles, { duration: target.controls?.duration }) // Используем второй элемент массива как параметры анимации
    //     } else {
    //         console.warn('Анимация или scope недоступны')
    //     }
    // }, [target, animate, scope])

    // Загрузка анимации
    // useEffect(() => {
    //     const loadAnim = async () => {
    //         try {
    //             if (animation && animation[name]) {
    //                 const animationLoad = await animation[name]()
    //                 if (animationLoad && animationLoad.default) {
    //                     setAnimation(animationLoad.default)
    //                 } else {
    //                     console.error('Неверный формат загруженной анимации', animationLoad)
    //                 }
    //             }
    //         } catch (err) {
    //             console.error('Ошибка загрузки анимации:', err)
    //         }
    //     }
    //     loadAnim()
    // }, [name, animation])

}

export default useGetAnimation
