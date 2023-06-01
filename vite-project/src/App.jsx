import { useState } from 'react'

import './App.css'
import Card from './assets/components/Card'
import Formulario from './assets/components/Formulario'


function App() {
  
  const [nombre,setNombre] = useState('')
  const [color,setColor] = useState('')
  const [ver,setVer] = useState(false)
  const [error,setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre.length >= 3 && nombre.trim(nombre) == nombre  && color.length >= 6) {
      
      setVer(true)
      setError(false)
    }else{
      setVer(false)
      setError(true)
      setError('verifica que la información cargada sea correcta')
      
    }
  }
  return (
    <>
      <Formulario handleSubmit={handleSubmit}  setNombre={setNombre} setColor={setColor}/>
      {ver &&< Card nombre={nombre} color={color} error={error} /> }
      {error && <h3>{error}</h3>}
    </>
  )
}
export default App