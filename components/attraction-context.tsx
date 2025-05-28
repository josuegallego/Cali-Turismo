"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { attractionsData } from "@/lib/attractions-data"

// Definir el tipo para una foto de Google Maps
interface GooglePhoto {
  url: string
  author: string
}

// Definir el tipo para una atracción
export interface Attraction {
  id: string
  name: string
  category: string
  location: string
  latitude: number
  longitude: number
  rating: number
  reviews: number
  shortDescription: string
  description: string
  hours: string
  price: string
  visitDuration: string
  image: string
  images?: string[]
  youtubeId?: string
  facts?: string[]
  funFact?: string
  bestTime?: string
  tips?: string[]
  googlePhotos?: GooglePhoto[]
  googlePhotosLoading?: boolean
  googlePlaceName?: string
  googlePlaceAddress?: string
}

// Definir el tipo para el contexto
interface AttractionContextType {
  selectedAttraction: Attraction | null
  setSelectedAttraction: (attraction: Attraction | null) => void
  activeCategory: string
  setActiveCategory: (category: string) => void
  activeTab: string
  setActiveTab: (tab: string) => void
  showDetailsPanel: boolean
  setShowDetailsPanel: (show: boolean) => void
  handleSelectAttraction: (attraction: Attraction) => void
  loadGooglePhotos: (attractionId: string) => Promise<void>
}

// Crear el contexto
const AttractionContext = createContext<AttractionContextType | undefined>(undefined)

// Proveedor del contexto
export function AttractionProvider({ children }: { children: ReactNode }) {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("info")
  const [showDetailsPanel, setShowDetailsPanel] = useState(false)

  // Función para manejar la selección de una atracción
  const handleSelectAttraction = (attraction: Attraction) => {
    console.log("Seleccionando atracción:", attraction.id)
    setSelectedAttraction(attraction)
    setActiveTab("info")
    setShowDetailsPanel(true)

    // Guardar en localStorage para persistencia
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedAttractionId", attraction.id)
      localStorage.setItem("showDetailsPanel", "true")
    }
  }

  // Función para cargar fotos de Google Maps (simulada)
  const loadGooglePhotos = async (attractionId: string) => {
    // Si la atracción ya tiene fotos cargadas, no hacemos nada
    const attraction = attractionsData.find((a) => a.id === attractionId)
    if (attraction && attraction.googlePhotos && attraction.googlePhotos.length > 0) {
      return
    }

    // Actualizar el estado para mostrar que estamos cargando fotos
    if (selectedAttraction && selectedAttraction.id === attractionId) {
      setSelectedAttraction({
        ...selectedAttraction,
        googlePhotosLoading: true,
        googlePhotos: [],
      })
    }

    // Simular carga de fotos
    setTimeout(() => {
      if (selectedAttraction && selectedAttraction.id === attractionId) {
        setSelectedAttraction({
          ...selectedAttraction,
          googlePhotosLoading: false,
          googlePhotos: attraction?.googlePhotos || [],
          googlePlaceName: attraction?.name,
          googlePlaceAddress: attraction?.location,
        })
      }
    }, 1000)
  }

  // Efecto para recuperar la atracción seleccionada al cargar la página
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAttractionId = localStorage.getItem("selectedAttractionId")
      const savedShowPanel = localStorage.getItem("showDetailsPanel")

      if (savedAttractionId) {
        const attraction = attractionsData.find((a) => a.id === savedAttractionId)
        if (attraction) {
          setSelectedAttraction(attraction as Attraction)
          if (savedShowPanel === "true") {
            setShowDetailsPanel(true)
          }
        }
      }
    }
  }, [])

  // Efecto para cargar fotos de Google Maps cuando se selecciona una atracción
  useEffect(() => {
    if (selectedAttraction && activeTab === "gallery") {
      // Si no tiene fotos de Google y no está cargando, iniciar la carga
      if (
        (!selectedAttraction.googlePhotos || selectedAttraction.googlePhotos.length === 0) &&
        !selectedAttraction.googlePhotosLoading
      ) {
        loadGooglePhotos(selectedAttraction.id)
      }
    }
  }, [selectedAttraction, activeTab])

  // Definir la función global para ser accesible desde cualquier parte
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.showAttractionDetails = (attractionId: string) => {
        console.log("showAttractionDetails llamado con ID:", attractionId)
        const attraction = attractionsData.find((a) => a.id === attractionId)
        if (attraction) {
          handleSelectAttraction(attraction as Attraction)
        }
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        delete window.showAttractionDetails
      }
    }
  }, [])

  return (
    <AttractionContext.Provider
      value={{
        selectedAttraction,
        setSelectedAttraction,
        activeCategory,
        setActiveCategory,
        activeTab,
        setActiveTab,
        showDetailsPanel,
        setShowDetailsPanel,
        handleSelectAttraction,
        loadGooglePhotos,
      }}
    >
      {children}
    </AttractionContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export function useAttractions() {
  const context = useContext(AttractionContext)
  if (context === undefined) {
    throw new Error("useAttractions debe ser usado dentro de un AttractionProvider")
  }
  return context
}

// Extender el objeto Window para incluir nuestra función personalizada
declare global {
  interface Window {
    showAttractionDetails: (attractionId: string) => void
  }
}
