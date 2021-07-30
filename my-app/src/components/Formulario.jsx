import React, { useState } from "react";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const validar = (event) => {
      event.preventDefault()
      console.log('pulsado');
      if(!nombre.trim()){
          console.log('nombre vacío');
          return
      }
      if(!edad.trim()){
        console.log('edad vacía');
        return
    }
  }

  return (
    <div className="container">
      <form onSubmit ={validar} className="form-group">
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
