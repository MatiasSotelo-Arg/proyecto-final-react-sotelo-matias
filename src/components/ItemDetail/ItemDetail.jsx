import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { CartContext } from '../../context/CartContext';

function ItemDetail ( item ) {

    const { carrito, agregarAlcarrito } = useContext(CartContext);
    console.log(carrito)

    const [cantidad, setCantidad] = useState(1);

    function handleRestar () {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    function handleSumar () {
        cantidad < item.stock && setCantidad(cantidad + 1);
    } 

    return (
        <div className="ContItemDetail">
            <img className="ImgItem" src={`/assets//${item.imagen}`}/>
            
            <div className="InfoItem">
                <h2>{item.titulo}</h2>
                { item.marca !== 'relojes' ? <p>Marca: {item.marca}</p> : null}
                <p>Descripcion:</p>
                <pre>{item.descripcion}</pre>
                <p>Precio: ${item.precio}</p>
                <p>Stock: {item.stock}</p>
                <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => { agregarAlcarrito(item,cantidad) } }/>
            </div>
        </div>
    )
}

export default ItemDetail