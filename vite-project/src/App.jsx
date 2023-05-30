import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'
import Form from './assets/components/Form'

function App() {
  
  let persona = {
    nombre: 'pepito',
    apellido:'Marconi',
    edad: 34
  }

  return (
    <>
      <Card persona={persona}/>
      <Form/>

    </>
  )
}

export default App
