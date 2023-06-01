/* eslint-disable react/prop-types */


const Formulario = ({setNombre,setColor,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <label> Nombre: </label>
        <input className='input' type="text" onChange={(e)=> setNombre(e.target.value)}/>
        <label >Coloca tu color Favorito </label>
        <input className='input' type="text" onChange={(e)=> setColor(e.target.value)} />

        <button className="boton">Enviar</button>
    </form>
  )
}

export default Formulario
