import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    // Estado para almacenar la cantidad de productos seleccionada
    const [quantity, setQuantity] = useState (initial)

// Función para incrementar la cantidad de productos
    const increment =() => {
        if (quantity < stock){
            setQuantity (quantity +1)
        }
    }

    // Función para decrementar la cantidad de productos
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity} </h4>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock} >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount