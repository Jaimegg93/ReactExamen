import { useState } from "react";
import data from "./alumnos.json"; // Asegúrate de que la ruta sea correcta
import "./alumnos.css";

function Lista() {
  const [alumnos] = useState(data.alumnos);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);
  const [media, setMedia] = useState(0); // Inicializa media en 0
  const [orden, setOrden] = useState("nombre"); // Estado para el criterio de ordenamiento
  const [busqueda, setBusqueda] = useState("");

  function handleChange(e) {
    setBusqueda(e.target.value);
  }

  function handleClick(alumno) {
    if (alumno == alumnoSeleccionado) {
      setAlumnoSeleccionado();
    } else {
      setAlumnoSeleccionado(alumno);
    }
    hacerMedia(alumno); // Llama a hacerMedia al seleccionar un alumno
  }

  function hacerMedia(alumno) {
    let suma = 0;
    const cantidadAsignaturas = Object.entries(alumno.asignaturas).length;

    Object.entries(alumno.asignaturas).forEach(([asignatura, detalles]) => {
      suma += detalles.promedio; // Suma los promedios
    });

    const mediaCalculada =
      cantidadAsignaturas > 0 ? suma / cantidadAsignaturas : 0;
    setMedia(mediaCalculada); // Actualiza el estado de media
  }

  // Función para ordenar alumnos
  const ordenarAlumnos = (criterio) => {
    setOrden(criterio);
  };

  const obtenerAlumnosOrdenados = () => {
    return [...alumnos].sort((a, b) => {
      if (orden === "nombre") {
        return a.nombre.localeCompare(b.nombre); // Ordena por nombre
      } else if (orden === "promedio") {
        // Calcular el promedio manualmente
        const promedioA =
          (a.asignaturas["Acceso a datos"].promedio +
            a.asignaturas["Programación"].promedio +
            a.asignaturas["Desarrollo de Interfaces"].promedio) /
          3;

        const promedioB =
          (b.asignaturas["Acceso a datos"].promedio +
            b.asignaturas["Programación"].promedio +
            b.asignaturas["Desarrollo de Interfaces"].promedio) /
          3;

        return promedioB - promedioA; // Ordena por promedio
      }
      return 0; // Sin orden
    });
  };

  const obtenerAlumnosFiltrados = () => {
    return obtenerAlumnosOrdenados().filter((alumno) => {
      // Filtrar por nombre
      const nombreCoincide = alumno.nombre.toLowerCase().includes(busqueda);

      return nombreCoincide; // Retorna true si coincide en nombre o asignaturas
    });
  };

  /*
  // Función que retorna los alumnos ordenados según el criterio
  const obtenerAlumnosOrdenados = () => {
    return [...alumnos].sort((a, b) => {
      if (orden === "nombre") {
        return a.nombre.localeCompare(b.nombre); // Ordena por nombre
      } else if (orden === "promedio") {
        const promedioA =
          Object.values(a.asignaturas).reduce(
            (sum, asignatura) => sum + asignatura.promedio,
            0
          ) / Object.keys(a.asignaturas).length;
        const promedioB =
          Object.values(b.asignaturas).reduce(
            (sum, asignatura) => sum + asignatura.promedio,
            0
          ) / Object.keys(b.asignaturas).length;
        return promedioB - promedioA; // Ordena por promedio
      }
      return 0; // Sin orden
    });
  };
*/ return (
    <div className="container">
      <h2>Lista de Alumnos</h2>
      <label>
        <input
          className="input-group mb-3"
          onChange={handleChange}
          type="text"
          placeholder="Buscador"
        />
      </label>
      <div>
        <button onClick={() => ordenarAlumnos("nombre")} className="btn btn-primary">
          Ordenar por Nombre
        </button>
        <button onClick={() => ordenarAlumnos("promedio")} className="btn btn-primary">
          Ordenar por Promedio
        </button>
      </div>
      <ul className="student-list">
        {obtenerAlumnosFiltrados().map((alumno, index) => (
          <li key={index} className="student-item">
            <div onClick={() => handleClick(alumno)}>
              <strong>{alumno.nombre}</strong>
            </div>
            {alumnoSeleccionado &&
              alumnoSeleccionado.nombre === alumno.nombre && (
                <div
                  className="student-detail active"
                  onClick={() => handleClick(alumno)}
                >
                  <h4>Detalles de {alumno.nombre}</h4>
                  <p>Media del curso: {media}</p>
                  <ul className="student-list">
                    {Object.entries(alumno.asignaturas).map(
                      ([asignatura, detalles]) => (
                        <li key={asignatura} className="student-item">
                          <strong>{asignatura}</strong>:
                          {` Primera Evaluación: ${detalles.primera_evaluacion}, Segunda Evaluación: ${detalles.segunda_evaluacion}, Tercera Evaluación: ${detalles.tercera_evaluacion}, Promedio: ${detalles.promedio}`}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
