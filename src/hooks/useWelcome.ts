import { useEffect, useState } from 'react'
import { FVoid } from '@/types/hooks/useMotionAnimation.types'
import FUseWelcome from '@/types/hooks/useWelcome.types'

/**
 * @description Отслеживает является ли пользователь новоприбывшем или уже был
 * на данном сайте.
 * @param auto Параметр который отвечает за автоматическую регистрацию юзера
 * как не нового. Не возвращать Function регистрации юзера
 * @param debug при debug true пользователь будет всегда новым и status true.
 * По умолчанию false
 *
 */
const useWelcome: Readonly<FUseWelcome> = (
    auto: boolean = false,
    debug: boolean = false
) => {
    const keyName: string = 'welcome'
    const trigger: string | unknown = localStorage.getItem(keyName)
    const [status, setStatus] = useState<boolean>(true)
    useEffect((): void => {
        if (debug) return
        else {
            auto && setWelcome()
            trigger ? setStatus(false) : setStatus(true)
        }
    }, [trigger])
    /**
     * @description Функция которая регистрирует юзера как не нового,
     * устанавливает ключ `welcome` в localStorage
     */
    const setWelcome: FVoid = () => {
        if (!trigger) localStorage.setItem(keyName, '1')
    }

    return auto ? status : [status, setWelcome]
}

export default useWelcome
