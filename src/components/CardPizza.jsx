
import { separador_de_miles } from "../utils/funciones_valores"
import '../style/CardPizza.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../context/MyContext";

const CardPizza = ({name, price, ingredients, img, id, desc}) => {
    const {listaProductos, setListaProductos} = useContext(MyContext)

    // Función para añadir una pizza al carrito
    const agregarAlCarrito = () => {
        const productoExistente = listaProductos.find(item => item.name === name);

        if (productoExistente) {
            // Si el producto ya está en el carrito, incrementamos su cantidad
            const nuevaLista = listaProductos.map(item => 
                item.name === name ? { ...item, amount: item.amount + 1 } : item
            );
            setListaProductos(nuevaLista);
        } else {
            // Si no está en el carrito, lo añadimos con amount 1
            setListaProductos([...listaProductos, { name, price, amount: 1, img }]);
        }
    };

    return (
        <div className="Pizzas" key={id}>
            <img src={img} alt={name} />
            <div className="NombrePizza">
                <h3>Pizza {name}</h3>
                <p>{desc}</p>
            </div>
            <div className="Ingredientes">
                <p>Ingredientes</p>
                <ul className="listIng">
                    {ingredients.map((ingredient, index) => (
                        <li className="cadaIng" key={index}>🍕 {ingredient}</li>
                    ))}
                </ul>
                
            </div>
            <h2>Precio: ${separador_de_miles(price)}</h2>
            <div className="botonesCard">
                <Link to="/pizza/p001" className="botonVerMas">Ver Más 👀</Link>
                <button className="botonAnadir" onClick={agregarAlCarrito}>Añadir 🛒</button>
            </div>
        </div>
    )
}

export default CardPizza