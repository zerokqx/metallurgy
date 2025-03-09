import './App.css'
import Header from './components/Header/Header'
import { dataHeader } from './dataFile/header.data'
import { GlobalStyles } from './styledComponents/base.stl'
function App() {
    return (
        <>
            <Header data={dataHeader} />
        </>
    )
}

export default App
