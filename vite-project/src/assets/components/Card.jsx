/* eslint-disable react/prop-types */


const Card = ({nombre , color}) => {

  console.log(nombre, color);

  return (
    <div>              
        
        <h1> Hola {nombre}, tu color favorito es: {color}</h1>   

    </div>
  )
}

export default Card