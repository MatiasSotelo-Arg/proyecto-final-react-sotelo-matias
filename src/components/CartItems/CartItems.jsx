import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.scss'

function CartItem () {
    
    const {carrito,removeItem} = useContext(CartContext);

    return ( 
        <div>


            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <img className="ImgCart" src={`/assets//${prod.imagen}`} alt="" />
                        <h3>{prod.titulo}</h3> 
                        <p>Precio: ${prod.precio}<span> - {prod.cantidad} unidades</span></p>
                        <p>Total: ${prod.cantidad * prod.precio}</p>
                        <button onClick={()=> removeItem(prod.id)}>X</button>
                    </div>
                ))
            }
            
        </div>   
    )
}

export default CartItem;
