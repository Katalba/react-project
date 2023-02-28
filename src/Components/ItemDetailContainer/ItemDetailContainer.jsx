import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/utils";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getProduct(id)
            .then(item => {
                setProducto(item)
            })
    }, [id])
    return (
        <main className="detail-product">
           
           <ItemDetail item={producto} />
            
        </main>

    )
}


export default ItemDetailContainer;
