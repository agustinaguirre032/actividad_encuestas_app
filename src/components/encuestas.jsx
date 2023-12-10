import React, { useState } from "react";
import "./../encuestas.css";

function Encuestas({ encuestas }) {
  // Inicializa respuestas con un objeto que contiene todas las encuestas
  const initialRespuestas = encuestas.reduce((acc, encuesta) => {
    if (encuesta.tipo === "checkbox") {
      acc[encuesta.id] = [];
    } else if (encuesta.tipo === "textbox") {
      acc[encuesta.id] = "";
    } else {
      acc[encuesta.id] = "";
    }
    return acc;
  }, {});
  const [respuestas, setRespuestas] = useState(initialRespuestas);

  const handleRespuestaChange = (encuestaId, respuesta, tipo) => {
    if (tipo === "radio" || tipo === "textbox") {
      setRespuestas({
        ...respuestas,
        [encuestaId]: respuesta,
      });
    } else if (tipo === "checkbox") {
      const respuestasAnteriores = respuestas[encuestaId] || [];
      const nuevasRespuestas = respuestasAnteriores.includes(respuesta)
        ? respuestasAnteriores.filter((item) => item !== respuesta)
        : [...respuestasAnteriores, respuesta];
      setRespuestas({
        ...respuestas,
        [encuestaId]: nuevasRespuestas,
      });
    }
  };

  return (
    <div>
      <form className="formulario">
        {encuestas.map((encuesta) => (
          <div key={encuesta.id} className="pregunta">
            <strong>{encuesta.pregunta}</strong>
            {encuesta.tipo === "textbox" ? (
              <div>
                <input
                  type="text"
                  name={`encuesta_${encuesta.id}`}
                  value={respuestas[encuesta.id] || ""}
                  onChange={(e) =>
                    handleRespuestaChange(encuesta.id, e.target.value, encuesta.tipo)
                  }
                />
              </div>
            ) : (
              encuesta.opciones.map((opcion) => (
                <div key={opcion}>
                  {encuesta.tipo === "radio" ? (
                    <label>
                      <input
                        type="radio"
                        name={`encuesta_${encuesta.id}`}
                        value={opcion}
                        checked={respuestas[encuesta.id] === opcion}
                        onChange={() =>
                          handleRespuestaChange(encuesta.id, opcion, encuesta.tipo)
                        }
                      />
                      {opcion}
                    </label>
                  ) : (
                    <label>
                      <input
                        type="checkbox"
                        name={`encuesta_${encuesta.id}`}
                        value={opcion}
                        checked={respuestas[encuesta.id]?.includes(opcion)}
                        onChange={() =>
                          handleRespuestaChange(encuesta.id, opcion, encuesta.tipo)
                        }
                      />
                      {opcion}
                    </label>
                  )}
                  {opcion === encuesta.opciones[encuesta.opciones.length - 1] ? <br /> : null}
                </div>
              ))
            )}
          </div>
        ))}
      </form>
      <button onClick={() => console.log(respuestas)}>Enviar respuestas</button>
    </div>
  );
}

export default Encuestas;
