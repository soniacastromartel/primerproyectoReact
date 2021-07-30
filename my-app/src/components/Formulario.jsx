import React, { useState } from "react";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  return (
    <div className="container">
      <form className="form-group">
        <input
          placeholder="Introduzca el nombre"
          className="form-control mb-3"
          type="text"
          onChange ={(e) => {setNombre(e.target.value) 

          }}
        />
        <input
          placeholder="Introduzca la edad"
          className="form-control  mb-3"
          type="text"
          onChange ={(e) => {setEdad(e.target.value) 

          }}
        />
        <input className="btn btn-info btn-lg w-100 mb-3" type="submit" />
      </form>
    </div>
  );
};
