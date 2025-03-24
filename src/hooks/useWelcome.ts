import { useCallback, useEffect, useState } from 'react'
import { FVoid } from '@/types/hooks/useMotionAnimation.types'
import FUseWelcome from '@/types/hooks/useWelcome.types'
import useLocalVariable from '@/hooks/useLocalVariable'
import { EIsNew } from '@/types/redux/userSlice.types'

/**
 * @description Отслеживает является ли пользователь новоприбывшем или уже был
 * на данном сайте.
 * @param auto Параметр который отвечает за автоматическую регистрацию юзера
 * как не нового. Не возвращать Function регистрации юзера
 * @param debug при debug true пользователь будет всегда новым и status true.
 * По умолчанию false
 * @version 1.0.5
 *
 */
const useWelcome: FUseWelcome = (auto = false, debug = false) => {
    const [status, setStatus] = useState<boolean>(true)
    const [variable, setter] = useLocalVariable('welcome')

    /**
     * @description Функция которая регистрирует юзера как не нового,
     * устанавливает ключ `welcome` в localStorage
     */
    const setWelcome: FVoid = useCallback(() => {
        if (!variable) setter(`${EIsNew.New}`) // Раньше была 1 вместо `${EIsNew.New}`
    }, [setter, variable])

    useEffect((): ReturnType<FVoid> => {
        if (debug) return
        else {
            if (auto) setWelcome()
            if (variable) setStatus(false)
            else setStatus(true)
        }
    }, [auto, debug, setWelcome, variable])

    return [status, setWelcome] as ReturnType<FUseWelcome>
}

export default useWelcome
