import { SetStateAction, useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    setMensaje("Bienvenido " + nombre);
  };

  function handleChange(e) {
    setNombre(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <p>{mensaje}</p>
    </>
  );
}
