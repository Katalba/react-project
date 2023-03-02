import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createPurchaseOrder, getPurchaseOrder, getProduct, updateProduct } from "../../utils/utils";
import { Swal } from 'sweetalert2'
import { withReactContent } from 'sweetalert2-react-content'

export const Checkout = () => {
    const { cart, emptyCart, totalPrice } = useCartContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const formDat = new FormData(datosFormulario.current)
        const client = Object.fromEntries(formDat)

        const aux = [...cart]

        createPurchaseOrder(client, aux, totalPrice(), new Date().toISOString()).then(purchaseOrder => {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: <strong>Gracias por comprar tu compra, tu orden de compra con el ID: ${purchaseOrder.id
                } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'success'
            })
            emptyCart()
            e.target.reset()
            navigate('/')
        })
    }
    return (
        <>
            {cart.length === 0
                ?
                <>
                    <div className="finalEmpty">
                        <h2>No agregaste productos aún <i class="fa-solid fa-heart-crack"></i></h2>
                        <h3>Volvé a tienda y elegite algo lindo</h3>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark goToStore">Ir a la tienda</button></Link>
                    </div>

                </>
                :
                <form onSubmit={consultarFormulario} ref={datosFormulario} >
                    <div className="mb-3">
                        <label className="form-label">Nombre y Apellido</label>
                        <input name='name-Lastname' type="name" className="form-control" aria-describedby="name-lastName" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input name='email' type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Repetir E-mail</label>
                        <input name='repeatEmail' type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Número de teléfono</label>
                        <input name='phoneNumber' type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dirección de envío</label>
                        <input name='address' type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-dark submit">Finalizar compra</button>
                </form>
            }


        </>
    );
}

export default Checkout;

