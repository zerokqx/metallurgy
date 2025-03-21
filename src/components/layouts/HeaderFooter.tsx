import GlassEffectWrapper from '@/components/GlassEffectWrapper.tsx'
import { dataHeader } from '@/dataFile/header.data.tsx'
import Footer from '@/components/Footer/Footer.tsx'
import Header from '@/components/Header/Header.tsx'
import { GlobalStyles } from '@/styledComponents/css/base.stl.ts'
import { Outlet } from 'react-router'

const HeaderFooter = () => {
    return (
        <>
            <GlobalStyles />
            <GlassEffectWrapper />
            <Header data={dataHeader} />
            <Outlet />
            <Footer />
        </>
    )
}
export default HeaderFooter
