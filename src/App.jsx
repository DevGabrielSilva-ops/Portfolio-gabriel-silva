import { Routes,Route} from 'react-router-dom'
import Menu from './pages/Menu.jsx'
import './styles/estiloGlobal.css'
function App() {


  return (
    <>
     
        <Routes>
          <Route path='/' element={<Menu/>} />
        </Routes>
     
    </>
  )
}

export default App
