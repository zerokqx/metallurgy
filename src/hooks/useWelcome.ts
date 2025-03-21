import { useCallback, useEffect, useState } from 'react'
import { FVoid } from '@/types/hooks/useMotionAnimation.types'
import FUseWelcome from '@/types/hooks/useWelcome.types'
import useLocalVariable from '@/hooks/useLocalVariable'

/**
 * @description Отслеживает является ли пользователь новоприбывшем или уже был
 * на данном сайте.
 * @param auto Параметр который отвечает за автоматическую регистрацию юзера
 * как не нового. Не возвращать Function регистрации юзера
 * @param debug при debug true пользователь будет всегда новым и status true.
 * По умолчанию false
 *
 */
const useWelcome: FUseWelcome = (auto = false, debug = false) => {
    const keyName: string = 'welcome'
    const [variable, setter] = useLocalVariable(keyName)
    const trigger: string | unknown = variable
    const [status, setStatus] = useState<boolean>(true)

    /**
     * @description Функция которая регистрирует юзера как не нового,
     * устанавливает ключ `welcome` в localStorage
     */
    const setWelcome: FVoid = useCallback(() => {
        if (!trigger) setter('1')
    }, [trigger])

    useEffect((): void => {
        if (debug) return
        else {
            if (auto) setWelcome()
            if (trigger) setStatus(false)
            else setStatus(true)
        }
    }, [])

    return [status, setWelcome]
}

export default useWelcome
