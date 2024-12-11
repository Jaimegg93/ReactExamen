import { SetStateAction, useState } from "react";

export default function BotonInput() {
  const [cont, setCont] = useState(21);
  const [nombre, setNombre] = useState("Jaime");

  function handleClick() {
    setCont(cont + 1);
  }

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    //funciona sin poner todo eso
    setNombre(e.target.value);
  }

  return (
    <>
      <input value={nombre} onChange={handleChange} />
      <p>
        {nombre} tiene {cont} años
      </p>
      <button onClick={handleClick}>aumentar edad</button>
    </>
  );
}
