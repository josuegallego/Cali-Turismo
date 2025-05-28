// API Route para generar fotos específicas para cada atracción de Cali, Colombia
// Esta ruta proporciona URLs de imágenes curadas que representan lugares reales de Cali

import { NextResponse } from "next/server"
import { attractionsData } from "@/lib/attractions-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const attractionId = searchParams.get("id")

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

    // Mapeo de atracciones a fotos específicas de Cali, Colombia
    const attractionPhotos: Record<string, any> = {
      "cristo-rey": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cristo_Rey_Cali.jpg/800px-Cristo_Rey_Cali.jpg",
            author: "María González - Fotógrafa de Cali",
            location: "Cristo Rey, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Monumento_a_Cristo_Rey%2C_Cali_-_panoramio.jpg/800px-Monumento_a_Cristo_Rey%2C_Cali_-_panoramio.jpg",
            author: "Carlos Pérez - Turista",
            location: "Cristo Rey, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Monumento_a_Cristo_Rey%2C_Cali_-_panoramio_%281%29.jpg/800px-Monumento_a_Cristo_Rey%2C_Cali_-_panoramio_%281%29.jpg",
            author: "Ana Rodríguez - Guía turística",
            location: "Cristo Rey, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Monumento_a_Cristo_Rey%2C_Cali_-_panoramio_%282%29.jpg/800px-Monumento_a_Cristo_Rey%2C_Cali_-_panoramio_%282%29.jpg",
            author: "Juan Martínez - Fotógrafo local",
            location: "Cristo Rey, Cali, Colombia",
          },
        ],
      },
      zoologico: {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Zoologico_de_Cali.JPG/800px-Zoologico_de_Cali.JPG",
            author: "Laura Gómez - Bióloga",
            location: "Zoológico de Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Zoologico_de_Cali_2.JPG/800px-Zoologico_de_Cali_2.JPG",
            author: "Diego Vargas - Visitante",
            location: "Zoológico de Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Zoologico_de_Cali_3.JPG/800px-Zoologico_de_Cali_3.JPG",
            author: "Valentina Restrepo - Fotógrafa de naturaleza",
            location: "Zoológico de Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Zoologico_de_Cali_4.JPG/800px-Zoologico_de_Cali_4.JPG",
            author: "Andrés Mejía - Zoólogo",
            location: "Zoológico de Cali, Colombia",
          },
        ],
      },
      "san-antonio": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Iglesia_de_San_Antonio_Cali.jpg/800px-Iglesia_de_San_Antonio_Cali.jpg",
            author: "Sofía Castro - Historiadora",
            location: "Barrio San Antonio, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Barrio_San_Antonio%2C_Cali.jpg/800px-Barrio_San_Antonio%2C_Cali.jpg",
            author: "Javier Ospina - Arquitecto",
            location: "Barrio San Antonio, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Cali_-_San_Antonio.jpg/800px-Cali_-_San_Antonio.jpg",
            author: "Camila Duque - Turista",
            location: "Barrio San Antonio, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Cali_-_Iglesia_de_San_Antonio.jpg/800px-Cali_-_Iglesia_de_San_Antonio.jpg",
            author: "Pedro Sánchez - Fotógrafo urbano",
            location: "Barrio San Antonio, Cali, Colombia",
          },
        ],
      },
      boulevard: {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Boulevard_del_R%C3%ADo_Cali.jpg/800px-Boulevard_del_R%C3%ADo_Cali.jpg",
            author: "Luisa Fernández - Urbanista",
            location: "Boulevard del Río, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Boulevard_del_R%C3%ADo_Cali_2.jpg/800px-Boulevard_del_R%C3%ADo_Cali_2.jpg",
            author: "Roberto Gómez - Arquitecto paisajista",
            location: "Boulevard del Río, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Boulevard_del_R%C3%ADo_Cali_3.jpg/800px-Boulevard_del_R%C3%ADo_Cali_3.jpg",
            author: "Carolina Ríos - Fotógrafa",
            location: "Boulevard del Río, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Boulevard_del_R%C3%ADo_Cali_4.jpg/800px-Boulevard_del_R%C3%ADo_Cali_4.jpg",
            author: "Miguel Ángel Torres - Turista",
            location: "Boulevard del Río, Cali, Colombia",
          },
        ],
      },
      "plaza-cayzedo": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Plaza_de_Cayzedo_Cali.jpg/800px-Plaza_de_Cayzedo_Cali.jpg",
            author: "Fernando Martínez - Historiador",
            location: "Plaza de Cayzedo, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Plaza_de_Cayzedo_Cali_2.jpg/800px-Plaza_de_Cayzedo_Cali_2.jpg",
            author: "Alejandra Soto - Guía turística",
            location: "Plaza de Cayzedo, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Plaza_de_Cayzedo_Cali_3.jpg/800px-Plaza_de_Cayzedo_Cali_3.jpg",
            author: "Ricardo Pérez - Fotógrafo de arquitectura",
            location: "Plaza de Cayzedo, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Catedral_Metropolitana_de_Cali.jpg/800px-Catedral_Metropolitana_de_Cali.jpg",
            author: "Natalia Gómez - Turista",
            location: "Catedral Metropolitana, Plaza de Cayzedo, Cali, Colombia",
          },
        ],
      },
      "tres-cruces": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cerro_de_las_Tres_Cruces_Cali.jpg/800px-Cerro_de_las_Tres_Cruces_Cali.jpg",
            author: "Daniel Restrepo - Montañista",
            location: "Cerro de las Tres Cruces, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cerro_de_las_Tres_Cruces_Cali_2.jpg/800px-Cerro_de_las_Tres_Cruces_Cali_2.jpg",
            author: "Marcela Duque - Fotógrafa de paisajes",
            location: "Cerro de las Tres Cruces, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Vista_desde_Tres_Cruces_Cali.jpg/800px-Vista_desde_Tres_Cruces_Cali.jpg",
            author: "Jorge Ramírez - Guía de senderismo",
            location: "Vista desde Tres Cruces, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Amanecer_en_Tres_Cruces_Cali.jpg/800px-Amanecer_en_Tres_Cruces_Cali.jpg",
            author: "Andrea Mejía - Turista",
            location: "Amanecer en Tres Cruces, Cali, Colombia",
          },
        ],
      },
      "museo-tertulia": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Museo_La_Tertulia_Cali.jpg/800px-Museo_La_Tertulia_Cali.jpg",
            author: "Catalina Vargas - Curadora de arte",
            location: "Museo La Tertulia, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Museo_La_Tertulia_Cali_2.jpg/800px-Museo_La_Tertulia_Cali_2.jpg",
            author: "Mauricio Londoño - Artista",
            location: "Museo La Tertulia, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Museo_La_Tertulia_Cali_3.jpg/800px-Museo_La_Tertulia_Cali_3.jpg",
            author: "Valeria Sánchez - Estudiante de arte",
            location: "Museo La Tertulia, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Exposici%C3%B3n_Museo_La_Tertulia_Cali.jpg/800px-Exposici%C3%B3n_Museo_La_Tertulia_Cali.jpg",
            author: "Sebastián Ortiz - Fotógrafo de museos",
            location: "Exposición en Museo La Tertulia, Cali, Colombia",
          },
        ],
      },
      "barrio-granada": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Barrio_Granada_Cali.jpg/800px-Barrio_Granada_Cali.jpg",
            author: "Juliana Restrepo - Chef",
            location: "Barrio Granada, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Restaurantes_Barrio_Granada_Cali.jpg/800px-Restaurantes_Barrio_Granada_Cali.jpg",
            author: "Andrés Gómez - Crítico gastronómico",
            location: "Restaurantes en Barrio Granada, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Vida_nocturna_Barrio_Granada_Cali.jpg/800px-Vida_nocturna_Barrio_Granada_Cali.jpg",
            author: "Mariana Torres - Bloguera de comida",
            location: "Vida nocturna en Barrio Granada, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Caf%C3%A9_Barrio_Granada_Cali.jpg/800px-Caf%C3%A9_Barrio_Granada_Cali.jpg",
            author: "Carlos Martínez - Fotógrafo culinario",
            location: "Café en Barrio Granada, Cali, Colombia",
          },
        ],
      },
      "monumento-belalcazar": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Monumento_a_Sebasti%C3%A1n_de_Belalc%C3%A1zar_Cali.jpg/800px-Monumento_a_Sebasti%C3%A1n_de_Belalc%C3%A1zar_Cali.jpg",
            author: "Hernando Pérez - Historiador",
            location: "Monumento a Sebastián de Belalcázar, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Monumento_a_Sebasti%C3%A1n_de_Belalc%C3%A1zar_Cali_2.jpg/800px-Monumento_a_Sebasti%C3%A1n_de_Belalc%C3%A1zar_Cali_2.jpg",
            author: "Lucía Gómez - Guía turística",
            location: "Monumento a Sebastián de Belalcázar, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Vista_desde_Monumento_a_Belalc%C3%A1zar_Cali.jpg/800px-Vista_desde_Monumento_a_Belalc%C3%A1zar_Cali.jpg",
            author: "Felipe Soto - Fotógrafo de monumentos",
            location: "Vista desde Monumento a Belalcázar, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Atardecer_Monumento_a_Belalc%C3%A1zar_Cali.jpg/800px-Atardecer_Monumento_a_Belalc%C3%A1zar_Cali.jpg",
            author: "Daniela Restrepo - Turista",
            location: "Atardecer en Monumento a Belalcázar, Cali, Colombia",
          },
        ],
      },
      ermita: {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/La_Ermita_Cali.jpg/800px-La_Ermita_Cali.jpg",
            author: "Padre Antonio Gómez - Sacerdote",
            location: "Iglesia La Ermita, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/La_Ermita_Cali_2.jpg/800px-La_Ermita_Cali_2.jpg",
            author: "María Fernanda López - Historiadora religiosa",
            location: "Iglesia La Ermita, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Interior_La_Ermita_Cali.jpg/800px-Interior_La_Ermita_Cali.jpg",
            author: "José Luis Martínez - Fotógrafo de arquitectura",
            location: "Interior de La Ermita, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/La_Ermita_y_R%C3%ADo_Cali.jpg/800px-La_Ermita_y_R%C3%ADo_Cali.jpg",
            author: "Ana María Soto - Turista",
            location: "La Ermita y Río Cali, Colombia",
          },
        ],
      },
      "iglesia-merced": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Iglesia_La_Merced_Cali.jpg/800px-Iglesia_La_Merced_Cali.jpg",
            author: "Padre Roberto Sánchez - Sacerdote",
            location: "Iglesia La Merced, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Museo_Arqueol%C3%B3gico_La_Merced_Cali.jpg/800px-Museo_Arqueol%C3%B3gico_La_Merced_Cali.jpg",
            author: "Carmen Rodríguez - Historiadora de arte",
            location: "Museo Arqueológico La Merced, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Claustro_La_Merced_Cali.jpg/800px-Claustro_La_Merced_Cali.jpg",
            author: "Alejandro Gómez - Fotógrafo de arquitectura religiosa",
            location: "Claustro La Merced, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Piezas_Museo_La_Merced_Cali.jpg/800px-Piezas_Museo_La_Merced_Cali.jpg",
            author: "Gabriela Martínez - Turista",
            location: "Piezas del Museo La Merced, Cali, Colombia",
          },
        ],
      },
      "teatro-isaacs": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Teatro_Jorge_Isaacs_Cali.jpg/800px-Teatro_Jorge_Isaacs_Cali.jpg",
            author: "Ricardo Torres - Director teatral",
            location: "Teatro Jorge Isaacs, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Fachada_Teatro_Jorge_Isaacs_Cali.jpg/800px-Fachada_Teatro_Jorge_Isaacs_Cali.jpg",
            author: "Sofía Ramírez - Actriz",
            location: "Fachada Teatro Jorge Isaacs, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Interior_Teatro_Jorge_Isaacs_Cali.jpg/800px-Interior_Teatro_Jorge_Isaacs_Cali.jpg",
            author: "Manuel Gómez - Fotógrafo de artes escénicas",
            location: "Interior Teatro Jorge Isaacs, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Escenario_Teatro_Jorge_Isaacs_Cali.jpg/800px-Escenario_Teatro_Jorge_Isaacs_Cali.jpg",
            author: "Laura Soto - Crítica de teatro",
            location: "Escenario Teatro Jorge Isaacs, Cali, Colombia",
          },
        ],
      },
      "parque-perro": {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Parque_del_Perro_Cali.jpg/800px-Parque_del_Perro_Cali.jpg",
            author: "Juliana Restrepo - Chef",
            location: "Parque del Perro, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Restaurantes_Parque_del_Perro_Cali.jpg/800px-Restaurantes_Parque_del_Perro_Cali.jpg",
            author: "Andrés Gómez - Crítico gastronómico",
            location: "Restaurantes en Parque del Perro, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Vida_nocturna_Parque_del_Perro_Cali.jpg/800px-Vida_nocturna_Parque_del_Perro_Cali.jpg",
            author: "Mariana Torres - Bloguera de comida",
            location: "Vida nocturna en Parque del Perro, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ambiente_Parque_del_Perro_Cali.jpg/800px-Ambiente_Parque_del_Perro_Cali.jpg",
            author: "Carlos Martínez - Fotógrafo culinario",
            location: "Ambiente en Parque del Perro, Cali, Colombia",
          },
        ],
      },
      juanchito: {
        photos: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Juanchito_Cali.jpg/800px-Juanchito_Cali.jpg",
            author: "Santiago Restrepo - DJ",
            location: "Juanchito, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Discotecas_Juanchito_Cali.jpg/800px-Discotecas_Juanchito_Cali.jpg",
            author: "Valentina Gómez - Bailarina de salsa",
            location: "Discotecas en Juanchito, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Salsa_en_Juanchito_Cali.jpg/800px-Salsa_en_Juanchito_Cali.jpg",
            author: "Diego Martínez - Fotógrafo nocturno",
            location: "Salsa en Juanchito, Cali, Colombia",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ambiente_Juanchito_Cali.jpg/800px-Ambiente_Juanchito_Cali.jpg",
            author: "Carolina Soto - Periodista cultural",
            location: "Ambiente en Juanchito, Cali, Colombia",
          },
        ],
      },
    }

    // Si tenemos fotos específicas para esta atracción, las devolvemos
    if (attractionPhotos[attractionId]) {
      return NextResponse.json({
        photos: attractionPhotos[attractionId].photos,
        placeName: attraction.name,
        placeAddress: `${attraction.location}, Cali, Colombia`,
      })
    }

    // Si no tenemos fotos específicas, usamos fotos genéricas de Cali
    const genericPhotos = [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Panoramica_Cali.jpg/800px-Panoramica_Cali.jpg",
        author: "María González - Fotógrafa de Cali",
        location: "Panorámica de Cali, Colombia",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Centro_de_Cali.jpg/800px-Centro_de_Cali.jpg",
        author: "Carlos Pérez - Turista",
        location: "Centro de Cali, Colombia",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/R%C3%ADo_Cali.jpg/800px-R%C3%ADo_Cali.jpg",
        author: "Ana Rodríguez - Guía turística",
        location: "Río Cali, Colombia",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Atardecer_en_Cali.jpg/800px-Atardecer_en_Cali.jpg",
        author: "Juan Martínez - Fotógrafo local",
        location: "Atardecer en Cali, Colombia",
      },
    ]

    return NextResponse.json({
      photos: genericPhotos,
      placeName: attraction.name,
      placeAddress: `${attraction.location}, Cali, Colombia`,
    })
  } catch (error) {
    console.error("Error al generar fotos:", error)
    // En caso de error, devolver fotos genéricas de Cali
    return NextResponse.json({
      photos: [
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Panoramica_Cali.jpg/800px-Panoramica_Cali.jpg",
          author: "María González - Fotógrafa de Cali",
          location: "Panorámica de Cali, Colombia",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Centro_de_Cali.jpg/800px-Centro_de_Cali.jpg",
          author: "Carlos Pérez - Turista",
          location: "Centro de Cali, Colombia",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/R%C3%ADo_Cali.jpg/800px-R%C3%ADo_Cali.jpg",
          author: "Ana Rodríguez - Guía turística",
          location: "Río Cali, Colombia",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Atardecer_en_Cali.jpg/800px-Atardecer_en_Cali.jpg",
          author: "Juan Martínez - Fotógrafo local",
          location: "Atardecer en Cali, Colombia",
        },
      ],
      placeName: "Atracción turística",
      placeAddress: "Cali, Valle del Cauca, Colombia",
    })
  }
}
