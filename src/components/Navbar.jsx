import '../style/Navbar.css'
import { Link } from "react-router-dom";
import {separador_de_miles} from '../utils/funciones_valores.jsx'

const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
        <nav>
            <section>
                <h4>Pizzeria Mamma Mía!</h4>
                <p>
                    <Link to="/">🍕Home</Link>
                </p>
                {token? 
                    <ul className='botonesLogin'>
                        <li className='cadaBotonLogin'>
                            <Link to="/profile">🔐Profile </Link>
                        </li>
                        <li className='cadaBotonLogin'>🔒Logout</li>
                    </ul>:
                    <ul className='botonesLogin'>
                        <li className='cadaBotonLogin'>
                            <Link to="/profile">🔐Login </Link>
                            </li>
                        <li className='cadaBotonLogin'>
                            <Link to="/register">🔐Register </Link>
                            </li>
                    </ul>
                    }   
                
            </section>
            <button className='botonTotal'>
                <Link to="/cart">
                    🛒 Total: ${separador_de_miles(total)}
                </Link>
            </button>
        </nav>
    )
}

export default Navbar