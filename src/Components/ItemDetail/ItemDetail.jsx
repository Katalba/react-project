import { ItemCount } from "../ItemCount/ItemCount";


const ItemDetail = (item) => {
    return (
        <>
            <div className="product-image">
                <div>
                    <img src={item.imagen} alt={item.name} />
                </div>
                <div>
                    <img src="img/Blusa2.webp" alt="" />
                </div>
            </div>
            <div className="product-information">
                <div className="product-name">
                    <p>{item.name}</p>
                </div>
                <div className="product-price">
                    <p>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                </div>
                <button className="add-to-cart">
                    <p>agregar al carrito</p>
                </button>
                <div className="quantify">
                    <ItemCount valInicial={1} stock={10}/>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
