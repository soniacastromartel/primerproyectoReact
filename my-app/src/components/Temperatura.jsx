import React, {useState} from 'react'

export const Temperatura = () => {
    const [temperatura, setTemperatura] = useState(19)
    const Subir = () =>{
        setTemperatura(temperatura + 1)
    }

    const Bajar = () =>{
        setTemperatura(temperatura - 1)
    }

    return (
        <div>
            <h2>La temperatura es: {temperatura} </h2>
            <p>
                {
                    temperatura >21 ? 'Hace calor' : 'Hace fresco'
                }
            </p>
            <button onClick= {Subir}> Aumentar Temperatura</button>
            <button onClick= {Bajar}> Reducir Temperatura</button>

        </div>
    )
}
