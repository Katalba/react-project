import { useContext, createContext, useState } from "react";

const cartContext = createContext()

export const useCartContext = () => useContext(cartContext)

export const carritoProvider = (props) => {
    const [cart, setCart] = useState([])

    // Existe producto en el carrito?
    const isInCart = (id) => {
        return cart.find(prod.id === id)
    }

    //Vaciar carrito
    const emptyCart = () => {
        setCart([])
    }

    //Eliminar producto
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    //Cantidad total en carrito
    const getItemQuantify = () => {
        return cart.reduce((acc, prod) => acc += prod.qtfy, 0)
    }

    // Total 

}