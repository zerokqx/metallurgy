import './App.css'
import Header from './components/Header/Header.tsx'
import { dataHeader } from './dataFile/header.data.tsx'
import { GlobalStyles } from './styledComponents/css/base.stl.ts'
import Footer from '@/components/Footer/Footer.tsx'
import Main from '@/components/Main/Main.tsx'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styledComponents/css/theme.stl.ts'

function App() {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <Header data={dataHeader} />
                <Main />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default App
