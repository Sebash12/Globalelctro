import React, { useReducer } from "react";
import { TYPES } from "../../actions/accionCompra";
import {
  estadoInicialCompra,
  reducerCompra,
} from "../../reducers/reducerCompra";
import Carro_Item from "../Carro_Item/Carro_Item";
import TarjetaProductos from "../Tarjeta_Productos/tarjetaProductos";
 

const Inicio = () => {
  const [state, dispatch] = useReducer(reducerCompra, estadoInicialCompra);
  const { products, cart} = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.AGREGAR_CARRITO, payload: id });
  };
  const delFromCart = (id=false) => {    
    dispatch({type:TYPES.REMOVER_ELEMENTO_CARRITO,payload:id})
  };
  const clearCart = () => {
    dispatch({ type: TYPES.LIMPIAR_TODO_CARRITO });
  };

 
  localStorage.setItem('cart', JSON.stringify(cart));

  return (
    <div>
      <a href="/ventas">
        <button>
          <p>{state.totalQuantity}</p>
          <img className="imagenCarrito" src="/src/components/Imagenes/Carrito.png"></img>
        </button>
      </a>
      <h2 className="tituloInicio">Nuestros Servicios</h2>
      <div className="contenedorProductos">
        {products.map((product) => (
          <TarjetaProductos
            key={product.id}
            data={product}
            addToCart={addToCart}
          />
        ))} {/* Renderiza la parte inicial de las tarjetas */}
        <div className="Lista_Productos">
          <button onClick={clearCart}>Limpiar Carrito</button>
          {cart.map((item, index) => (
            <Carro_Item key={index} data={item} delFromCart={delFromCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
