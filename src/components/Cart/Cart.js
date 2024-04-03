import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, total} = useContext(CartContext)
// Renderizado condicional si el carrito está vacío
    if(cart.length === 0) {
        return (
            <div className='Cart'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }
// Renderizado si el carrito tiene elementos
    return (
        <div className='Cart'>
            {cart.map(item => <CartItem key={item.id} item={item} />) }
            <h3>Total : ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart
