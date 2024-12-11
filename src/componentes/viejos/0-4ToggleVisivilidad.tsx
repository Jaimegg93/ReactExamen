/*Componente Toggle de visibilidad: Crea un componente que muestre y oculte un elemento al hacer clic en un botón.*/

import { useState } from "react";

export default function Toggle() {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <>
      <button onClick={handleClick}>{visible ? "Ocultar" : "mostrar"}</button>
      <h1>{visible ? "Hola jaime" : ""}</h1>
    </>
  );
}
