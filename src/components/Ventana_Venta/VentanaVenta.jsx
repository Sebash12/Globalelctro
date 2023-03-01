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
      {producto.precio * producto.cantidad}
      <img src={producto.imagen}></img>
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
  console.log(total);
  return (
    <div>
      <p className="parrafo_Total">Total: {total}</p>

      <h3>Carrito de Compras</h3>
      <div className="lista_Salida">{listaNombres}</div>
    </div>
  );
};

export default Ventas;
