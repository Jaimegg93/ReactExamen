import { useState } from "react";

function boton() {
  const [boton, setBoton] = useState(0);

  function handleClick() {
    setBoton(boton + 1);
  }

  return (
    <div>
      <h1>Presiona el contador</h1>
      <button onClick={handleClick}>{boton}</button>
    </div>
  );
}
export default boton;
