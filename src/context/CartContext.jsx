import { createContext,useEffect,useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    function agregarAlcarrito(item, cantidad) {
      const itemAgregado = {...item, cantidad}
      
      const nuevoCarrito = [...carrito];
  
      const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
  
      if(estaEnElCarrito) {
          estaEnElCarrito.cantidad += cantidad; 
      } else {
          nuevoCarrito.push(itemAgregado)
      }
      setCarrito(nuevoCarrito);
  }
  
    function cantidadCarrito () {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
  
    function precioTotal() {
      return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }
  
    function vaciarCarrito () {
      setCarrito([])
    }

    function removeItem(idDelete) {
      return setCarrito(carrito.filter((item) => item.id !== idDelete));
    }

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    return (
    <CartContext.Provider value={ {carrito, agregarAlcarrito, cantidadCarrito, precioTotal, vaciarCarrito, removeItem} }>
        {children}
    </CartContext.Provider>
    )
}