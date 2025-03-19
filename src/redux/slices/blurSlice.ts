import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TBlurInitialState from '@/types/redux/blurSlice.types'
import { RootState } from '@/redux/store'

const initialState: TBlurInitialState = {
    blurState: false,
}

export const blurSlice = createSlice({
    name: 'blur',
    initialState,
    reducers: {
        setBlur: (state, action: PayloadAction<boolean>) => {
            state.blurState = action.payload
        },
        setBlurAuto: (state) => {
            state.blurState = !state.blurState
        },
    },
})

export const { setBlur, setBlurAuto } = blurSlice.actions
export const selectBlurState = (state: RootState) => state.blur.blurState
export default blurSlice.reducer
