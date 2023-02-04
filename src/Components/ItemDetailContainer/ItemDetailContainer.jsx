import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    useEffect(() => {
        fetch('./json/jeans.json')
            .then(response => response.json())
            .then(products => {
                const item = products.find(prod => prod.id === 3)
            })
    }, [])
    return (
        <main className="detail-product">
           
           <ItemDetail producto={producto} />
            
        </main>

    )
}


export default ItemDetailContainer;
