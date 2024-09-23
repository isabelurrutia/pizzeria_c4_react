import './App.css';
import { pizzaCart } from './pizzas.js';
import { useEffect, useState } from 'react';
import MyContext from './context/MyContext.jsx';
import ContextTokenProvider from './context/ContextTokenProvider.jsx';
import AppRender from './components/AppRender.jsx'; 

function App() {
  const [listaProductos, setListaProductos] = useState(pizzaCart);
  const [totalCompra, setTotalCompra] = useState(
    pizzaCart.reduce((total, producto) => total + producto.amount * producto.price, 0)
  );

  // Recalcular el total cada vez que cambia la lista de productos
  useEffect(() => {
    const nuevoTotal = listaProductos.reduce((total, producto) => {
      return total + (producto.price * producto.amount);
    }, 0);
    setTotalCompra(nuevoTotal); // Actualiza el estado con el nuevo total
  }, [listaProductos]); // Se ejecuta cada vez que listaProductos cambia

  return (
    <MyContext.Provider value={{ listaProductos, setListaProductos, totalCompra, setTotalCompra }}>
      <ContextTokenProvider>
        <AppRender />
      </ContextTokenProvider>
    </MyContext.Provider>
  );
}

export default App;