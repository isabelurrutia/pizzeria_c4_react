import { separador_de_miles } from "../utils/funciones_valores"
import '../style/CardPizza.css'

const CardPizza = ({name, price, ingredients, img, id, desc}) => {
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
                <button className="botonVerMas">Ver Más 👀</button>
                <button className="botonAñadir">Añadir 🛒</button>
            </div>
        </div>
    )
}

export default CardPizza