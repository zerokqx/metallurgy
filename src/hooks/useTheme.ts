import { useLocalStorage } from '@uidotdev/usehooks'
import { TStatusTheme } from '@/types/redux/themeSlice.types'
import { useAppDispatch } from '@/hooks/useRedux'
import {  setStatus } from '@/redux/slices/theme.slice'


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