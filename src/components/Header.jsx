import React from 'react';

function Header({titulo}){

    //si queremos colocar codigo javascript

    const edad  = 18;
    let mensaje;

    if(edad >= 18){
        mensaje = 'eres mayor de edad';
    }else{
        mensaje = 'eres menor de edad';
    }   



    return(
        <div className="encabezado">
            <p>{titulo}</p>
        </div>
    
    );

}

export default Header;