import './App.css'
import Header from './components/Header/Header'
import { dataHeader } from './dataFile/header.data'
import { GlobalStyles } from './styledComponents/css/base.stl.ts'
import Footer from "@/components/Footer/Footer.tsx";
import Main from '@/components/Main/Main.tsx'
function App() {
    return (
        <>
            <GlobalStyles />
            <Header  data={dataHeader} />
            <Main/>
            <Footer/>
        </>
    )
}

export default App
