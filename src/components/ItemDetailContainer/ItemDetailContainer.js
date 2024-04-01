import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById, getProductByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId, categoryId } = useParams();

    useEffect(() => {
        if (itemId) {
            getProductById(itemId)
                .then(response => {
                    setProduct(response);
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (categoryId) {
            getProductByCategory(categoryId)
                .then(products => {
                    setProduct(products[0]);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [itemId, categoryId]);

    return (
        <div className='ItemDetailContainer'>
            {product && <ItemDetail {...product} />}
        </div>
    );
}

export default ItemDetailContainer;
