import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'
import TThemeDarkLight, { TStatusTheme } from '@/types/redux/themeSlice.types'
import lightTheme from '@/styledComponents/css/theme/light.stl'
import darkTheme from '@/styledComponents/css/theme/dark.stl'

const initialState: TThemeDarkLight = {
    status: 'light',
    statusBoolean: true,
    theme:lightTheme
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setStatus: (
            state: TThemeDarkLight,
            action: PayloadAction<TStatusTheme>
        ) => {

            state.status = action.payload
            switch (action.payload) {
                case 'light':
                    state.theme = lightTheme
                    break
                case 'dark':
                    state.theme = darkTheme
                    break
            }
        },

    },
})

export const { setStatus } = themeSlice.actions

export const selectThemeState = (state: RootState) => state.theme.status
export const selectTheme = (state: RootState) => state.theme.theme

export default themeSlice.reducer
