import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Cart from './components/Cart.jsx'
import Pizza from './components/Pizza.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Pizza />
      {/*
      <Home />
      <Cart />
      <Login />
      <Register />
      */}
      <Footer />
    </>
  )
}
export default App
