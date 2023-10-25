import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

//End point for a sigle artist 
//
export async function GET(request, {params:{id}}){
    const artista = await prisma.artista.findFirst({
        where:{
            id:Number(id)
        }

    })
    
    return NextResponse.json({
        mensaje:`Obteniendo un solo artista ${id}`
    })
}

export function DELETE(request, {params:{id}}){
    return NextResponse.json({
        mensaje:`Eliminando al artista ${id}`
    })
}

export function PUT(request, {params:{id}}){
    return NextResponse.json({
        mensaje:`Actualizando al artista ${id}`
    })
}