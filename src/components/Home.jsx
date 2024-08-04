import Header from "./Header.jsx"
import CardPizza from "./CardPizza.jsx"

const Home = () => {
    return (
        <>
            <Header />
            <CardPizza 
                name="Napolitana"
                price={5950}
                ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            />
        </>
    )
}

export default Home