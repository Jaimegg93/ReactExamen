import { useState } from "react";

export default function Lista() {
  const [lista, setLista] = useState([
    { id: 1, text: "  estudiar", checked: false },
    { id: 2, text: "  comer", checked: false },
    { id: 3, text: "  correr", checked: false },
  ]);

  const handleClick = (id) => {
    if (lista.some((lista) => lista.id === id)) {
      setLista(
        lista.map((lista) =>
          lista.id == id
            ? { ...lista, checked: false }
            : { ...lista, checked: true }
        )
      );
    }
  };

  return (
    <>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              onClick={() => handleClick(lista[0].id)}
            ></input>
            {lista[0].text}
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              onClick={() => handleClick(lista[1].id)}
            ></input>
            {lista[1].text}
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              onClick={() => handleClick(lista[2].id)}
            ></input>
            {lista[2].text}
          </label>
        </li>
      </ul>
    </>
  );
}
