import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../CartItems/CartItems";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { createOrder } from "../../services/firebase";

import './Checkout.scss'

function Checkout () {
    
    const {carrito,precioTotal,vaciarCarrito} = useContext(CartContext);

    const navigate = useNavigate()

    async function handleConfirm(userData) {
        const order = {
            item: carrito,
            buyer: userData,
            date: new Date(),
            price: precioTotal()
        }

        const id = await createOrder(order);

        vaciarCarrito()

        navigate(`/orden-confirmada/${id}`)
    }

    return ( 
        <div className="ContCart">
            <h1 className="TituloCart">Carrito</h1>
         
            { carrito.length !== 0 ? 
            
                <>
                    <CartItem/> 
                    <button onClick={vaciarCarrito} className="VaciarButton">Vaciar Carrito</button>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <CheckoutForm onConfirm={handleConfirm}/>
                </> : 
                <>
                    <h2 className="CartVacio">El carrito está vacío</h2>  
                    <Link className="VaciarButton" to="/">arma tu pedido</Link>
                </>
            }
        
        </div>   
    )
}

export default Checkout;