import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'
import Home from '../pages/Home.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import Cart from '../pages/Cart.jsx';
import Pizza from '../pages/Pizza.jsx';
import Profile from '../pages/Profile.jsx';
import NotFound from '../pages/NotFound.jsx';
import Footer from '../components/Footer.jsx';
import ContextToken from '../context/ContextToken.jsx';

function AppRender() {
    const { token } = useContext(ContextToken); // Ahora puedes acceder a `token` aquí

    return (
        <>
        <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/pizzeria_c4_react" element={<Home />} />
            
            {/* Redirigir al home si el token es true */}
            <Route 
            path="/register" 
            element={token ? <Navigate to="/" /> : <Register />}
            />
            
            <Route 
            path="/login" 
            element={token ? <Navigate to="/" /> : <Login />}
            />
            
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            
            {/* Redirigir a login si el token es false */}
            <Route 
            path="/profile" 
            element={token ? <Profile /> : <Navigate to="/login" />}
            />
            
            <Route path="/404" element={<NotFound />} /> 
            <Route path='*' element={<Navigate replace to='/404' />} />
        </Routes>
        <Footer />
        </>
    );
}

export default AppRender;