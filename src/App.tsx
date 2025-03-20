import './App.css'
import Header from './components/Header/Header.tsx'
import { dataHeader } from './dataFile/header.data.tsx'
import { GlobalStyles } from './styledComponents/css/base.stl.ts'
import Footer from '@/components/Footer/Footer.tsx'
import Main from '@/components/Main/Main.tsx'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/styledComponents/css/theme.stl.ts'
import GlassEffectWrapper from '@/components/GlassEffectWrapper.tsx'
import { Provider } from 'react-redux'
import { store } from '@/redux/store.ts'
import useLocalVariable from '@/hooks/useLocalVariable.ts'
import { useEffect } from 'react'
import { useAppSelector } from '@/hooks/useRedux.ts'
import { selectThemeState } from '@/redux/slices/theme.slice.ts'

function App() {
    const [statusTheme, seter] = useLocalVariable('theme')
    const themeSelector = useAppSelector(selectThemeState)
    const theme = themeSelector === 'dark' ? darkTheme : lightTheme

    console.log(theme)
    useEffect(() => {}, [])
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <GlassEffectWrapper />
                    <Header data={dataHeader} />
                    <Main />
                    <Footer />
                </ThemeProvider>
            </Provider>
        </>
    )
}

export default App
