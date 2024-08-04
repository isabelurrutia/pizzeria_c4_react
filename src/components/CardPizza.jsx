

const CardPizza = ({name, price, ingredients, img}) => {
    return (
        <div className="Pizzas">
            <img src={img} alt={name} />
            <h4>Pizza {name}</h4>
            <p>Ingredientes</p>
            <p>🍕 {ingredients}</p>
            <h2>Precio: ${price}</h2>
        </div>
    )
}

export default CardPizza