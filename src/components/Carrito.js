import React from 'react';
import './carrito.css';
import Alumno from './Alumno'

const Carrito = ({carrito, agregarcarrito}) =>{


    return(
        <div className='carritos'>
            <h1>Carrito de alumno:</h1>
       
            {carrito.length === 0
            ?
                <p>No hay alumno en el carrito!</p>
            :
            carrito.map(alumno => (
                <Alumno
                key = {alumno.id}
                alumnos = {alumno}
                carrito = {carrito}
                agregarcarrito = {agregarcarrito}
                />
            ))}

        </div>
    )
}

export default Carrito;