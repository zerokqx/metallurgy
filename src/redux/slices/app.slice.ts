import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

type TInitialStateApp = {
    language:{
        dirty:boolean,
        language:string
    }
}

const initialState:TInitialStateApp = {
    language:{
        language:'en',
        dirty:false
    }
}



export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        setLanguage:(state:TInitialStateApp,action:PayloadAction<TInitialStateApp['language']['language']>) => {
            state.language.language = action.payload
            state.language.dirty = true
        }
    }
})

export const {setLanguage} = appSlice.actions;
export const getCurrentLanguage = (state:RootState) => state.app.language.language
export const isDirtyLang = (state:RootState) => state.app.language.dirty
export default appSlice.reducer
