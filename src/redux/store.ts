import { configureStore } from '@reduxjs/toolkit'
import blurSlice  from '@/redux/slices/blurSlice.ts'

export const store = configureStore({
    reducer: {
        blur:blurSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch