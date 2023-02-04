import Item from "../Item/Item";

const ItemList = ({productos}) => {
    return (
        <>
           {productos.map(producto => <Item item={producto} key={producto.id}/>)}
        </>
    );
}

export default ItemList;
