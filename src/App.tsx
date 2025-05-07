import './App.css'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store.ts'
import { RouterProvider } from 'react-router/dom'
import router from '@/routes/route.ts'
import { PersistGate } from 'redux-persist/integration/react';
import { useAppSelector } from '@/hooks/useRedux.ts'
import { selectTheme } from '@/redux/slices/theme.slice.ts' // Импорт для React


function ThemeWrapper() {
    const theme = useAppSelector(selectTheme)

    return (
        <ThemeProvider theme={theme}>
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
