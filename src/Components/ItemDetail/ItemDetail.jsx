import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <>
            <div className="product-image">
                <div>
                    <img src={item.imagen} alt={item.title} />
                </div>
                <div>
                    <img src={item.detailImg} alt={item.title} />
                </div>
                <div>
                    <img src={item.detailImgDos} alt={item.title} />
                </div>
            </div>
            <div className="product-information">
                <div className="product-name">
                    <p>{item.title}</p>
                </div>
                <div className="product-price">
                    <p>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                </div>
                <div className="quantify">
                    <ItemCount valInicial={1} stock={item.stock}/>
                </div>
                <button className="add-to-cart">
                    <p>agregar al carrito</p>
                </button>
            </div>
        </>
    );
}

export default ItemDetail;
