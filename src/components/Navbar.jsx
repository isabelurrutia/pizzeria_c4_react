import '../style/Navbar.css'
import {separador_de_miles} from '../utils/funciones_valores.jsx'

const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
        <nav>
            <section>
                <h4>Pizzeria Mamma Mía!</h4>
                <p>🍕Home</p>
                {token? 
                    <ul className='botonesLogin'>
                        <li className='cadaBotonLogin'>🔐Profile</li>
                        <li className='cadaBotonLogin'>🔒Logout</li>
                    </ul>:
                    <ul className='botonesLogin'>
                        <li className='cadaBotonLogin'>🔐Login</li>
                        <li className='cadaBotonLogin'>🔐Register</li>
                    </ul>
                    }   
                
            </section>
            <button className='botonTotal'>🛒 Total: ${separador_de_miles(total)}</button>
        </nav>
    )
}

export default Navbar