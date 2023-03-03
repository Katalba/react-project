import { ItemCount } from "../ItemCount/ItemCount";
import { useCartContext } from "../Context/CartContext";
import { useState } from "react";

 export const ItemDetail = ({item}) => {
    const [fix, setFix] = useState(false)
    const {addItem} = useCartContext()

    const onAdd = (cantidad) => {
        addItem(item,cantidad)
    }

    const setFixed = () => {
        if (window.scrollY >= item.scroll) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener('scroll', setFixed)

    return (
        <>
            <div className="product-image">
                    <img className="imgUno" src={item.imagen} alt={item.title} />
    
                <div className="product-detail">
                    <img className="imgDos" src={item.detailImg} alt={item.title} />
                    <img className="imgTres" src={item.detailImgDos} alt={item.title} />
                </div>
            </div>
            <div className={ fix ? "product-information fixed" : "product-information"}>
                <div className="product-name">
                    <p>{item.title}</p>
                </div>
                <div className="product-price">
                    <p>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                </div>
                <div className="quantify">
                    <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
