import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoria}= useParams()
    useEffect(() => {
        if(categoria){
            fetch('../json/all-products.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.categoria === categoria)
                const productList = ItemList({products})
                setProductos(productList)
            })
        } else {
            fetch('./json/all-products.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                setProductos(productsList)
                
            })
        }
        
    }, [categoria])

    console.log(productos)

    

    return (
        <section>
            <div id="title">
                <h2></h2>
            </div>
            <div className="small-container">
                <div className="d-flex flex-wrap">
                    {productos}
                </div>
            </div>
        </section>

    )
}

export default ItemListContainer;
