import {createContext , useState, useEffect } from "react";


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculateTotal = () => {
            let newTotal = 0;
            cart.forEach(item => {
                newTotal += item.quantity * item.price;
            });
            setTotal(newTotal);
        };

        calculateTotal();
    }, [cart]);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total}}>
            { children }
        </CartContext.Provider>
    )
}