"use server"

import { attractionsData } from "./attractions-data"

// Acción del servidor para obtener fotos para una atracción específica
export async function fetchGooglePhotos(attractionId: string) {
  try {
    // Encontrar la atracción por ID
    const attraction = attractionsData.find((a) => a.id === attractionId)

    if (!attraction) {
      throw new Error(`Atracción con ID ${attractionId} no encontrada`)
    }

    // Llamar a nuestra API interna que genera fotos específicas para cada atracción
    const response = await fetch(`/api/attraction-photos?id=${attractionId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Error al obtener fotos")
    }

    const data = await response.json()

    // Si no hay fotos, devolver un array vacío
    if (!data.photos || data.photos.length === 0) {
      return {
        photos: [],
        placeName: data.placeName || attraction.name,
        placeAddress: data.placeAddress || attraction.location,
      }
    }

    return {
      photos: data.photos,
      placeName: data.placeName || attraction.name,
      placeAddress: data.placeAddress || attraction.location,
    }
  } catch (error) {
    console.error("Error en fetchGooglePhotos:", error)
    // En caso de error, devolver un objeto con arrays vacíos
    return {
      photos: [],
      placeName: "",
      placeAddress: "",
    }
  }
}
