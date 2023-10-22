import { NextResponse } from "next/server";

export function GET(request, {params:{id}}){
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