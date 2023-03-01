import { useContext, createContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CarritoProvider = (props) => {
    const [cart, setCart] = useState([])

    // Existe producto en el carrito?
    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    // Agregar producto al carrito
    const addItem = (product, cantidad) => {

        if (isInCart(product.id)) {
            const indice = cart.findIndex(prod => prod.id === product.id)
            const aux = [...cart]
            aux[indice].cant = cantidad
            setCart(aux)
        } else {
            const prodCart = {
                ...product,
                cant: cantidad
            }
            setCart([...cart, prodCart])

        }
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
        return cart.reduce((acc, prod) => acc += prod.cant, 0)
    }

    // Total compra
    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod.cant * prod.precio), 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart, getItemQuantify, totalPrice }}>
            {props.children}
        </CartContext.Provider>
    )

}