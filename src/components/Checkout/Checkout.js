import { useState, useContext } from "react"; 
import { CartContext } from "../../context/CartContext"; 
import { Timestamp, collection, documentId, query, writeBatch, getDocs, addDoc, where } from "firebase/firestore"; 
import { db } from "../../services/firebase/firebaseConfig"; 
import CheckoutForm from './CheckoutForm/CheckoutForm'; 


const Checkout = () => {
    // Definición de estados
    const [loading, setLoading] = useState(false); // Estado para el indicador de carga
    const [orderId, setOrderId] = useState(''); // Estado para almacenar el ID del pedido

    // Uso del contexto del carrito para acceder a los datos del carrito
    const { cart, total, clearCart } = useContext(CartContext); 

    // Función para crear un nuevo pedido
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true); // Activa el indicador de carga

        try {
            // Objeto que representa el pedido a crear
            const objOrder = {
                buyer: { name, phone, email }, // Datos del comprador
                item: cart, // Ítems del carrito
                total: total, // Total del pedido
                date: Timestamp.fromDate(new Date()) // Fecha y hora del pedido
            };
            const batch = writeBatch(db); // Inicializa una escritura por lotes en Firestore

            const outOfStock = []; // Array para almacenar los productos fuera de stock

            const ids = cart.map(prod => prod.id); // Obtiene los IDs de los productos en el carrito

            // Referencia a la colección 'products' en Firestore
            const productsRef = collection(db, 'products');

            // Obtiene los documentos de los productos en el carrito desde Firestore
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

            const { docs } = productsAddedFromFirestore;

            // Recorre los documentos de los productos en el carrito
            docs.forEach(doc => {
                const dataDoc = doc.data(); // Obtiene los datos del documento
                const stockDb = dataDoc.stock; // Obtiene el stock disponible en la base de datos

                // Busca el producto en el carrito por su ID
                const productsAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productsAddedToCart?.quantity; // Obtiene la cantidad del producto en el carrito

                // Actualiza el stock en la base de datos si hay suficiente stock
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc }); // Agrega el producto fuera de stock al array
                }
            });

            // Si no hay productos fuera de stock, se crea el pedido
            if (outOfStock.length === 0) {
                await batch.commit(); // Ejecuta la escritura por lotes en Firestore

                // Agrega el pedido a la colección 'orders' en Firestore
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                // Actualiza el ID del pedido y limpia el carrito
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Hay productos que están fuera de stock'); // Imprime un mensaje de error si hay productos fuera de stock
            }
        } catch (error) {
            console.error(error); // Maneja cualquier error y lo muestra en la consola
        } finally {
            setLoading(false); // Desactiva el indicador de carga
        }
    };

    // Renderizado condicional basado en el estado de carga y el ID del pedido
    if (loading) {
        return <h1>Se está generando su orden...</h1>; // Muestra un mensaje de carga
    }
    if (orderId) {
        return <h1>El ID de su orden es: {orderId}</h1>; // Muestra el ID del pedido
    }

    // Renderiza el formulario de checkout
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} /> {/* Renderiza el formulario de checkout */}
        </div>
    );
};

export default Checkout; 
