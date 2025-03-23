import GlassEffectWrapper from '@/components/Wrappers/GlassEffectWrapper.tsx'
import Footer from '@/components/Footer/Footer.tsx'
import Header from '@/components/Header/Header.tsx'
import { GlobalStyles } from '@/styledComponents/css/base.stl.ts'
import { Outlet } from 'react-router'

const HeaderFooter = () => {
    return (
        <>
            <GlobalStyles />
            <GlassEffectWrapper />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default HeaderFooter
