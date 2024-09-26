import { useState } from "react";
import ContextToken from "./ContextToken";  

// Este componente provee el contexto
const ContextTokenProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Estado del token, inicia en null
  const [email, setEmail] = useState(null) // Estado para almacenar el email del usuario

  // Función para hacer login
  const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            setToken(data.token);  // Guardar el token en el estado
            setEmail(data.email);  // Guardar el email en el estado
        } else {
            console.error('Error en el login:', data.message);
        }
    } catch (error) {
        console.error('Error en la solicitud de login:', error);
    }
  };

  // Función para hacer registro
  const register = async (email, password) => {
    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            setToken(data.token);  // Guardar el token en el estado
            setEmail(data.email);  // Guardar el email en el estado
        } else {
            console.error('Error en el registro:', data.message);
        }
    } catch (error) {
        console.error('Error en la solicitud de registro:', error);
    }
  };



    return (
        <ContextToken.Provider value={{ token, email, login, register }}>
        {children} {/* Aquí se renderizan los componentes hijos */}
        </ContextToken.Provider>
    );
};

export default ContextTokenProvider;