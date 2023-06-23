import { Link } from 'react-router-dom'
import './Item.scss'

function Item( {id,imagen,producto,marca,stock,titulo,descripcion,costo,precio} ) {

    return (

        <div className="CardItems">
            
            <img className="ImgCard" src={`/assets//${imagen}`}/>

            <h2 className="ItemTitle"> {titulo} </h2>

            <p className='ItemPrecio'>${precio}</p>
            
            <Link className='ItemDetalle' to={`/item/${id}`}>Ver Detalle</Link>

        </div>
    )
}

export default Item