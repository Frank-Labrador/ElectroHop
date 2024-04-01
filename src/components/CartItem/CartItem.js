import { CartContext } from "../../context/CartContext";

import { useContext } from "react";




const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext);

    return (
        <div>
            <div>
                <h2> {item.name}</h2>
                <p>Cantidad : {item.quantity}</p>
                <p>Subtotal: {item.quantity * item.price}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>

        </div>
    )
}

export default CartItem