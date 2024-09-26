import { useState, useContext } from 'react';
import '../style/Register.css'
import ContextToken from '../context/ContextToken';


const Register = () => {
    const { register } = useContext(ContextToken);

    const [email, setEmail]= useState('');
    const [clave, setClave]= useState('');
    const [confirmacion, setConfirmacion]= useState('');

    //Estado para los errores
    const [vacio, setVacio] = useState(false);
    const [corta, setCorta] = useState(false);
    const [desigual, setDesigual] = useState(false);
    const [error, setError] = useState(null);

    //Función antes de enviar el formulario
    const validarDatos = async (e) => {
        e.preventDefault();
        
        //reiniciar estados de error
        setVacio(false);
        setCorta(false);
        setDesigual(false);
        setError(null);
        
        //Validaciones
        if (!email.trim() || !clave.trim() || !confirmacion.trim()) {
            setVacio(true);
        return;
        }
        if (clave.length < 6){
            setCorta(true);
        return;
        }
        if (clave !== confirmacion ){
            setDesigual(true);
        return;
        }
        try {
            // Llamar al método register del contexto
            await register(email, clave);
            alert("Registro exitoso");
        
            // Si todas las validaciones pasan limpio
            setEmail('');
            setClave('');
            setConfirmacion('');
        } catch (err) {
            setError('Error al registrar usuario');
        }
    };

    return (
        <>
            <form className="formularioRegister"  onSubmit={validarDatos}>
            
                <div className="formEmailRegister">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    className="inputEmailRegister"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className="formClaveRegister">
                    <label>Contraseña</label>
                    <input
                    type="password"
                    name="clave"
                    className="inputClaveRegister"
                    onChange={(e) => setClave(e.target.value)}
                    value={clave}
                    />
                </div>
                <div className="formConfirmarRegister">
                    <label>Confirmar contraseña</label>
                    <input
                    type="password"
                    name="confirmacion"
                    className="inputConfirmarRegister"
                    onChange={(e) => setConfirmacion(e.target.value)}
                    value={confirmacion}
                    />
                </div>
                {vacio ? <p className='text-danger'>Todos los campos son obligatorios</p> : null}
                {corta ? <p className='text-danger'>la clave debe tener al menos 6 caracteres</p> : null}
                {desigual? <p className='text-danger'>la clave y la confirmacion deben ser iguales</p> : null}
                {error ? <p className='text-danger'>{error}</p> : null}
                
                <button type="submit" className="enviarRegister">Enviar</button>
            </form>
        </>
    )
}

export default Register