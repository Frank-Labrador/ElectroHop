import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import {getProducts} from '../../asyncMock'




const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])




    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [] )

    return (
        <div>        
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer