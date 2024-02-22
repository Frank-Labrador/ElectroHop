import './ItemDetail.css'
import Itemcount from '../ItemCount/ItemCount'

const ItemDetail = ({id,name, img, category, description, price, stock}) => {
    return(
        <article className='CardItem1'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt= {name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripcíon: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <Itemcount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}
export default ItemDetail