import TInitialStateUser, { EIsNew } from '@/types/redux/userSlice.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

const initialState: TInitialStateUser = {
    id: '29cwsKdDKWjqpdcl',
    name: 'Zerok',
    email: 'swiftkey382@gmail.com',
    phone: '+7-910-758-27-88',
    address: 'Test',
    city: 'Moscow',
    country: 'Russia',
    isLoggedIn: true,
    isLoading: false,
    error: null,
    role: 'user',
    isOld: EIsNew.isNew,
    profilePictureUrl:
        'https://i.pinimg.com/736x/33/1b/bb/331bbb824bca82f0b5355beef9a1e674.jpg',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<TInitialStateUser['name']>) => {
            state.name = action.payload
        },
        setOld: (state: TInitialStateUser) => {
            state.isOld = EIsNew.isOld
        },
    },
})

export const { setName, setOld } = userSlice.actions
export const selectUser = (state: RootState) => state.user
export const selectShortUserName = (state: RootState) =>
    state.user.name.slice(0, 2)
export default userSlice.reducer
