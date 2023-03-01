import { useCartContext } from "../Context/CartContext";

export const ItemCart = ({item}) => {
    const {removeItem} = useCartContext()

    return (
        <>
                <tbody>
                    <tr>
                        <td><img className='cartImg' src={item.imagen} alt={item.title} /></td>
                        <td>{item.title}</td>
                        <td>${item.precio}</td>
                        <td>{item.cant}</td>
                        <td>$ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</td>
                        <td className="deleteItem" onClick={() => removeItem(item.id)}><i class="fa-regular fa-trash-can"></i></td>
                    </tr>
                </tbody>
        </>
    );
}

  

export default ItemCart;
