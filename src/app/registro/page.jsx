'use client'
import React from 'react'
import FormularioArtistas from '@/components/FormularioArtistas'
import { useState } from 'react'

const RegistroPage = () => {
  const [artista, setArtista] = useState({})
  return (
    <div>
        <h1 className="font-bold text-3xl mt-8" >Registro de cantante</h1>
        <FormularioArtistas 
          setArtista={setArtista}
          artista={artista}
        />
    </div>
  )
}

export default RegistroPage