import './App.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import Ventas from './components/Ventana_Venta/VentanaVenta'
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Productos from './components/Productos/Productos'
import Inicio from './components/Inicio/Inicio'

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Inicio/>} />
            <Route path="/ventas" element={<Productos/>} />
            <Route path="/contact-us" element={<Contacto/>} />
            <Route path="/compras" element={<Ventas/>} />
          </Routes>
      </BrowserRouter>
      <Footer />
      </>
  )
}
export default App
