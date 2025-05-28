// API Route para simular fotos de atracciones turísticas
// Esta ruta genera URLs de imágenes relacionadas con cada atracción
// usando servicios de imágenes que permiten CORS

import { NextResponse } from "next/server"
import { attractionsData } from "@/lib/attractions-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const attractionId = searchParams.get("attractionId")

  // Verificar que tenemos el ID de la atracción
  if (!attractionId) {
    return NextResponse.json({ error: "Se requiere el ID de la atracción" }, { status: 400 })
  }

  try {
    // Encontrar la atracción por ID
    const attraction = attractionsData.find((a) => a.id === attractionId)

    if (!attraction) {
      return NextResponse.json({ error: "Atracción no encontrada" }, { status: 404 })
    }

    // Generar fotos simuladas basadas en la atracción
    const photos = generatePhotosForAttraction(attraction)

    return NextResponse.json({
      photos,
      placeName: attraction.name,
      placeAddress: `${attraction.location}, Cali, Colombia`,
    })
  } catch (error) {
    console.error("Error al generar fotos:", error)
    return NextResponse.json({
      photos: [],
      placeName: "Atracción turística",
      placeAddress: "Cali, Valle del Cauca, Colombia",
    })
  }
}

// Función para generar fotos simuladas para cada atracción
function generatePhotosForAttraction(attraction: any) {
  // Mapeo de categorías a semillas para imágenes consistentes
  const categorySeeds: Record<string, number[]> = {
    cultura: [10, 20, 30, 40],
    historia: [50, 60, 70, 80],
    naturaleza: [90, 100, 110, 120],
    gastronomia: [130, 140, 150, 160],
    salsa: [170, 180, 190, 200],
  }

  // Obtener semillas para la categoría de la atracción
  const seeds = categorySeeds[attraction.category] || [210, 220, 230, 240]

  // Autores simulados
  const authors = [
    "María González",
    "Carlos Pérez",
    "Ana Rodríguez",
    "Juan Martínez",
    "Laura Gómez",
    "Diego Vargas",
    "Valentina Restrepo",
    "Andrés Mejía",
  ]

  // Generar 4 fotos con semillas específicas para cada categoría
  return Array.from({ length: 4 }).map((_, index) => {
    const seed = seeds[index % seeds.length]
    const width = 400
    const height = 400
    const author = authors[index % authors.length]

    // Usar Picsum Photos que permite CORS
    return {
      url: `https://picsum.photos/seed/${seed}/${width}/${height}`,
      author: `${author} - Fotógrafo de ${attraction.location}`,
    }
  })
}
