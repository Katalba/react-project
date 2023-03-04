import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ItemCount = ({valInicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(valInicial)

    const sumar = () =>  (contador < stock) && setContador(contador + 1) 
    const restar = () => (contador > valInicial)  && setContador(contador - 1)

    const addToCart = () => {
      const MySwal = withReactContent(Swal)
      onAdd(contador)
      MySwal.fire({
        title: `AGREGASTE ${contador} PRODUCTO(S) AL CARRRITO`,
        text: '',
        icon: 'success',
        timer: '1500'
        
      })
    }

  return (
    <>
        <button className="btn btn-dark-count" onClick={() => restar()}>-</button>
            {contador}
        <button className="btn btn-dark-count" onClick={() => sumar()}>+</button>
        <button className="btn add-to-cart" onClick={() => addToCart()}>Agregar al carrito</button>
        <Link className="link-pagar" to={'/CartT'}><button className="btn btn-pagar">Pagar</button></Link>
    </>
  )
}