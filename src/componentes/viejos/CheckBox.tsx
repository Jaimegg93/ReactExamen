import { useState } from "react";

export default function CheckBox() {
  const [check, setCheck] = useState(false);

  function handleClick(e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) {
    //funciona sin poner todo eso
    setCheck(e.target.checked);
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={check} onChange={handleClick}></input>
        Me gusta
      </label>
      <p>Esto {check ? "me gusta" : "no me gusta"}</p>
    </>
  );
}
