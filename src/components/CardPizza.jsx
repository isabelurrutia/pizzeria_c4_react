import { separador_de_miles } from "../utils/funciones_valores"
import '../style/CardPizza.css'


const CardPizza = ({name, price, ingredients, img}) => {
    let ingr = ingredients.join(', ')
    return (
        <div className="Pizzas">
            <img src={img} alt={name} />
            <div className="NombrePizza">
                <h3>Pizza {name}</h3>
            </div>
            <div className="Ingredientes">
                <p>Ingredientes</p>
                <p>🍕 {ingr}</p>
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