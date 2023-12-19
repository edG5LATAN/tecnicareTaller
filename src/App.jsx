import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/home/Home.jsx'
import Header from './componentes/header/Header.jsx'
import Footer from './componentes/footer/Footer.jsx'
import Mision from './componentes/mision/Mision.jsx'
import Ubicacion from './componentes/ubicacion/Ubicacion.jsx'
import Admin from './componentes/admin/Admin.jsx'
import Agregar from './componentes/agregarTelefonos/Agregar.jsx'
import Promos from './componentes/verPromosTotal/Promos.jsx'


function App() {

  return (
    <div>
     <BrowserRouter>
      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mision' element={<Mision />} />
        <Route path='/ubicacion' element={<Ubicacion />} />
        <Route path='/admin' element={<Admin />}/>
        <Route path='/agregar' element={<Agregar />} />
        <Route path='/promos' element={<Promos />}/>
       </Routes>
       <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App
