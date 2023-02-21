const info = localStorage.getItem("cart");
const cart = JSON.parse(localStorage.getItem("cart"));
const cantidad_productos = cart.length
const listaNombres = cart.map((producto) =>
<li key={producto.id}>{producto.titulo } x {producto.cantidad} - Precio: {producto.precio * producto.cantidad}</li>
);


const Ventas = (props) => {
  
  function calculaTotal(cantidad_productos, precio){
    var result = cantidad_productos * precio;
    return result;
  }


  var total = 0;
  for(let i = 0;i< cantidad_productos;i++){
    total = total + calculaTotal(cart[i].cantidad, cart[i].precio)
  }
  console.log(total)
  return (
    <div>
      <p className="parrafo_Total">Total: {total}</p>
      
        <h3>Carrito de Compras</h3>
      <div className="lista_Salida">
        {listaNombres}
      </div>
    </div>
  );
};

export default Ventas;
