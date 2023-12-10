import React, { useState } from "react";
import "./App.css";

// Componentes de las páginas
import Encuestas from "./components/encuestas";

function App() {
  // Estado para rastrear las encuestas
  const encuestas = [
    {
      id: 1,
      pregunta: "¿Como te llamas?",
      opciones: [],
      tipo: "textbox", // Tipo de opción (radio o checkbox)
    },
    {
      id: 2,
      pregunta: "¿Cuál es tu color favorito?",
      opciones: ["Rojo", "Azul", "Amarillo", "Negro"],
      tipo: "radio", // Tipo de opción (radio o checkbox)
    },
    {
      id: 3,
      pregunta: "¿Cuál es tu color favorito?",
      opciones: ["Rojo", "Azul", "Amarillo", "Negro"],
      tipo: "radio", // Tipo de opción (radio o checkbox)
    },
    {
      id: 4,
      pregunta: "¿Cuál es tu comida favorita?",
      opciones: ["Pizza", "Hamburguesa", "Asado", "Papas fritas"],
      tipo: "radio", // Tipo de opción (radio o checkbox)
    },
    {
      id: 5,
      pregunta: "¿Cuál es tu estación del año favorita?",
      opciones: ["Otoño", "Invierno", "Primavera", "Verano"],
      tipo: "radio", // Tipo de opción (radio o checkbox)
    },
    {
      id: 6,
      pregunta: "¿Cuáles de estas actividades te gusta o gustaria hacer?",
      opciones: ["Nadar", "Correr", "Ciclismo", "Leer"],
      tipo: "checkbox", // Tipo de opción (radio o checkbox)
    },
    {
      id: 7,
      pregunta: "¿Te gusta la programación?",
      opciones: ["Si", "No"],
      tipo: "radio", // Tipo de opción (radio o checkbox)
    },
    {
      id: 8,
      pregunta: "¿La pizza con o sin ananá?",
      opciones: ["Con ananá", "Sin ananá"],
      tipo: "radio", // Tipo de opción (radio o checkbox)
    },
  ];

  return (
    <div className="App">
      <h1  className="title">Gustos y preferencias</h1>
      {/* Contenido de las páginas */}
      <Encuestas encuestas={encuestas} />
    </div>
  );
}

export default App;
