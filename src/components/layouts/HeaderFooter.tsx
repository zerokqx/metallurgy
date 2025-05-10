import GlassEffectWrapper from '@/components/Wrappers/GlassEffectWrapper.tsx'
import Footer from '@/components/Footer/Footer.tsx'
import Header from '@/components/Header/Header.tsx'
import { GlobalStyles } from '@/styledComponents/css/base.stl.ts'
import { Outlet } from 'react-router'
import useWelcome from '@/hooks/useWelcome'

const HeaderFooter = () => {
    useWelcome()
    return (
        <>
            <GlobalStyles />
            <GlassEffectWrapper />
            <Header />
            <main style={{
                flexWrap:'wrap',
                gap:"20px",
                height:'max-content'
            }}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default HeaderFooter
