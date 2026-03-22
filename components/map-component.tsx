"use client"

import { useEffect, useRef } from "react"
import { attractionsData } from "@/lib/attractions-data"
import { useAttractions } from "./attraction-context"

// Definir tipos para las props
interface MapComponentProps {
  attractionParam: string | null
}

export default function MapComponent({ attractionParam }: MapComponentProps) {
  const { activeCategory, handleSelectAttraction, selectedAttraction } = useAttractions()

  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const popupsRef = useRef<any>({})
  const markerLayerRef = useRef<any>(null)

  // Inicializar el mapa cuando el componente se monta
  useEffect(() => {
    // Verificar si estamos en el navegador
    if (typeof window === "undefined" || !mapContainerRef.current) return

    // Cargar el script de Leaflet
    const loadLeaflet = async () => {
      try {
        // Cargar CSS de Leaflet
        const linkEl = document.createElement("link")
        linkEl.rel = "stylesheet"
        linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(linkEl)

        // Esperar a que se cargue el CSS
        await new Promise((resolve) => setTimeout(resolve, 100))

        // Cargar Leaflet
        const L = await import("leaflet")

        // Crear el mapa si no existe
        if (!mapInstanceRef.current) {
          const caliCenter = [3.4516, -76.5225]
          mapInstanceRef.current = L.map(mapContainerRef.current).setView(caliCenter, 13)

          // Añadir la capa de OpenStreetMap
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(mapInstanceRef.current)

          // Crear una capa para los marcadores
          markerLayerRef.current = L.layerGroup().addTo(mapInstanceRef.current)
        }

        // Actualizar marcadores
        updateMarkers(L)
      } catch (error) {
        console.error("Error al cargar Leaflet:", error)
      }
    }

    loadLeaflet()

    // Limpiar al desmontar
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      // Limpiar la función global
      delete window.showAttractionDetails
    }
  }, []) // Solo se ejecuta una vez al montar

  // Actualizar marcadores cuando cambia la categoría
  useEffect(() => {
    if (!mapInstanceRef.current) return

    const updateMap = async () => {
      try {
        const L = await import("leaflet")
        updateMarkers(L)
      } catch (error) {
        console.error("Error al actualizar marcadores:", error)
      }
    }

    updateMap()
  }, [activeCategory])

  // Actualizar cuando cambia la atracción seleccionada
  useEffect(() => {
    if (!mapInstanceRef.current || !selectedAttraction) return

    const updateSelectedAttraction = async () => {
      try {
        const L = await import("leaflet")

        // Centrar el mapa en la atracción seleccionada
        mapInstanceRef.current.setView([selectedAttraction.latitude, selectedAttraction.longitude], 15)

        // Abrir el popup correspondiente
        const marker = markersRef.current.find((m) => {
          const latLng = m.getLatLng()
          return latLng.lat === selectedAttraction.latitude && latLng.lng === selectedAttraction.longitude
        })

        if (marker) {
          marker.openPopup()
        }
      } catch (error) {
        console.error("Error al actualizar la atracción seleccionada:", error)
      }
    }

    updateSelectedAttraction()
  }, [selectedAttraction])

  // Función para actualizar los marcadores
  const updateMarkers = async (L: any) => {
    try {
      // Limpiar marcadores existentes
      if (markerLayerRef.current) {
        markerLayerRef.current.clearLayers()
      }
      markersRef.current = []
      popupsRef.current = {}

      // Filtrar atracciones por categoría
      const filteredAttractions =
        activeCategory === "all"
          ? attractionsData
          : attractionsData.filter((attraction) => attraction.category === activeCategory)

      // Crear iconos personalizados por categoría - Representing Cali Colors
      const categoryIcons: { [key: string]: any } = {
        cultura: L.divIcon({
          className: "custom-div-icon",
          html: `<div style="background-color: #345 85% 55%; width: 34px; height: 34px; border-radius: 4px; display: flex; justify-content: center; align-items: center; color: white; font-weight: 900; border: 2px solid white; box-shadow: 0 0 15px rgba(230, 57, 70, 0.4); transform: rotate(45deg);"><span style="transform: rotate(-45deg);">C</span></div>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        }),
        historia: L.divIcon({
          className: "custom-div-icon",
          html: `<div style="background-color: #457B9D; width: 34px; height: 34px; border-radius: 4px; display: flex; justify-content: center; align-items: center; color: white; font-weight: 900; border: 2px solid white; box-shadow: 0 0 15px rgba(69, 123, 157, 0.4); transform: rotate(45deg);"><span style="transform: rotate(-45deg);">H</span></div>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        }),
        naturaleza: L.divIcon({
          className: "custom-div-icon",
          html: `<div style="background-color: #2A9D8F; width: 34px; height: 34px; border-radius: 4px; display: flex; justify-content: center; align-items: center; color: white; font-weight: 900; border: 2px solid white; box-shadow: 0 0 15px rgba(42, 157, 143, 0.4); transform: rotate(45deg);"><span style="transform: rotate(-45deg);">N</span></div>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        }),
        gastronomia: L.divIcon({
          className: "custom-div-icon",
          html: `<div style="background-color: #F8B400; width: 34px; height: 34px; border-radius: 4px; display: flex; justify-content: center; align-items: center; color: black; font-weight: 900; border: 2px solid white; box-shadow: 0 0 15px rgba(248, 180, 0, 0.4); transform: rotate(45deg);"><span style="transform: rotate(-45deg);">G</span></div>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        }),
        salsa: L.divIcon({
          className: "custom-div-icon",
          html: `<div style="background-color: #E63946; width: 34px; height: 34px; border-radius: 4px; display: flex; justify-content: center; align-items: center; color: white; font-weight: 900; border: 2px solid white; box-shadow: 0 0 20px rgba(230, 57, 70, 0.6); transform: rotate(45deg);"><span style="transform: rotate(-45deg);">S</span></div>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        }),
      }

      // Añadir nuevos marcadores
      filteredAttractions.forEach((attraction) => {
        // Crear un contenido más atractivo para el popup
        const popupContent = `
          <div style="padding: 16px; background: #0a0a0c; color: white; min-width: 200px; border: 1px solid rgba(255,255,255,0.1);">
            <h3 style="font-weight: 900; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #E63946;">${attraction.name}</h3>
            <div style="width: 100%; height: 110px; position: relative; margin-bottom: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05);">
              <img src="${attraction.image}" 
                   alt="${attraction.name}" 
                   style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.8);" 
                   onerror="this.src='/placeholder.svg?height=300&width=500&text=${encodeURIComponent(attraction.name)}'" />
            </div>
            <p style="font-size: 11px; margin-bottom: 16px; color: rgba(255,255,255,0.6); line-height: 1.6; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">${attraction.shortDescription}</p>
            <button 
              id="details-btn-${attraction.id}"
              style="background-color: transparent; border: 1px solid #E63946; color: white; padding: 10px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; width: 100%; transition: all 0.3s ease;">
              EXPLORAR DATA
            </button>
          </div>
        `

        const popup = L.popup({
          maxWidth: 220,
          className: "custom-popup",
        }).setContent(popupContent)

        const icon =
          categoryIcons[attraction.category] ||
          L.divIcon({
            className: "custom-div-icon",
            html: `<div style="background-color: #1D3557; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold;">A</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          })

        const marker = L.marker([attraction.latitude, attraction.longitude], { icon })
          .bindPopup(popup)
          .addTo(markerLayerRef.current)

        // Añadir evento al popup después de que se abra
        marker.on("popupopen", () => {
          setTimeout(() => {
            const button = document.getElementById(`details-btn-${attraction.id}`)
            if (button) {
              button.addEventListener("click", (e) => {
                e.stopPropagation()
                handleSelectAttraction(attraction)
                marker.closePopup()
              })
            }
          }, 100)
        })

        markersRef.current.push(marker)
        popupsRef.current[attraction.id] = popup
      })

      // Si hay un parámetro de atracción en la URL, seleccionar esa atracción
      if (attractionParam) {
        const attraction = attractionsData.find((a) => a.id === attractionParam)
        if (attraction) {
          handleSelectAttraction(attraction)
          mapInstanceRef.current.setView([attraction.latitude, attraction.longitude], 15)

          // Encontrar y activar el marcador correspondiente
          const marker = markersRef.current.find((m) => {
            const latLng = m.getLatLng()
            return latLng.lat === attraction.latitude && latLng.lng === attraction.longitude
          })

          if (marker) {
            marker.openPopup()
          }
        }
      }
    } catch (error) {
      console.error("Error en updateMarkers:", error)
    }
  }

  return (
    <div ref={mapContainerRef} className="w-full h-full">
      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
        }
        .leaflet-control-container {
          z-index: 800;
          position: relative;
        }
        .leaflet-popup {
          z-index: 900;
        }
        .custom-div-icon {
          background: none;
          border: none;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background: #0a0a0c;
          color: white;
          border-radius: 0;
          padding: 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(230, 57, 70, 0.1);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
          padding: 0;
        }
        .custom-popup .leaflet-popup-tip {
          background-color: #0a0a0c;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .leaflet-popup-close-button {
          color: white !important;
          padding: 8px !important;
        }
      `}</style>
    </div>
  )
}
