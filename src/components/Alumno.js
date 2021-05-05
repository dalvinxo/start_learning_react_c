import React from "react";

const Alumno = ({ alumnos, alumnosobj, carrito, agregarcarrito}) => {
  const { name, price, edad, id } = alumnos;

  const comprar = (id) => {
    const alumno = alumnosobj.filter(alumno => alumno.id == id)[0];

    //actualizando el state del carrito
    agregarcarrito([
      ...carrito,
      alumno
    ]);
};


  const eliminar = id => {
    const alumno_carrito = carrito.filter(alumno => alumno.id !== id);
    
    //colocar los alumnos en el state
    agregarcarrito(alumno_carrito);
  }

  return (
    <div>
      <h6>{name}</h6>
      <p>{price}</p>
      

      {alumnosobj
      ?
      (<button type="button" onClick={() => comprar(id)}>
        comprar
      </button>)
      :
      (<button type="button" onClick={() => eliminar(id)}>
        eliminar
      </button>
      )
      }


    </div>
  );
};
export default Alumno;
