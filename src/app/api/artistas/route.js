import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

//Creando EndPoint GET

//http://localhost:3000/api/artistas

//return all artists
export async function GET(){

    const artistas = await prisma.artista.findMany();

    return NextResponse.json(artistas)
}


//Create new artists
export async function POST(request){
    const {nombre, edad, banda, generoMusical} = await request.json()

    const nuevoArtista = await prisma.artista.create({ 
        data: {
            nombre: nombre,
            edad: edad,
            banda: banda,
            generoMusical: generoMusical
        }
    })

    return NextResponse.json(nuevoArtista)
}