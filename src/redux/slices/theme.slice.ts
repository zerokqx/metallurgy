import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'
import TThemeDarkLight, { TStatusTheme } from '@/types/redux/themeSlice.types'

const initialState: TThemeDarkLight = {
    status: 'light',
    statusBoolean: true,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setStatus: (
            state: TThemeDarkLight,
            action: PayloadAction<TStatusTheme>
        ) => {
            console.log(action)
            console.log(11)
            state.status = action.payload
            state.statusBoolean = action.payload === 'dark'
        },
    },
})

export const { setStatus } = themeSlice.actions

export const selectThemeState = (state: RootState) => state.theme.status

export default themeSlice.reducer
