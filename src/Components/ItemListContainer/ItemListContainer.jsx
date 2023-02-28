import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList'
import { getProducts } from "../../utils/utils";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoria}= useParams()
    useEffect(() => {
        if(categoria){
            getProducts()
            .then(items => {
                const products = items.filter(prod => prod.categoria === categoria)
                const productList = ItemList({products})
                setProductos(productList)
            })
        } else {
            getProducts()
            .then(products => {
                const productsList = ItemList({products})
                setProductos(productsList)
                
            })
        }
        
    }, [categoria])

    

    return (
        <section>
            <div id="title">
            { categoria ? <h2 >{categoria}</h2>:<h2>Todos los productos</h2>}
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
