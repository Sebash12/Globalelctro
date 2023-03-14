import './ventanaVenta.css'
import React from 'react';
import numeral from 'numeral';

function formatPrice(price) {
  // console.log(price)
  //return price;
  return '$' + numeral(price).format('0,0');
}


var cadena = localStorage.getItem("cart");
var cart;
console.log("Cadena:", cadena);
console.log("Carrito", cart);
var listaNombres;
if (cadena) {
  cart = JSON.parse(cadena); //Creacion de un objeto a partir de una cadena
} else {
  cart = [];
}

if (cart.length === 0) {
  listaNombres = <p>No hay productos en el carrito.</p>;
} else {
  listaNombres = cart.map((producto) => (
    <li key={producto.id}>
      {producto.titulo} x {producto.cantidad} - Precio:
      {formatPrice(producto.precio * producto.cantidad)}
      <img className="imagenLista" src={producto.imagen}></img>
    </li>
  ));
}


const Ventas = () => {
  function calculaTotal(cantidad_productos, precio) {
    var result = cantidad_productos * precio;
    return result;
  }


  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + calculaTotal(cart[i].cantidad, cart[i].precio);
  }
  var total_t = formatPrice(total)
  console.log(total);
  return (
    <div className='contenedor'>
      <p className="parrafo_Total">Total: {total_t}</p>
      <div className="lista_Salida">{listaNombres}</div>
    </div>
  );
};

export default Ventas;
