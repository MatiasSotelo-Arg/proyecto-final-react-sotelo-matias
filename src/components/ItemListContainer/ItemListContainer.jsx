import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getData } from "../../services/firebase";

function ItemListContainer () {
    
    const [productos, setProductos] = useState([]);
    
    const [titulo, setTitulo] = useState("Productos")

    const marca = useParams().itemMarca;

    useEffect( () => {
        getData()
            .then((res) => {
                if(marca) {
                    setProductos(res.filter((prod) => prod.marca === marca ))
                    setTitulo(marca);
                } else {
                    setProductos(res)
                    setTitulo("Productos");
                }
                
            })
    },[marca])

    return ( 
        <div>
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer;