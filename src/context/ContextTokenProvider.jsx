import { useState } from "react";
import ContextToken from "./ContextToken";  

const ContextTokenProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Estado del token
  const [email, setEmail] = useState(null); // Estado del email
  const [profile, setProfile] = useState(null); // Estado para almacenar el perfil del usuario 

  // Función para hacer login
  const login = async (email, password) => { // Aquí recibimos la contraseña como parámetro
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Usamos la contraseña directamente en el cuerpo de la solicitud
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);  // Guardar el token
        setEmail(data.email);  // Guardar el email
        localStorage.setItem('token', data.token); // Guardar el token en el localStorage
      } else {
        console.error('Error en el login:', data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud de login:', error);
    }
  };

  // Función para hacer registro
  const register = async (email, password) => { // Aquí recibimos la contraseña como parámetro
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Usamos la contraseña directamente en el cuerpo de la solicitud
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);  // Guardar el token
        setEmail(data.email);  // Guardar el email
        localStorage.setItem('token', data.token); // Guardar el token en el localStorage
      } else {
        console.error('Error en el registro:', data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud de registro:', error);
    }
  };

  // Función para obtener el perfil del usuario
  const getProfile = async () => {
    if (!token) return; // Si no hay token, no se puede hacer la solicitud

    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Pasar el token en el encabezado
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (response.ok) {
        setProfile(data);  // Guardar el perfil en el estado
      } else {
        console.error('Error al obtener el perfil:', data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud del perfil:', error);
    }
  };

  // Función para hacer logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    setProfile(null);
    localStorage.removeItem('token'); // Eliminar el token del localStorage
  };

  return (
    <ContextToken.Provider value={{ token, email, profile,login, register, logout, getProfile }}>
      {children}
    </ContextToken.Provider>
  );
};

export default ContextTokenProvider;
