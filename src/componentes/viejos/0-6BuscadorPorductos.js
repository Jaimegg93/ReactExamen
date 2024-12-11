import { useState } from "react";

export default function Buscador() {
  const [lista] = useState([
    { id: 1, nombre: "Laptop" },
    { id: 2, nombre: "Smartphone" },
    { id: 3, nombre: "Auriculares" },
    { id: 4, nombre: "Monitor" },
    { id: 5, nombre: "Teclado" },
  ]);

  const [busqueda, setBusqueda] = useState("");

  const filtro = lista.filter((lista) => {
    return lista.nombre.toLowerCase().includes(busqueda.toLowerCase());
  });

  function handleChange(e) {
    setBusqueda(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        disabled={false}
        placeholder="Busca un producto"
        onChange={handleChange}
      />
      <ul>
        {filtro.map((lista) => (
          <li key={lista.id}>{lista.nombre}</li>
        ))}
      </ul>
    </>
  );
}
