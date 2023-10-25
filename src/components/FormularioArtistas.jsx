'use client'
import React, { useState } from 'react';
import { grabarArtista } from '@/libs/conexiones';

const FormularioArtistas = () => {
    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)
    const [banda, setbanda] = useState('')
    const [generoMusical, setgeneroMusical] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const artista = {
            nombre,
            edad,
            banda,
            generoMusical}
        grabarArtista(artista)


        limpiar()
    }

    const limpiar = () => {
      setnombre('');
      setedad(0);
      setbanda('');
      setgeneroMusical('')
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-5 border border-gray-300 p-5 rounded-md '>
            
            {/* {errorFormulario && <div className='bg-red-500 rounded-md font-bold  '> ERROR DEBES LLENAR LOS CAMPOS</div> } */}

            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold'>Nombre</label>
                <input 
                    type="String" 
                    placeholder='Nombre' 
                    className='bg-green-200 p-2 rounded-md ' 
                    value={nombre}
                    onChange={e => setnombre(e.target.value)}
                    
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Edad</label>
                <input 
                    type="number" 
                    placeholder='Edad' 
                    className='bg-green-200 p-2 rounded-md'
                    value={edad}
                    onChange={(e) => setedad(parseInt(e.target.value, 10))}
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Banda</label>
                <input 
                    type="String" 
                    placeholder='Banda' 
                    className='bg-green-200 p-2 rounded-md'
                    value={banda}
                    onChange={e => setbanda(e.target.value)}
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Genero Musical</label>
                <input 
                    type="String" 
                    placeholder='Genero Musical' 
                    className='bg-green-200 p-2 rounded-md'
                    value={generoMusical}
                    onChange={e => setgeneroMusical(e.target.value)}
                    ></input>
            </div>
             
            <div className='flex w-full justify-end '>
                <button 
                    type='submit' 
                    className='bg-green-300 rounded-md p-2 font-semibold hover:bg-red-400 transition-colors duration-300 cursor-pointer'
                    onClick={handleSubmit}
                    >Agregar Artista</button>
            </div>

            <div className='flex w-full justify-end '>
                <input 
                    type='button' 
                    value={'Limpiar'} 
                    className='bg-yellow-300 rounded-md p-2 font-semibold hover:bg-red-400 transition-colors duration-300 cursor-pointer'
                    onClick={limpiar}
                    ></input>
            </div>
        </form>
        
    </div>
  )
}

export default FormularioArtistas