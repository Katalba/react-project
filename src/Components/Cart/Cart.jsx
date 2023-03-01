import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemList from "../ItemList/ItemList";

export const CartT = () => {
    const { cart, totalPrice, emptyCart } = useCartContext()
    return (
        <>
            {cart.length === 0
                ? //Si carrito esta vacio
                <>
                    <h2>Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link>
                </>
                : //Si carrito tiene productos
                <>
                    <div className='cartTitle'>
                        <hr />
                        <h2>Carrito de compras</h2>
                        <Link className="" to={'/'}><button className="btn">Continuar Comprando</button></Link>
                        <hr />
                    </div>

                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                    {<ItemList products={cart} plantilla={'itemCart'} />}
                    </table>
                    <hr />
                    <div className="divButtons">
                        <p>Total de la compra:  $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <Link className="" to={'/checkout'}><button className="btn btn-success">Finalizar compra</button></Link>
                        <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                    </div>
                </>
            }
        </>
    );
}

export default CartT;
