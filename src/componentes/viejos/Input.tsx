import { SetStateAction, useState } from "react";

export default function Input() {
  const [escrito, setEscrito] = useState("Eseee");

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    //funciona sin poner todo eso
    setEscrito(e.target.value);
  }

  return (
    <>
      <input value={escrito} onChange={handleChange} />
      <h1>Has escrito: {escrito}</h1>
      <button onClick={() => setEscrito("Eseee")}>Resetear</button>
    </>
  );
}
