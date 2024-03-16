import cart from './assets/cart-large-minimalistic-svgrepo-com.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className='CartWiget' sytle={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className='CartImg' src={cart} alt="cart-widget" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget