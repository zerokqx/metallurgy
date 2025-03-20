import { setStatus } from '@/redux/slices/theme.slice'
import { FSwapTheme, FUseSwapTheme } from '@/types/hooks/useSwapTheme'
import useLocalVariable from '@/hooks/useLocalVariable'
import { TStatus } from '@/types/redux/themeSlice.types'
import { useAppDispatch } from '@/hooks/useRedux'

const useSwapTheme: FUseSwapTheme = () => {
    const dispatch = useAppDispatch()
    const [status, seter] = useLocalVariable('theme')
    const swapTheme: FSwapTheme = (value) => {
        dispatch(setStatus(value))
        seter<TStatus>(value)
    }

    const synchronizeWithRedux = () => {
        const st: TStatus = status as TStatus
        dispatch(setStatus(st))
    }

    return [swapTheme, synchronizeWithRedux]
}
export default useSwapTheme
