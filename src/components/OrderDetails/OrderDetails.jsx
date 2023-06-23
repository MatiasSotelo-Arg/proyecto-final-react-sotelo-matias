import { useParams } from "react-router-dom";

function OrderDetails () {

    const { orderid } = useParams()

    return (
        <div>
            <h2>Gracias por su compra!</h2>
            <p>Su id de compra es {orderid}</p>

        </div>
    )
}

export default OrderDetails;