import { CartContext } from "../../context/CartContext";

import { useContext } from "react";




const CardItem = ({}) => {
    const {removeItem} = useContext(CartContext);

    return (
        <div>
            <picture>
                <img src={item.img} alt = {item.name} />
            </picture>
            <div>
                <h2> {item.name}</h2>
                <p>Cantidad : {item.quantity}</p>
                <p>Subtotal: {item.quantity * item.price}</p>
                <button onClick={() => removeItem(Item.id)}>Eliminar</button>
            </div>

        </div>
    )
}

export default CardItem