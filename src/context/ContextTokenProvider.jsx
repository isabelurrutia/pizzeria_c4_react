import { useState } from "react";
import ContextToken from "./ContextToken";  // Importa el contexto que creaste

// Este componente provee el contexto
const ContextTokenProvider = ({ children }) => {
    const [token, setToken] = useState(true); // Estado del token

  // Función para cerrar sesión, cambiando el token a false
    const logout = () => {
    setToken(false);
    };

    return (
        <ContextToken.Provider value={{ token, logout }}>
        {children} {/* Aquí se renderizan los componentes hijos */}
        </ContextToken.Provider>
    );
};

export default ContextTokenProvider;