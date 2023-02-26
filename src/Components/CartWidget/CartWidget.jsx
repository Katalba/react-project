import { Link } from "react-router-dom";

const CartWidget = ({amount}) => {
    return (
        <li className="nav-item">
            <Link id="show_cart" className="nav-link" to={'/cart'}><i className="fa-solid fa-cart-shopping"/></Link>
            <p>{amount}</p>
            <div className="container" id="cart">

            </div>
        </li>
    );
}

export default CartWidget;
