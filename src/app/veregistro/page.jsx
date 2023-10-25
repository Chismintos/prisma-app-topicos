import React from 'react'
import { obtenerArtistas } from '@/libs/conexiones'
const VerRegistroPage = async () => {

    const artistas = await obtenerArtistas()
    console.log(artistas);
  return (
    <div>VerRegistroDeArtistas
        {
        artistas.map(artista => {
          <div key={artista.id}>
            <p>{artista.nombre}</p>
          </div>

        })
      }
        
    </div>
  )
}

export default VerRegistroPage