import './App.css'
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


function App() {
  return (
    <>
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
    </>
  )
}
export default App
