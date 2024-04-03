import './ItemListContainer.css'
import { useState, useEffect } from "react"

import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom"

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = ({ greeting }) => {
    // Estado para almacenar los productos y el indicador de carga
    const [products, setProducts] = useState([]); // Estado para los productos
    const [loading, setLoading] = useState(true); // Estado para el indicador de carga

    // Obtiene el parámetro de la URL para filtrar los productos por categoría
    const { categoryId } = useParams();

    // Efecto secundario que se ejecuta cuando cambia el categoryId
    useEffect(() => {
        setLoading(true); // Activa el indicador de carga

        // Referencia a la colección 'products' en Firestore, filtrada por categoryId si existe
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');

        // Obtiene los documentos de la colección y adapta los datos
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data(); // Obtiene los datos del documento
                    return {id: doc.id, ...data}; // Retorna un objeto con el ID del documento y los datos
                });
                setProducts(productsAdapted); // Actualiza el estado con los productos adaptados
            })
            .catch(error => {
                console.error("Error al obtener productos:", error); // Maneja cualquier error y lo muestra en la consola
            })
            .finally(() => {
                setLoading(false); // Desactiva el indicador de carga
            });
    }, [categoryId]); // Ejecuta el efecto cuando cambia el categoryId


    return (
        <div className="ItemListContainer">
            <h1>{greeting} </h1>
            {loading ? <p>Cargando...</p> : <ItemList products={products} /> }
        </div>
    )
}

export default ItemListContainer