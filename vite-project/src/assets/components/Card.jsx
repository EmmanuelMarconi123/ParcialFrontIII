import React from 'react'

const Card = ({persona}) => {

    const {nombre, apellido} = persona

  return (
    <div>
      <h1>Hola {nombre}, tu apellido es:  {apellido}</h1>
    </div>
  )
}

export default Card
