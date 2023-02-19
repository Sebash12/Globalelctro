import { TYPES } from "../actions/accionCompra";

export const estadoInicialCompra = {
  products: [
    {
      id: 1,
      titulo: "Producto 1",
      imagen: "/src/components/Imagenes/Nevera.jpeg",
      precio: 1000000,
      descripcion: "Descripción del producto 1",
    },
    {
      id: 2,
      titulo: "Producto 2",
      imagen: "/src/components/Imagenes/Nevera.jpeg",
      precio: 500000,
      descripcion: "Descripción del producto 2",
    },
    {
      id: 3,
      titulo: "Producto 3",
      imagen: "/src/components/Imagenes/Nevera.jpeg",
      precio: 600000,
      descripcion: "Descripción del producto 3",
    },
    {
      id: 4,
      titulo: "Producto 4",
      imagen: "/src/components/Imagenes/Nevera.jpeg",
      precio: 300000,
      descripcion: "Descripción del producto 4",
    },
    {
      id: 5,
      titulo: "Producto 5",
      imagen: "/src/components/Imagenes/Nevera.jpeg",
      precio: 300000,
      descripcion: "Descripción del producto 5",
    },
    {
      id: 6,
      titulo: "Producto 6",
      imagen: "/src/components/Imagenes/Nevera.jpeg",
      precio: 1000000,
      descripcion: "Descripción del producto 6",
    },
    {
      id: 7,
      titulo: "Producto 7",
      imagen: "/src/components/Imagenes/Nevera.jpeg",
      precio: 600000,
      descripcion: "Descripción del producto 7",
    },
    {
      id: 8,
      titulo: "Producto 8",
      imagen: "/src/components/Imagenes/Nevera.jpeg",
      precio: 300000,
      descripcion: "Descripción del producto 8",
    }
  ],
  cart: [],
};

export function reducerCompra(state, action) {
  switch (action.type) {
    case TYPES.AGREGAR_CARRITO: {
      let nuevoItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(nuevoItem)
      let itemEnCarrito = state.cart.find((item) => item.id === nuevoItem.id);
      return itemEnCarrito
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === nuevoItem.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...nuevoItem, cantidad: 1 }],
          };
    }
    case TYPES.REMOVER_ELEMENTO_CARRITO: {
    }
    case TYPES.REMOVER_TODO_CARRITO: {
    }
    case TYPES.LIMPIAR_TODO_CARRITO: {
    }
    default:
      return state;
  }
}
