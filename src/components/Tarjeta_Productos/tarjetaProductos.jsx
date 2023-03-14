import React from 'react';
import './tarjetaProductos.css'; // Importamos el archivo CSS
import numeral from 'numeral';

function formatPrice(price) {
  // console.log(price)
  //return price;
  return '$' + numeral(price).format('0,0');
}

function tarjetaProductos({data,addToCart}) {
    const {id, titulo, imagen, precio, descripcion } = data;
    return (
    <div className="contenedor">
      <div className="containerTarjeta ">
        <header className="tituloTarjeta">{titulo}</header>
        <img className="imgProducto" src={imagen} alt="imege not found"/>
        <div className='precioTarjeta'> {formatPrice(precio)}</div>
        <button className="botonAgregar" onClick={()=>addToCart(id)}><img className="imgCarrito" src="/Carrito.png"></img></button>
        <div className="description">
          <p>{descripcion}</p>
        </div>
      </div>      
    </div>
  );
}

export default tarjetaProductos;
