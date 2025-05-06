import './App.css'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store.ts'
import { RouterProvider } from 'react-router/dom'
import router from '@/routes/route.ts'
import { useTheme } from '@/hooks/useTheme.ts'
import { usePreferredLanguage } from '@uidotdev/usehooks'
import { useAppDispatch } from '@/hooks/useRedux.ts'
import { setLanguage } from '@/redux/slices/app.slice.ts'
import { useEffect } from 'react'
import { PersistGate } from 'redux-persist/integration/react'; // Импорт для React


function ThemeWrapper() {
    const [,,init,getTheme] = useTheme()
    const lang = usePreferredLanguage()
    const dispatch = useAppDispatch()
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
            <PersistGate loading={null} persistor={persistor}>
                <ThemeWrapper />
            </PersistGate>
        </Provider>
    )
}

export default App
