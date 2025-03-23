import TInitialStateUser from '@/types/redux/userSlice.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

const initialState: TInitialStateUser = {
    id: '29cwsKdDKWjqpdcl',
    name: 'Zerok',
    email: 'swiftkey382@mail.com',
    phone: '+79107582788',
    address: 'Test',
    city: 'Moscow',
    country: 'Russia',
    isLoggedIn: true,
    isLoading: false,
    error: null,
    role: 'user',
    profilePictureUrl: 'test',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (
            state: TInitialStateUser,
            action: PayloadAction<TInitialStateUser['name']>
        ) => {
            state.name = action.payload
        },
    },
})

export const { setName } = userSlice.actions
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer
