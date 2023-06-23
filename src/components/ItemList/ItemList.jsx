import Item from "../Item/Item"
import "./ListGroup.scss"

function ItemList( {productos, titulo} ) {

    return ( 
        <div className="ContGroup">
            <h2>{titulo}</h2>

            <div className="ListGroup">
                { productos.map(prod => prod.stock > 0 && <Item key={prod.id} {...prod}/> ) }
            </div>
            
        </div>
    )
}

export default ItemList