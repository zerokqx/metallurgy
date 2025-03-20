import { useDispatch } from 'react-redux'
import { setStatus } from '@/redux/slices/theme.slice'
import { FSwapTheme, FUseSwapTheme } from '@/types/hooks/useSwapTheme'
import useLocalVariable from '@/hooks/useLocalVariable'
import { TStatus } from '@/types/redux/themeSlice.types'

const useSwapTheme: FUseSwapTheme = () => {
    const dispatch = useDispatch()
    const [status, seter] = useLocalVariable('theme')
    const swapTheme: FSwapTheme = (value) => {
        dispatch(setStatus(value))
        seter<TStatus>(value)
    }

    return swapTheme
}
export default useSwapTheme
