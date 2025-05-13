import { TStatusTheme } from '@/types/redux/themeSlice.types'
import { useAppDispatch } from '@/hooks/useRedux'
import { setStatus } from '@/redux/slices/theme.slice'

export const useTheme = (): [(state: TStatusTheme) => void] => {
    const allowTheme: TStatusTheme[] = ['light', 'dark']
    const dispatch = useAppDispatch()
    const swapTheme = (state: TStatusTheme) => {
        if (allowTheme.includes(state)) {
            dispatch(setStatus(state))
        } else throw Error(`Unknown state: ${state}`)
    }
    return [swapTheme]
}
