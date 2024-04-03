import { createContext, useState, useEffect } from "react";

// Creación del contexto CartContext
export const CartContext = createContext({
    cart: [] // Valor inicial del carrito
});

// Definición del proveedor de contexto CartProvider
export const CartProvider = ({children}) => {
    // Estados para almacenar el carrito y el total
    const [cart, setCart] = useState([]); // Estado para el carrito
    const [total, setTotal] = useState(0); // Estado para el total

    // Efecto secundario para calcular el total cuando cambia el carrito
    useEffect(() => {
        const calculateTotal = () => {
            let newTotal = 0; // Variable para almacenar el nuevo total
            cart.forEach(item => {
                newTotal += item.quantity * item.price; // Calcula el subtotal de cada producto y lo suma al total
            });
            setTotal(newTotal); // Actualiza el estado del total
        };

        calculateTotal(); // Llama a la función para calcular el total
    }, [cart]); // Ejecuta el efecto cuando cambia el carrito

    // Función para agregar un ítem al carrito
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) { // Verifica si el producto ya está en el carrito
            setCart(prev => [...prev, {...item, quantity}]); // Agrega el producto al carrito con la cantidad especificada
        } else {
            console.error('El producto ya fue agregado'); // Muestra un mensaje de error si el producto ya está en el carrito
        }
    };

    // Función para remover un ítem del carrito
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId); // Filtra el carrito para excluir el producto con el ID especificado
        setCart(cartUpdated); // Actualiza el estado del carrito
    };

    // Función para limpiar el carrito
    const clearCart = () => {
        setCart([]); // Establece el carrito como vacío
    };

    // Función para verificar si un ítem está en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId); // Verifica si algún producto tiene el ID especificado en el carrito
    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total}}>
            { children } {/* Renderiza los componentes hijos */}
        </CartContext.Provider>
    );
};
