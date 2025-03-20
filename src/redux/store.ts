import { configureStore } from '@reduxjs/toolkit'
import blurSlice from '@/redux/slices/blurSlice.ts'
import themeSlice from '@/redux/slices/theme.slice'

export const store = configureStore({
    reducer: {
        blur: blurSlice,
        theme: themeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
