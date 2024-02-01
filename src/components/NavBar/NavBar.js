import CartWidget from "../CartWidget/CartWidget"

const NavbBar = () => {
    return (
        <nav>
            <h3> ElectroHop</h3>
            <div> 
                <button> Poleras </button>
                <button> Accesorios </button>
                <button> Posters </button>
            </div>
            <CartWidget/>
        </nav>


    )
}

export default NavbBar