import { useState,useEffect } from "react";
import Item from "../Item/Item";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch('./json/jeans.json')
        .then(response => response.json())
        .then(products => {
            console.log(products)
            const productsList = ItemList({products}) //Array de productos en JSX
            console.log(productsList)
            setProductos(productsList)
        })
    }, [])
    return (
        <>
            {productos}
        </>
    )
}

export default ItemListContainer;
