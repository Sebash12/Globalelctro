import React from 'react';
import './tarjetaProductos.css'; // Importamos el archivo CSS

function tarjetaProductos({data,addToCart}) {
    const {id, titulo, imagen, precio, descripcion } = data;
    return (
    <div className="contenedor">
      <div className="containerTarjeta ">
        <header className="tituloTarjeta">{titulo}</header>
        <img className="imgProducto" src={imagen} alt="Imagen de nevera"/>
        <div className='precioTarjeta'>{precio}</div>
        <button className="botonAgregar" onClick={()=>addToCart(id)}><img className="imgCarrito" src="/src/components/Imagenes/Carrito.png"></img></button>
        <div className="description">
          <p>{descripcion}</p>
        </div>
      </div>      
    </div>
  );
}

export default tarjetaProductos;
