import '../style/Navbar.css'
import { Link } from "react-router-dom";
import {separador_de_miles} from '../utils/funciones_valores.jsx'
import { useContext } from 'react';
import MyContext from '../context/MyContext.jsx';
import ContextToken from '../context/ContextToken.jsx';

const Navbar = () => {
    const {totalCompra} =useContext(MyContext)
    const {token, logout} = useContext(ContextToken)
    
    const total = totalCompra;
    
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
                        <li className='cadaBotonLogin'>
                            <button onClick={logout}>🔒Logout</button>
                        </li>
                    </ul>:
                    <ul className='botonesLogin'>
                        <li className='cadaBotonLogin'>
                            <Link to="/login">🔐Login </Link>
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