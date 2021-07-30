import React from 'react'

export const Formulario = () => {
    return (
        <div className='container'>
            <form className='form-group'>
                <input placeholder= 'Introduzca el nombre' className='form-control mb-3' type="text" />
                <input placeholder= 'Introduzca la edad' className='form-control  mb-3' type="text" />
                <input className="btn btn-info btn-lg w-100 mb-3" type="submit" />
            </form>
            
        </div>
    )
}
