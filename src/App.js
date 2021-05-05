import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Alumno from "./components/Alumno";
import Carrito from "./components/Carrito";

function App() {

  //listados de alumnos
  const [alumnos, setalumnos] = useState([
    {
      id: 1,
      name: "Dalvin Molina",
      edad: 19,
      tecnico: "informatico",
      price: "20",
    },
    {
      id: 2,
      name: "Leonardo Jesus",
      edad: 22,
      tecnico: "medicionas",
      price: "100",
    },
    {
      id: 3,
      name: "Esmeralda Perez",
      edad: 16,
      tecnico: "electricidad",
      price: "80",
    },
    {
      id: 4,
      name: "Raymon Pozo",
      edad: 30,
      tecnico: "contabilidad",
      price: "220",
    },
    {
      id: 5,
      name: "Miguel Cespedez",
      edad: 40,
      tecnico: "diseño",
      price: "310",
    },
  ]);

  //state alumno el primero es es el state del objeto y el segundo es el que va a modificarlo.
  const [carritoAlumno, carritoAgregado] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="titulo props" />

      <h4>listados de alumnos</h4>
      {alumnos.map(alumno => (
        <Alumno 
        key={alumno.id} 
        alumnos={alumno} 
        alumnosobj = {alumnos}
        carrito = {carritoAlumno}
        agregarcarrito = {carritoAgregado}
        />
        
      ))}

       <Carrito 
          carrito = {carritoAlumno}
          agregarcarrito = {carritoAgregado}
       />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
