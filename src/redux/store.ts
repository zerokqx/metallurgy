import { configureStore } from '@reduxjs/toolkit'
import blurSlice from '@/redux/slices/blurSlice.ts'
import themeSlice from '@/redux/slices/theme.slice'
import userSlice from '@/redux/slices/userSlice'

export const store = configureStore({
    reducer: {
        blur: blurSlice,
        theme: themeSlice,
        user: userSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
