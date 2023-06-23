import { useParams } from "react-router-dom";
import './OrderDetails.scss'

function OrderDetails () {

    const { orderid } = useParams()

    return (
        <div className="CartOrdenContainer">
            <h2 className="OrdenTitle">Gracias por su compra!</h2>
            <p>Su id de compra es: {orderid}</p>

        </div>
    )
}

export default OrderDetails;