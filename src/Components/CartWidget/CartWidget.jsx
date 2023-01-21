
const CartWidget = ({amount}) => {
    return (
        <li className="nav-item">
            <a id="show_cart" className="nav-link" href="#"><i className="fa-solid fa-cart-shopping" /></a>
            <p>{amount}</p>
            <div className="container" id="cart">

            </div>
        </li>
    );
}

export default CartWidget;
