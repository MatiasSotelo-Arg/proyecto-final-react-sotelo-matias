import './CartWidget.scss'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget () {
    
    const {cantidadCarrito} = useContext(CartContext)

    return ( 
        <div className="cont-cart-widget">
            <img src="/assets//cart.png" alt="carrito ahora relojes" />
            <span className="CartNumber">{cantidadCarrito()}</span>
        </div>
    )
}

export default CartWidget;