import { useState } from "react";
import React from "react";
import jsonAlumnos from "./alumnos.json"

function ListadoAlumnos() {

    const [alumnos] = useState(jsonAlumnos.alumnos);
    const [alumnoSeleccionado, setAlumnoSeleccionado] = useState()

    function handleClick(alumno) {
        if (alumno == alumnoSeleccionado) {
            setAlumnoSeleccionado()
        } else {
            setAlumnoSeleccionado(alumno)
        }
    }
    return (
        <div>
            <ul>
                {alumnos.map((alumno, index) => (
                    <div>
                        <div key={index} onClick={() => handleClick(alumno)}>{alumno.nombre} </div>

                        {alumnoSeleccionado && (
                            <div>
                                <p>Asignaturas</p>
                                {Object.entries(alumnoSeleccionado.asignaturas).map(([nombreAsignatura, detalles], index) => (
                                    <li key={index}>
                                        <h3>{nombreAsignatura}</h3>
                                        <p>Primera Evaluación: {detalles.primera_evaluacion}</p>
                                        <p>Segunda Evaluación: {detalles.segunda_evaluacion}</p>
                                        <p>Tercera Evaluación: {detalles.tercera_evaluacion}</p>
                                        <p>Promedio: {detalles.promedio}</p>
                                    </li>
                                ))}
                            </div>

                        )}
                    </div>
                ))}



            </ul>
        </div>
    );
}
export default ListadoAlumnos;