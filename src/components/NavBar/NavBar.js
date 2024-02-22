import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavbBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3> ElectroHop</h3>
            </Link>

            <div className="Categories">
                <NavLink to= {`/category/poleras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Poleras</NavLink>
                <NavLink to= {`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Accesorios</NavLink>
                <NavLink to= {`/category/posters`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Posters</NavLink>
            </div>
            <CartWidget />
        </nav>


    )
}

export default NavbBar