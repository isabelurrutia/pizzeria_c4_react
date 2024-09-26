import { useState, useContext } from 'react';
import '../style/Login.css'
import ContextToken from '../context/ContextToken';

const Login = () => {
    const { login } = useContext(ContextToken); 

    const [email, setEmail]= useState('');
    const [clave, setClave]= useState('');
    
    
    //Estado para los errores
    const [vacio, setVacio] = useState(false);
    const [corta, setCorta] = useState(false);
    const [error, setError] = useState(null);

    //Función antes de enviar el formulario
    const validarDatos = async (e) => {
        e.preventDefault();
        
        //reiniciar estados de error
        setVacio(false);
        setCorta(false);
        setError(null);
        
        //Validaciones
        if (!email.trim() || !clave.trim()) {
            setVacio(true);
        return;
        }
        if (clave.length < 6){
            setCorta(true);
        return;
        }
        
        try {
            // Llamar al método login del contexto
            await login(email, clave);
        } catch (err) {
            setError('Error al iniciar sesión');
        }
        
        // Si todas las validaciones pasan limpio
        setEmail('');
        setClave('');
        
        alert("Ingreso exitoso");
        };
    return (
        <>
            <form className="formularioLogin"  onSubmit={validarDatos}>
            
                <div className="formEmailLogin">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    className="inputEmailLogin"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className="formClaveLogin">
                    <label>Contraseña</label>
                    <input
                    type="password"
                    name="clave"
                    className="inputClaveLogin"
                    onChange={(e) => setClave(e.target.value)}
                    value={clave}
                    />
                </div>
                
                {vacio ? <p className='text-danger'>Todos los campos son obligatorios</p> : null}
                {corta ? <p className='text-danger'>la clave debe tener al menos 6 caracteres</p> : null}
                {error ? <p className='text-danger'>{error}</p> : null}

                <button type="submit" className="enviarLogin">Enviar</button>
            </form>
        </>
    )
}

export default Login