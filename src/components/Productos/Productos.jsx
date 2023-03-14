import React, { useReducer } from "react";
import { TYPES } from "../../actions/accionCompra";
import {
  estadoInicialCompra,
  reducerCompra,
} from "../../reducers/reducerCompra";
import Carro_Item from "../Carro_Item/Carro_Item";
import TarjetaProductos from "../Tarjeta_Productos/tarjetaProductos";
import "./Productos.css";



const Productos = () => {
  const [state, dispatch] = useReducer(reducerCompra, estadoInicialCompra);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.AGREGAR_CARRITO, payload: id });
  };
  const delFromCart = (id = false) => {
    dispatch({ type: TYPES.REMOVER_ELEMENTO_CARRITO, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.LIMPIAR_TODO_CARRITO });
  };

  localStorage.setItem("cart", JSON.stringify(cart)); // Este es el que pasa la info entre ventanas...

  function mostrar_Alerta() {
    alert('¿Su compra está completa? Recuerde que de no ser asi será borrado');
  }


  return (
    <div className="content">
      <h2 className="tituloInicio">Productos</h2>
      <div className="contenedorProductos">
        {products.map((product) => (
          <TarjetaProductos
            key={product.id}
            data={product}
            addToCart={addToCart}
          />
        ))}{" "}
        {/* Renderiza la parte inicial de las tarjetas */}
      </div>

      <div className="Lista_Productos">
        <a href="/compras">
          <button onClick={mostrar_Alerta}>
            <p>{state.totalQuantity}</p>
            <img
              className="imagenCarrito"
              src="/Carrito.png"
            ></img>
          </button>
        </a>

        <button className="limpieza" onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <Carro_Item key={index} data={item} delFromCart={delFromCart} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
