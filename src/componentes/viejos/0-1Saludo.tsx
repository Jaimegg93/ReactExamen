/*Crea el componente Saludo y el componente Despedida donde cada uno devuelva respectivamente  un mensaje de saludo 
y otra de despedida con el nombre del usuario. En el componente App.js añade una constante que inicialmente está a true. 
Este componente devuelve el mensaje de entrada en caso de que la constante esté a true . En caso de que la constante esté a false 
devuelve el mensaje de despedida.

Mi version
*/
import { SetStateAction, useState } from "react";

function Saludo() {
  const [saludo, setSaludo] = useState(true);
  const [nombre, setNombre] = useState("Jaime");

  function handleClick() {
    if (saludo) {
      setSaludo(false);
    } else {
      setSaludo(true);
    }
  }

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setNombre(e.target.value);
  }

  const mensaje = saludo ? "hola " + nombre : "adios " + nombre;
  return (
    <>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Cambio</button>
      <p>{mensaje}</p>
    </>
  );
}
export default Saludo;

/* Version chat gpt

import { useState } from "react";

function Saludo() {
  const [saludo, setSaludo] = useState(true); // Estado para controlar saludo/despedida
  const [nombre, setNombre] = useState("Jaime"); // Estado para almacenar el nombre del usuario

  const mensaje = saludo ? `Hola ${nombre}` : `Adiós ${nombre}`; // Mensaje dinámico

  return (
    <>
      <input 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        placeholder="Escribe tu nombre" 
      />
      <button onClick={() => setSaludo(!saludo)}>Cambiar</button>
      <p>{mensaje}</p>
    </>
  );
}

export default Saludo;

*/
