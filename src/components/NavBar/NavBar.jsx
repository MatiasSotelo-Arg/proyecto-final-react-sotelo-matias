import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.scss'

function NavBar() {

    return (
        <nav className="ContNav">
            <div className="HeaderNav">
                <Link to={"/"}><img className="NavImg" src={`/assets//ahora_relojes.png`} alt="logo ahora relojes" /></Link>
                <Link to="carrito"><CartWidget/></Link>
                
            </div>
            
            <ul className="ContLink">
                <li><Link to="marca/tressa">tressa</Link></li>
                <li><Link to="marca/knock out">knock out</Link></li>
                <li><Link to="marca/dakot">dakot</Link></li>
                <li><Link to="marca/kosiuko">kosiuko</Link></li>
                <li><Link to="marca/stone">stone</Link></li>
                <li><Link to="marca/relojes">relojes</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;