import { useLocalStorage } from '@uidotdev/usehooks'
import { TStatusTheme } from '@/types/redux/themeSlice.types'
import { FVoid } from '@/types/hooks/useMotionAnimation.types'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { selectTheme, selectThemeState, setStatus } from '@/redux/slices/theme.slice'
import darkTheme from '@/styledComponents/css/theme/dark.stl'
import lightTheme from '@/styledComponents/css/theme/light.stl'
import TTheme from '@/types/styledComponents/css/theme/theme.types'


export const useTheme = ():[TStatusTheme,(state:TStatusTheme)=>void] => {
    const  [state, setState] = useLocalStorage<TStatusTheme>('theme','dark')
    const allowTheme:TStatusTheme[] = ['light', 'dark']
    const dispatch = useAppDispatch()
    const swapTheme = (state:TStatusTheme)=>{
        if (allowTheme.includes(state)){
            setState(state)
            dispatch(setStatus(state))
        }else throw Error(`Unknown state: ${state}`)
    }



    return [state, swapTheme]
}