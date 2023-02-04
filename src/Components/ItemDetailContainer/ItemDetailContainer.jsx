import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/jeans.json')
            .then(response => response.json())
            .then(products => {
                const item = products.find(prod => prod.id === id)
                setProducto(item)
            })
    }, [])
    return (
        <main className="detail-product">
           
           <ItemDetail item={producto} />
            
        </main>

    )
}


export default ItemDetailContainer;
