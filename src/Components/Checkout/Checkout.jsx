import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createPurchaseOrder, getPurchaseOrder, getProduct, updateProduct } from "../../utils/utils";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useForm} from 'react-hook-form'

export const Checkout = () => {
    const { cart, emptyCart, totalPrice } = useCartContext()
    const datosFormulario = React.useRef()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const formDat = new FormData(datosFormulario.current)
        const client = Object.fromEntries(formDat)

        const aux = [...cart]

        createPurchaseOrder(client, aux, totalPrice(), new Date().toISOString()).then(purchaseOrder => {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: 'Gracias por su compra',
                text: `Su orden de compra por $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con éxito`,
                icon: 'success',
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
                        <h2>No agregaste productos aún <i className="fa-solid fa-heart-crack"></i></h2>
                        <h3>Volvé a tienda y elegite algo lindo</h3>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark goToStore">Ir a la tienda</button></Link>
                    </div>

                </>
                :
                <form onSubmit={handleSubmit(onSubmit)} ref={datosFormulario} >
                    <div className="mb-3">
                        <label className="form-label">Nombre y Apellido</label>
                        <input {...register('nameLastname', {required:true} )} type="name" placeholder="Juan Castro" className="form-control" aria-describedby="name-lastName" />
                        {errors.nameLastname && <small className="fail">Campo requerido</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input {...register('email')} type="email" placeholder="Introduzca su email" className="form-control" />
                        {errors.nameLastname && <small className="fail">Campo requerido</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Repetir E-mail</label>
                        <input {...register('repeatEmail')} type="email" placeholder="Repita su email" className="form-control" />
                        {errors.nameLastname && <small className="fail">Campo requerido</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Número de teléfono</label>
                        <input {...register('phoneNumber', {required:true} )} type="number" placeholder="1112345678" className="form-control" />
                        {errors.nameLastname && <small className="fail">Campo requerido</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dirección de envío</label>
                        <input {...register('address')} type="text" placeholder="Hidalgo 765 1 E" className="form-control" />
                        {errors.nameLastname && <small className="fail">Campo requerido</small>}
                    </div>
                    <button type="submit" className="btn btn-dark submit">Finalizar compra</button>
                </form>
            }


        </>
    );
}

export default Checkout;

