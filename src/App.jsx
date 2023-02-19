import './App.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Inicio from './components/Inicio/Inicio' 
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import TarjetaProductos from './components/Tarjeta_Productos/tarjetaProductos'

import { BrowserRouter, Routes, Route } from "react-router-dom";  

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contact-us" element={<Contacto />} />
          </Routes>
      </BrowserRouter>
      <Footer />
      </>
  )
}
export default App
