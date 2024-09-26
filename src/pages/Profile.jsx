import {useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Profile.css'
import ContextToken from '../context/ContextToken'

const Profile = () => {
    const { email, logout } = useContext(ContextToken);
    const navigate = useNavigate(); // Para redirigir al usuario después de cerrar sesión

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        logout(); // Llamar a la función logout del contexto
        navigate('/login'); // Redirigir al usuario a la página de login
    };

    return (
        <div className='contieneProfile'>
            <h2>Perfil de Usuario</h2>
            {email ? (
                <>
                    <p>Email: {email}</p> {/* Mostrar el email del usuario autenticado */}
                    <button onClick={handleLogout}>Cerrar sesión</button> {/* Botón para cerrar sesión */}
                </>
            ) : (
                    <p>No se ha iniciado sesión.</p> // Mensaje si no hay un usuario autenticado
            )}
    
        </div>
    )
}

export default Profile