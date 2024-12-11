import { useState } from "react";
import data from "./alumnos.json"; // Asegúrate de que la ruta sea correcta
import "./alumnos.css";

function Lista() {
  const [alumnos] = useState(data.alumnos);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState();
  const [media, setMedia] = useState(0);

  function handleClick(alumno) {
    if (alumno == alumnoSeleccionado) {
      setAlumnoSeleccionado();
    } else {
      setAlumnoSeleccionado(alumno);
    }
    hacerMedia(alumno);
  }

  function hacerMedia(alumno) {
    let suma = 0;
    suma += alumno.asignaturas["Acceso a datos"].promedio;
    suma += alumno.asignaturas["Programación"].promedio;
    suma += alumno.asignaturas["Desarrollo de Interfaces"].promedio;
    setMedia(suma / 3);
  }

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Lista de alumnos</h1>
        <ul className="student-list">
          {alumnos.map((alumno, index) => (
            <li
              key={index}
              className="student-item"
              onClick={() => handleClick(alumno)}
            >
              {alumno.nombre}
              {alumnoSeleccionado && alumnoSeleccionado == alumno && (
                <div>
                  <h3>Asignaturas</h3>
                  <p>Media general: {media.toFixed(2)}</p>
                  <p>
                    Acceso a datos Primera_evaluacion:{" "}
                    {alumno.asignaturas["Acceso a datos"].primera_evaluacion}{" "}
                    Segunda_evaluacion:{" "}
                    {alumno.asignaturas["Acceso a datos"].segunda_evaluacion}{" "}
                    Tercera_evaluacion:{" "}
                    {alumno.asignaturas["Acceso a datos"].tercera_evaluacion}{" "}
                    Promedio: {alumno.asignaturas["Acceso a datos"].promedio}{" "}
                  </p>
                  <p>
                    {" "}
                    Programación Primera_evaluacion:{" "}
                    {alumno.asignaturas["Programación"].primera_evaluacion}{" "}
                    Segunda_evaluacion:{" "}
                    {alumno.asignaturas["Programación"].segunda_evaluacion}{" "}
                    Tercera_evaluacion:{" "}
                    {alumno.asignaturas["Programación"].tercera_evaluacion}{" "}
                    Promedio: {alumno.asignaturas["Programación"].promedio}{" "}
                  </p>
                  <p>
                    {" "}
                    Desarrollo de Interfaces Primera_evaluacion:{" "}
                    {
                      alumno.asignaturas["Desarrollo de Interfaces"]
                        .primera_evaluacion
                    }{" "}
                    Segunda_evaluacion:{" "}
                    {
                      alumno.asignaturas["Desarrollo de Interfaces"]
                        .segunda_evaluacion
                    }{" "}
                    Tercera_evaluacion:{" "}
                    {
                      alumno.asignaturas["Desarrollo de Interfaces"]
                        .tercera_evaluacion
                    }{" "}
                    Promedio:{" "}
                    {alumno.asignaturas["Desarrollo de Interfaces"].promedio}{" "}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Lista;
