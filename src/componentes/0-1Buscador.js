import { useState } from "react";

export default function Buscador() {
  const [lista] = useState([
    { id: 1, nombre: "Pepe" },
    { id: 2, nombre: "Jaime" },
    { id: 3, nombre: "Jose" },
    { id: 4, nombre: "pin" },
  ]);

  const width = {
    width: "200px",
  };
  const [busqueda, setBusqueda] = useState("");
  const filtro = lista.filter((lista) =>
    lista.nombre.toLowerCase().includes(busqueda)
  );

  function handleChange(e) {
    setBusqueda(e.target.value);
  }

  return (
    <div className="card" style={width}>
      <label>
        <input
          className="input-group mb-3"
          onChange={handleChange}
          type="text"
          placeholder="Buscador"
        />
      </label>
      <div className="card-body">
        <ul className="list-group">
          {filtro.map((lista) => (
            <li className="list-group-item">{lista.nombre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
