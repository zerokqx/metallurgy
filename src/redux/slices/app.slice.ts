import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
export const getCurrentLanguage = (state:TInitialStateApp) => state.language
export default appSlice.reducer
