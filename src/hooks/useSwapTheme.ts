import { setStatus } from '@/redux/slices/theme.slice'
import { FSwapTheme, FUseSwapTheme } from '@/types/hooks/useSwapTheme'
import useLocalVariable from '@/hooks/useLocalVariable'
import { TStatus } from '@/types/redux/themeSlice.types'
import { useAppDispatch } from '@/hooks/useRedux'
import { useEffect } from 'react'

/**
 * @description Хук для управления темой. Дает такой функционал как синхронизация
 * state в `localStorage` с `redux`, синхронизация необходима пре перезагрузке
 * сайта, так как state redux отчищается.
 * @param auto Автоматически запустит `useEffect` с синхронизацией `states`
 * при монтаже компонента
 */
const useSwapTheme: FUseSwapTheme = (auto = false) => {
    const dispatch = useAppDispatch()
    const [status, setter] = useLocalVariable('theme')

    /**
     * @description Функция для смены темы. Синхронизирует `localStorage` с
     * @param value Значение на которое надо изменить state Redux и localStorage
     */
    const swapTheme: FSwapTheme = (value) => {
        dispatch(setStatus(value))
        setter(value)
    }
    /**
     * @description Функция синхронизации states redux и localStorage
     */
    const synchronizeWithRedux = () => {
        const st: TStatus = status as TStatus
        dispatch(setStatus(st))
    }

    useEffect(() => {
        if (auto) synchronizeWithRedux()
    }, [])
    return [swapTheme, synchronizeWithRedux]
}
export default useSwapTheme
