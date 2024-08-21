import Header from "./Header.jsx"
import CardPizza from "./CardPizza.jsx"
import '../style/Home.css'
import {pizzas} from '../pizzas.js'

const Home = () => {
    return (
        <>
            <Header />
            <div className="tiposDePizzas">
                {pizzas.map((pizza)=>(
                    <CardPizza 
                    key={pizza.id}
                    name={pizza.name}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    img={pizza.img}
                    id={pizza.id}
                    desc={pizza.desc}
                    />
                    )
                )}
            </div>
        </>
    )
}

export default Home