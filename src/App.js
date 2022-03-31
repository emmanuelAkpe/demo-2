import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage'
import Topbar from './components/topbar/Topbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import DesktopProduct from './pages/DesktopProduct'
import PcProducts from './pages/PcProducts'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Topbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='/desktop/:id' element={<DesktopProduct/>}/>
        <Route path='/pc/:id' element={<PcProducts/>}/>


      </Routes>

    </BrowserRouter>
  )
}

export default App