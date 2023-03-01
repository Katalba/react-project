import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
    const {getItemQuantify} = useCartContext()

    return (
        <li className="nav-item">
            <Link id="show_cart" className="nav-link" to={'/cartT'}>
                <i className="fa-solid fa-cart-shopping" />
                {getItemQuantify() > 0 && <span className="quantify">{getItemQuantify()}</span>}
            </Link>
        </li>
    );
}

export default CartWidget;
