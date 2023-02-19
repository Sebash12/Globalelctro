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
  const { products, cart } = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.AGREGAR_CARRITO, payload: id });
  };
  const delFromCart = () => {};
  const clearCart = () => {};

  /* Para ingresar mas productos se podria realizar la lectura en bases de datos de los mismos,
    ingresandole su respectivo titulo, la url donde se encuentra la imagen, el precio y la 
    descripcion del producto, esto con el fin de realizar una pagina web facilmente escalable. */
  return (
    <div>
      <h2 className="tituloInicio">Nuestros Servicios</h2>
      <div className="contenedorProductos">
        {products.map((product) => (
          <TarjetaProductos
            key={product.id}
            data={product}
            addToCart={addToCart}
          />
        ))}
        <div className="Lista_Productos">
          {cart.map((item, index) => (
            <Carro_Item key={index} data={item} delFromCart={delFromCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
