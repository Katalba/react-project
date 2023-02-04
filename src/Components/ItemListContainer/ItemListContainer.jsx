import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch('./json/jeans.json')
            .then(response => response.json())
            .then(products => setProductos(products))
    }, [])
    return (
        <section>
            <div id="title">
                <h2>Vestidos</h2>
            </div>
            <div className="small-container">
                <div className="d-flex flex-wrap">
                    <ItemList productos={productos} />
                </div>
            </div>
        </section>

    )
}

export default ItemListContainer;
