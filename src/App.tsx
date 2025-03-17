import './App.css'
import Header from './components/Header/Header.tsx'
import { dataHeader } from './dataFile/header.data.tsx'
import { GlobalStyles } from './styledComponents/css/base.stl.ts'
import Footer from '@/components/Footer/Footer.tsx'
import Main from '@/components/Main/Main.tsx'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styledComponents/css/theme.stl.ts'
import GlassEffect from '@/styledComponents/BlurPage.stl.ts'
import { useEffect, useState } from 'react'
import { useAnimate } from 'motion/react'
import GlassEffectWrapper from '@/components/GlassEffectWrapper.tsx'

function App() {
    const [blur, setBlur] = useState(false)
    const [scope, animation] = useAnimate()
    useEffect(() => {
        if (scope?.current) {
            animation(scope.current, {
                backdropFilter: blur ? 'blur(5px)' : 'blur(0px)', opacity: blur ? 1 : 0,
            }, { duration: 0.2 })
        }
    }, [blur])
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <GlassEffectWrapper />
                <GlassEffect ref={scope} zIndex={99} position={'absolute'} width={'100%'}
                             height={'100%'} />
                <Header onHoverStart={() => setBlur(true)} onHoverEnd={() => setBlur(false)} data={dataHeader} />
                <Main />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default App
