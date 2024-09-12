import './App.css'
import {pizzaCart} from './pizzas.js'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import Pizza from './pages/Pizza.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'
import { Navigate } from 'react-router-dom';
import MyContext from './context/MyContext.jsx';
import {useState} from 'react'


function App() {

  const [listaProductos, setListaProductos] = useState(pizzaCart)

  const [totalCompra, setTotalCompra] = useState(
      pizzaCart.reduce((total, producto) => total + producto.amount * producto.price, 0));
  
      const initialAmount = 1;
  const [amount, setAmount] = useState(initialAmount);

  return (
    <MyContext.Provider value= {{ amount, setAmount, listaProductos, setListaProductos, totalCompra, setTotalCompra}}>
      <Navbar />
      <Routes>
        <Route 
          index
          element={<Home />}
        />
        <Route 
          path="/register"
          element={<Register />}
        /> 
        <Route 
          path="/login"
          element={<Login />}
        /> 
        <Route 
          path="/cart"
          element={<Cart />}
        /> 
        <Route 
          path="/pizza/p001"
          element={<Pizza />}
        /> 
        <Route 
          path="/profile"
          element={<Profile />}
        />     
        <Route
          path="/404"
          element={<NotFound />}
        /> 
        <Route 
          path='*' 
          element={<Navigate replace to='/404'/>} 
        />
      </Routes>
      <Footer />
    </MyContext.Provider>
  )
}
export default App
