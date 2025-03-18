import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import BlurInitialState from '@/types/redux/blurSlice.types'
import { RootState } from '@/redux/store'


const initialState: BlurInitialState = {
    blurState: false,
}

export const blurSlice = createSlice({
    name: 'blur',
    initialState,
    reducers: {
        setBlur: (state, action: PayloadAction<boolean>) => {
            state.blur = action.payload
        },
        setBlurAuto: (state) => {
            console.log(1)
            state.blurState = !state.blurState
        },
    },
})


export const { setBlur, setBlurAuto } = blurSlice.actions
export const selectBlurState:(state:RootState)=>ReturnType<boolean> = (state: RootState) => state.blur.blurState
export default blurSlice.reducer