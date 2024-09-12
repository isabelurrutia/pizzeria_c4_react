import {useState} from 'react'
import '../style/CartPizza.css'
import { separador_de_miles } from "../utils/funciones_valores"
import { useContext } from 'react';
import MyContext from '../context/MyContext';

const CartPizza = ({name, price, img, initialAmount, onRemove, onUpdateTotal}) => {
    
    const [amount, setAmount] = useState(initialAmount);
    
    const restarProducto = () => {
        if (amount > 0) {
            setAmount(amount - 1);
            onUpdateTotal(price * -1);
        }
        else if (amount === 1) {
            // Si el amount es 1 y restamos, eliminamos el producto
            onRemove(name);
            onUpdateTotal(price * -1);
        }
    }

    const sumarProducto = () => {
        setAmount(amount + 1);
        onUpdateTotal(price);
    }
    
    return (
        <>
            {amount > 0 ?
                <>
                    <div key={name} className='elementoCarro'>
                        <img className='imagenCarro' src={img} alt={name}/>
                        <h2>Pizza {name}</h2>
                        <h3>${separador_de_miles(price)}</h3>
                        <div className='cantidadCarro'>
                            <button className='cantidadCarroBoton' onClick= {restarProducto}>-</button>
                            <p className='cantidadCarroNumero'>{amount}</p>
                            <button className='cantidadCarroBoton' onClick={sumarProducto} >+</button>
                        </div>
                    </div>
                </>
            :''}
        </>
        
    )
}

export default CartPizza