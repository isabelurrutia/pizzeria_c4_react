import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Login />
      {/*
      <Register />
      <Home />
      
      */}
      <Footer />
    </>
  )
}
export default App
