import './App.css'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { store } from '@/redux/store.ts'
import { useAppSelector } from '@/hooks/useRedux.ts'
import { selectThemeState } from '@/redux/slices/theme.slice.ts'
import useSwapTheme from '@/hooks/useSwapTheme.ts'
import { RouterProvider } from 'react-router/dom'
import router from '@/routes/route.ts'
import darkTheme from '@/styledComponents/css/theme/dark.stl.ts'
import lightTheme from '@/styledComponents/css/theme/light.stl.ts'

function ThemeWrapper() {
    const themeSelector = useAppSelector(selectThemeState)
    const theme = themeSelector === 'dark' ? darkTheme : lightTheme
    useSwapTheme(true)

    return (
        <ThemeProvider theme={theme}>
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
