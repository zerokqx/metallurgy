import './App.css'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { store } from '@/redux/store.ts'
import { RouterProvider } from 'react-router/dom'
import router from '@/routes/route.ts'
import { useTheme } from '@/hooks/useTheme.ts'
import { usePreferredLanguage } from '@uidotdev/usehooks'
import { useAppDispatch } from '@/hooks/useRedux.ts'
import { setLanguage } from '@/redux/slices/app.slice.ts'
import { useEffect } from 'react'


function ThemeWrapper() {
    const [,,init,getTheme] = useTheme()
    const lang = usePreferredLanguage()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch((setLanguage(lang)))

    }, [])
    init()
    return (
        <ThemeProvider theme={getTheme()}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

function App() {
    return (
        <Provider store={store}>
            <ThemeWrapper />
        </Provider>
    )
}

export default App
