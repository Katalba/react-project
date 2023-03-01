import { useState } from "react"
import { toast} from "react-toastify"

export const ItemCount = ({valInicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(valInicial)

    const sumar = () =>  (contador < stock) && setContador(contador + 1) 
    const restar = () => (contador > valInicial)  && setContador(contador - 1)
    const addToCart = () => {
      onAdd(contador)
      toast(`Agregaste ${contador} productos al carrito`)
    }

  return (
    <>
        <button className="btn btn" onClick={() => restar()}>-</button>
            {contador}
        <button className="btn btn" onClick={() => sumar()}>+</button>
        <button className="btn btn-dark" onClick={() => addToCart()}>Agregar al carrito</button>
    </>
  )
}