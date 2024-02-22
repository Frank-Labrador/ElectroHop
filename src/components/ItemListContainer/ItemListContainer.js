import { useState, useEffect } from "react"
import {getProducts, getProducsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=> {
        const asynFunc = categoryId ? getProducsByCategory : getProducts

        asynFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

    return (
        <div>        
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer