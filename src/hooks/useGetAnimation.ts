import { useCallback, useContext, useEffect, useState } from 'react'
import { AnimationContext } from '@/providers/animation.prv'
import { AnimationProperties } from '@/animation/animation'
import { useAnimate } from 'motion/react'


/**
 * @description Хук для взаимодействия с провайдером анимаций.
 * @param name Имя анимации. Например, у нас есть файл с анимацией pulse.anim.ts
 * то `name` будет `pulse`.
 * @returns [anim, scope, animate] Возвращать сам объект анимаций (Array из двух
 * элементов, первый initial второй animation со стилями css), ref ссылку на
 * которая должна повеситься на `React-Component`, авто функцию анимации,
 * автоматически подтягивает `scope.current` и стили по индексу 2 (animation) а
 * также ручная функция animate
 *
 */
const useGetAnimation = (name: string) => {
    const animation = useContext(AnimationContext)
    const [anim, setAnimation] = useState<AnimationProperties>()
    const [scope, animate] = useAnimate()
    const autoAnimate = useCallback(() => {
        if (animation) {
            animate(scope.current, animation[1])
        }
    }, [animation, animate])
    useEffect(() => {
        const loadAnim = async () => {
            const animationLoad = animation && await animation[name]()
            setAnimation(await animationLoad?.default)
        }
        loadAnim()
    }, [name, animation])
    return [anim, scope, autoAnimate, animate]
}

export default useGetAnimation
