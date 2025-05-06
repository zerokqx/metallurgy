import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

type TInitialStateApp = {
    language:string
}

const initialState:TInitialStateApp = {
    language:'en',
}



export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        setLanguage:(state:TInitialStateApp,action:PayloadAction<TInitialStateApp['language']>) => {
            state.language = action.payload
        }
    }
})

export const {setLanguage} = appSlice.actions;
export const getCurrentLanguage = (state:RootState) => state.app.language
export default appSlice.reducer
