import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createPurchaseOrder, getProduct, updateProduct } from "../../utils/utils";
import { useForm } from 'react-hook-form'
import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export const Checkout = () => {
    const { cart, emptyCart, totalPrice } = useCartContext()
    const datosFormulario = React.useRef()
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()



    const onSubmit = (data) => {
        console.log(data)
        const formDat = new FormData(datosFormulario.current)
        const client = Object.fromEntries(formDat)

        const aux = [...cart]

        aux.forEach(prodCart => {
            getProduct(prodCart.id).then(prodBDD => {
                prodBDD.stock -= prodCart.cant
                updateProduct(prodCart.id, prodBDD)
            })
        })

        createPurchaseOrder(client, aux, totalPrice(), new Date().toISOString()).then(purchaseOrder => {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: 'Gracias por su compra',
                text: `Su orden de compra: ${purchaseOrder.id} por: $${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con éxito`,
                icon: 'success',
            })
            emptyCart()
            data.target.reset()
            navigate('/')
        })
    }

    let navigate = useNavigate()

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
                        <input {...register('nameLastname', { required: true })} type="name" placeholder="Juan Castro" className="form-control" aria-describedby="name-lastName" />
                        {errors.nameLastname && <small className="fail">Campo requerido</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email1"
                            {...register("email1", { required: true })}
                        />
                        {errors?.email1?.type === "minLength" && (
                            <small className="fail">La dirección de email no es valida</small>
                        )}
                        {errors?.email1?.type === "required" && (
                            <small className="fail">Es necesario ingresar tu email</small>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email2"
                            {...register("email2", { required: true, validate: { equalMails: mail2 => mail2 === getValues().email1 } })}
                        />
                        {errors?.email2?.type === "minLength" && (
                            <small className="fail">La dirección de email no es valida</small>
                        )}

                        {errors?.email2?.type === "required" && (
                            <small className="fail">Es necesario ingresar tu email</small>
                        )}
                        {errors?.email2?.type === "equalMails" && (
                            <small className="fail">Los emails deben ser iguales</small>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Número de teléfono</label>
                        <input {...register('phoneNumber', { required: true })}
                            type="number"
                            placeholder="1112345678"
                            className="form-control" />
                        {errors.nameLastname && <small className="fail">Campo requerido</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dirección de envío</label>
                        <input {...register('address')}
                            type="text"
                            placeholder="Hidalgo 765 1 E"
                            className="form-control" />
                        {errors.nameLastname && <small className="fail">Campo requerido</small>}
                    </div>
                    <button type="submit" className="btn btn-dark submit">Finalizar compra</button>
                </form>
            }


        </>
    );
}

export default Checkout;

