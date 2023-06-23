import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getItemData } from "../../services/firebase"


function ItemDetailContainer () {

        const [item, setItem] = useState(null)
        const { itemId } = useParams();

        useEffect( () => {
            getItemData((itemId))
                .then((res) => {
                    setItem(res)
                })
        }, [itemId])
    return (
        <div>
            <ItemDetail {...item}/>
        </div>
    )
}

export default ItemDetailContainer