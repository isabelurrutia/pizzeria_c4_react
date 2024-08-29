import Header from "../components/Header.jsx"
import CardPizza from "../components/CardPizza.jsx"
import '../style/Home.css'
import { useEffect } from "react";
import { useState } from "react"

const Home = () => {
    // 3 - pizzas guardará los valores traídos desde la API
    const [pizzas, setPizzas] = useState([]);
    
    // 2 - Llamamos a la función consultar Api al momento de montar el componente
    useEffect(() => {
        consultarApi();
    }, []);

    // 1 - Función que consulta la API
    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        setPizzas(data); 
    };

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