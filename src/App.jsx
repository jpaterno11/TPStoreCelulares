import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import MainLayout from './layouts/MainLayout'
import QuienesSomos from './pages/QuienesSomos'
import ProductoDetalle from './pages/ProductoDetalle'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<MainLayout/>}>
          <Route index element = {<Home/>}></Route>
          <Route path='/quienessomos' element={<QuienesSomos/>}></Route>
          <Route path="/productos" element={<Productos />} />
          <Route path='/productos/:id' element = {<Productos/>} ></Route>
          <Route path='/productodetalle/:id' element = {<ProductoDetalle/>}></Route>
          <Route path='/contacto' element = {<Contacto/>}></Route>
          <Route path='*' element = {<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
