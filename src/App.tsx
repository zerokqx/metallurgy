import './App.css'
import Header from './components/Header/Header'
import { dataHeader } from './dataFile/header.data'
import { GlobalStyles } from './styledComponents/base.stl'
import Footer from "@/components/Footer/Footer.tsx";
function App() {
    return (
        <>
            <GlobalStyles />
            <Header  data={dataHeader} />
            <Footer/>
        </>
    )
}

export default App
