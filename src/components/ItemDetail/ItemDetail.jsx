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
            <div className="ContItem">
                <img className="ImgItem" src={`/assets//${item.imagen}`}/>
                
                <div className="InfoItem">
                    <h2 className='TituloItem'>{item.titulo}</h2>
                    { item.marca !== 'relojes' ? <p>Marca: {item.marca}</p> : null}
                    <p>Descripcion:</p>
                    <pre>{item.descripcion}</pre>
                    <p className='PrecioItem'>Precio: ${item.precio}</p>
                    <p>Stock: {item.stock}</p>
                    <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => { agregarAlcarrito(item,cantidad) } }/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail