import { useState } from "react";

export default function Contador() {
  const [cont, setCont] = useState(0);
  function aumentar() {
    setCont(cont + 1);
  }
  function disminuir() {
    setCont(cont - 1);
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{cont}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </>
  );
}
