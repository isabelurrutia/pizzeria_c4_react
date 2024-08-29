import React from 'react'
import '../style/Pizza.css'
import { useEffect } from "react";
import { useState } from "react"


const Pizza = () => {
    // 3 - pizzas guardará los valores traídos desde la API
    const [producto, setProducto] = useState([]);
        
    // 2 - Llamamos a la función consultar Api al momento de montar el componente
    useEffect(() => {
    consultarApi();
        }, []);
    
    // 1 - Función que consulta la API
    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas/p001";
        const response = await fetch(url);
        const data = await response.json();
        setProducto(data); 
    };
    
    return (
        <>
            
            {producto && (
                <>
                <div className="unaPizza">
                    <div className="pizza-details-1">
                        <img src={producto.img} alt={producto.name} className='img-pizza'/>
                        <h2>{producto.name}</h2>
                        <p>Precio: ${producto.price}</p>
                    </div> 
                    <div className="pizza-details-2">
                        <p>{producto.desc}</p>
                        <p><strong>Ingredientes: </strong>{Array.isArray(producto.ingredients) ? producto.ingredients.join(', ') : 'N/A'}</p>
                    </div>
                </div>
                </>
            )}
        </>
            
    )
}

export default Pizza