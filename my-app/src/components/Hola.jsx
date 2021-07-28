import React, { Fragment } from "react";

function Hola() {
  let componente = "en React"; //Jsx intercalación de Javascript con elementos HTML
  return (
    <Fragment>
      <h2>Primer Componente {componente}</h2>
      <p>Otro texto</p>
    </Fragment>
  );
}
export default Hola;
