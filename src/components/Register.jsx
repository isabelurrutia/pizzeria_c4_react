import { useState } from 'react';

const Register = () => {
    const [email, setEmail]= useState('');
    const [clave, setClave]= useState('');
    const [confirmacion, setConfirmacion]= useState('');

    //Estado para los errores
    const [vacio, setVacio] = useState(false);
    const [corta, setCorta] = useState(false);
    const [desigual, setDesigual] = useState(false);

    //Función antes de enviar el formulario
    const validarDatos = (e) => {
        e.preventDefault();
        
        //reiniciar estados de error
        setVacio(false);
        setCorta(false);
        setDesigual(false);
        
        //Validaciones
        if (!email.trim() || !clave.trim() || !confirmacion.trim()) {
            setVacio(true);
        return;
        }
        if (clave.length < 6){
            setCorta(true);
        }
        if (clave !== confirmacion ){
            setDesigual(true);
        }
        
        // Si todas las validaciones pasan limpio
        setEmail('');
        setClave('');
        setConfirmacion('');
        alert("Registro exitoso");
        };
    return (
        <>
            <form className="formulario position-absolute top-50 start-50 translate-middle"  onSubmit={validarDatos}>
            
                <div className="form-group m-1">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className="form-group m-1">
                    <label>Contraseña</label>
                    <input
                    type="text"
                    name="clave"
                    className="form-control"
                    onChange={(e) => setClave(e.target.value)}
                    value={clave}
                    />
                </div>
                <div className="form-group m-1">
                    <label>Confirmar contraseña</label>
                    <input
                    type="text"
                    name="confirmacion"
                    className="form-control"
                    onChange={(e) => setConfirmacion(e.target.value)}
                    value={confirmacion}
                    />
                </div>
                {vacio ? <p className='text-danger'>Todos los campos son obligatorios</p> : null}
                {corta ? <p className='text-danger'>la clave debe tener al menos 6 caracteres</p> : null}
                {desigual? <p className='text-danger'>la clave y la confirmacion deben ser iguales</p> : null}
                <button type="submit" className="btn
                btn-primary m-1">Enviar</button>
            </form>
        </>
    )
}

export default Register