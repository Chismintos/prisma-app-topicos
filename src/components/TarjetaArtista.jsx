'use client'
import React from 'react';
import { useArtistaContext } from '@/provider/artistaProvider';
import { useRouter } from 'next/navigation';
import { eliminarArtista } from '@/libs/conexiones';

const TarjetaArtista = ({ artista }) => {
  const route = useRouter()
  const {setArtista} = useArtistaContext()

  const handleEliminar = async (id) => {
    try {
      const respuesta = await eliminarArtista(id);
      console.log(respuesta);
    } catch (error) {
      console.error('Error al eliminar el artista:', error);
    }
  };

  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-4">
      <div className="flex w-full items-center">
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{artista.nombre}</h2>
          <p className="text-gray-600">{artista.edad}</p>
          <p className="text-gray-600">{artista.banda}</p>
          <p className="text-gray-600">{artista.generoMusical}</p>
        </div>
      </div>
      <div className='flex justify-end gap-x-3'>
      <button
          type="button"
          className="bg-green-300 rounded-md p-2 font-semibold text-xs hover-bg-red-400 transition-colors duration-300 cursor-pointer"
          onClick={() => handleEliminar(artista.id)}
        >
          Eliminar
        </button>
        <button
          className='bg-green-300 rounded-md p-2 font-semibold text-xs hover-bg-red-400 transition-colors duration-300 cursor-pointer'
          onClick={()=> {
            setArtista(artista)
            route.push('/registro')
          }}

        >Editar</button>
      </div>
    </div>
  );
};

export default TarjetaArtista;