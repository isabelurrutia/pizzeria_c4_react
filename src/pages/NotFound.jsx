import { Link } from "react-router-dom";
import '../style/NotFound.css'
const NotFound = () => {
    return (
        <div className="contenedorNotFound">
            <img className="img404" src='https://c.pxhere.com/photos/0b/96/error_not_found_404_lego_mistake_4_0_number-1380359.jpg!d' alt="cara decepcionda" />
            <h4>Page not found</h4>
            <button className="ContenedorBotonInicio">
                <Link className="BotonInicio" to='/'>Home</Link>
            </button>
        </div>
    )
}

export default NotFound