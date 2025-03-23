type TInitialStateUser = {
    readonly id: string
    name: string
    email: string
    phone: string
    address: string
    city: string
    country: string
    isLoggedIn: boolean
    isLoading: boolean
    error: string | null
    role: 'admin' | 'user' | null
    profilePictureUrl: string
}
export default TInitialStateUser
