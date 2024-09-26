import CartPizza from '../components/CartPizza';
import { useContext, useState } from 'react';
import { separador_de_miles } from "../utils/funciones_valores";
import '../style/Cart.css';
import MyContext from '../context/MyContext';
import ContextToken from '../context/ContextToken';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { listaProductos, setListaProductos, totalCompra, setTotalCompra } = useContext(MyContext);
    const { token } = useContext(ContextToken);
    const [error, setError] = useState(null); // Estado para manejar errores en el checkout
    const [success, setSuccess] = useState(false); // Estado para manejar el éxito de la compra
    const navigate = useNavigate();

    // Función para eliminar un producto del carrito
    const eliminarProducto = (name) => {
        const listaFiltrada = listaProductos.filter(el => el.name !== name);
        setListaProductos(listaFiltrada);
    };

    // Función para actualizar el total general de la compra
    const actualizarTotal = (monto) => {
        setTotalCompra((prevTotal) => prevTotal + monto);
    };

    // Función para enviar el carrito de compras al backend
    const handleCheckout = async () => {
        try {
        const response = await fetch('http://localhost:5000/api/checkouts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Si es necesario enviar el token
            },
            body: JSON.stringify({
            items: listaProductos, // Enviar los productos del carrito
            total: totalCompra // Enviar el total de la compra
            }),
        });

        const data = await response.json();
        if (response.ok) {
            setSuccess(true); // Mostrar mensaje de éxito
            setError(null); // Limpiar cualquier error anterior
            // Opcional: Redirigir después de algunos segundos o limpiar el carrito
            // navigate('/'); // Redirigir al home tras la compra exitosa
        } else {
            setError('Error al realizar la compra: ' + data.message);
            setSuccess(false); // Limpiar mensaje de éxito en caso de error
        }
        } catch (err) {
        setError('Error en la solicitud: ' + err.message);
        setSuccess(false); // Limpiar mensaje de éxito en caso de error
        }
    };

    return (
        <>
        <div className="productos">
            {listaProductos.filter(producto => producto.amount > 0).map((producto) => (
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

            {error && <p className="error">{error}</p>} {/* Mostrar errores si los hay */}
            {success && <p className="success">¡Compra realizada con éxito!</p>} {/* Mostrar mensaje de éxito */}

            <button 
            className={token ? 'pagarCarro' : 'pagarCarroDisabled'} 
            disabled={!token}  // Deshabilitar el botón si el token es false
            onClick={handleCheckout} // Llamar a la función de checkout al hacer clic
            >
            <strong>Pagar</strong>
            </button>
        </div>
        </>
    );
};

export default Cart;
