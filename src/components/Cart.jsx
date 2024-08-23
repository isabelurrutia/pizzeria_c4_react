import {pizzaCart} from '../pizzas'
import CartPizza from './CartPizza'
import {useState} from 'react'
import { separador_de_miles } from "../utils/funciones_valores"
import '../style/Cart.css'

const Cart = () => {

    const [listaProductos, setListaProductos] = useState(pizzaCart)

    const [totalCompra, setTotalCompra] = useState(
        pizzaCart.reduce((total, producto) => total + producto.amount * producto.price, 0)
    );

    // Función para eliminar un producto del carrito
    const eliminarProducto = (name) => {
        const listaFiltrada = listaProductos.filter(el => el.name !== name)
        setListaProductos(listaFiltrada)
    }    

    // Función para actualizar el total general de la compra
    const actualizarTotal = (monto) => {
        setTotalCompra((prevTotal) => prevTotal + monto);
    };

    return (
        <>
            <div className="productos">
                {listaProductos.filter(producto => producto.amount > 0).map((producto)=>(
                        <CartPizza 
                            key={producto.name}
                            name={producto.name}
                            price={producto.price}
                            initialAmount={producto.amount}
                            img={producto.img}
                            onRemove={eliminarProducto}
                            onUpdateTotal={actualizarTotal}
                        />
                    ))}
            </div>
            <div className='totalGeneral'>
                <h2>Total General de la Compra: ${separador_de_miles(totalCompra)}</h2>
                <button className='pagarCarro'><strong>Pagar</strong></button>
            </div>
        </>
    )
}

export default Cart