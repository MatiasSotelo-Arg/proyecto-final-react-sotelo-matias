import './ItemCount.scss'


function ItemCount ( {cantidad, handleSumar, handleRestar, handleAgregar} ) {

    return (
        <>
            <div className="ItemCount">
                <button onClick={handleRestar}>-</button>
                <p className="Count">{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className="ItemAgregar" onClick={handleAgregar}>Agregar al carrito</button>
        </>
        
        
    )
}

export default ItemCount;