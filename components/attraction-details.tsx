"use client"

import { useAttractions } from "./attraction-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Star, MapPin, Info, Share2, X, Clock, DollarSign, Calendar, ThumbsUp, Music, Utensils, History, Camera, Palmtree, ImageIcon, RefreshCw, ExternalLink } from 'lucide-react'
import PhotoGallery from "./photo-gallery"
import Image from "next/image"

// Componente para mostrar el icono de categoría
const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "cultura":
      return <Music className="h-5 w-5 text-cali-red" />
    case "historia":
      return <History className="h-5 w-5 text-cali-blue" />
    case "naturaleza":
      return <Palmtree className="h-5 w-5 text-cali-green" />
    case "gastronomia":
      return <Utensils className="h-5 w-5 text-cali-orange" />
    case "salsa":
      return <Music className="h-5 w-5 text-cali-pink" />
    default:
      return <MapPin className="h-5 w-5 text-gray-400" />
  }
}

export default function AttractionDetails() {
  const {
    selectedAttraction,
    setSelectedAttraction,
    activeTab,
    setActiveTab,
    showDetailsPanel,
    setShowDetailsPanel,
    loadGooglePhotos,
  } = useAttractions()

  if (!selectedAttraction || !showDetailsPanel) return null

  const handleClose = () => {
    setShowDetailsPanel(false)
    localStorage.setItem("showDetailsPanel", "false")
  }

  // Función para recargar las fotos de Google Maps
  const handleRefreshPhotos = async () => {
    await loadGooglePhotos(selectedAttraction.id)
  }

  // Obtener color de categoría
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "cultura":
        return "bg-cali-red/10 text-cali-red border-cali-red/20"
      case "historia":
        return "bg-cali-blue/10 text-cali-blue border-cali-blue/20"
      case "naturaleza":
        return "bg-cali-green/10 text-cali-green border-cali-green/20"
      case "gastronomia":
        return "bg-cali-orange/10 text-cali-orange border-cali-orange/20"
      case "salsa":
        return "bg-cali-pink/10 text-cali-pink border-cali-pink/20"
      default:
        return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  return (
    <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[450px] max-h-[80vh] overflow-hidden z-[1000]">
      <Card
        className="shadow-lg relative card-tropical"
        style={{ isolation: "isolate" }}
        key={`attraction-${selectedAttraction.id}`}
      >
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <div>
              <div
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mb-2 ${getCategoryColor(selectedAttraction.category)}`}
              >
                <CategoryIcon category={selectedAttraction.category} />
                <span className="capitalize">{selectedAttraction.category}</span>
              </div>
              <CardTitle className="text-cali-blue">{selectedAttraction.name}</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="hover:bg-cali-red/10 hover:text-cali-red"
            >
              <span className="sr-only">Cerrar</span>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-gray-400" />
            <span>{selectedAttraction.location}</span>
          </CardDescription>
        </CardHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 px-4 bg-cali-cream/50">
            <TabsTrigger value="info" className="data-[state=active]:bg-cali-blue data-[state=active]:text-white">
              Información
            </TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-cali-orange data-[state=active]:text-white">
              Galería
            </TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-cali-green data-[state=active]:text-white">
              Video
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="mt-0">
            <CardContent className="p-4 pt-2 max-h-[50vh] overflow-y-auto">
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < selectedAttraction.rating ? "text-cali-yellow fill-cali-yellow" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">({selectedAttraction.reviews} reseñas)</span>
              </div>

              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedAttraction.image || "/placeholder.svg"}
                  alt={selectedAttraction.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=300&width=500&text=" + encodeURIComponent(selectedAttraction.name)
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-cali-blue">
                  Atracción destacada
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-1 text-cali-blue">Descripción</h3>
                  <p className="text-sm text-gray-600">{selectedAttraction.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="flex items-center gap-2 bg-cali-cream/30 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-cali-orange" />
                    <div>
                      <p className="text-xs text-gray-500">Horario</p>
                      <p className="text-sm font-medium">{selectedAttraction.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-cali-cream/30 p-3 rounded-lg">
                    <DollarSign className="h-5 w-5 text-cali-green" />
                    <div>
                      <p className="text-xs text-gray-500">Precio</p>
                      <p className="text-sm font-medium">{selectedAttraction.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-cali-cream/30 p-3 rounded-lg">
                    <Calendar className="h-5 w-5 text-cali-blue" />
                    <div>
                      <p className="text-xs text-gray-500">Duración</p>
                      <p className="text-sm font-medium">{selectedAttraction.visitDuration}</p>
                    </div>
                  </div>
                  {selectedAttraction.bestTime && (
                    <div className="flex items-center gap-2 bg-cali-cream/30 p-3 rounded-lg">
                      <ThumbsUp className="h-5 w-5 text-cali-red" />
                      <div>
                        <p className="text-xs text-gray-500">Mejor momento</p>
                        <p className="text-sm font-medium">{selectedAttraction.bestTime}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-1 text-cali-blue">Datos interesantes</h3>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                    {selectedAttraction.facts?.map((fact: string, index: number) => <li key={index}>{fact}</li>) || (
                      <>
                        <li>Este lugar es uno de los más visitados de Cali.</li>
                        <li>Forma parte importante de la historia y cultura caleña.</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="bg-cali-cream p-4 rounded-lg border border-cali-orange/20 relative">
                  <div className="absolute -top-3 -right-3 bg-cali-orange text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <Info className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2 text-cali-orange">¿Sabías que...?</h3>
                  <p className="text-sm text-gray-700 italic">
                    {selectedAttraction.funFact ||
                      "Los caleños son conocidos por su alegría y amabilidad. ¡Pregúntale a cualquier local por recomendaciones y seguro te ayudará con una sonrisa!"}
                  </p>
                </div>

                {selectedAttraction.tips && (
                  <div>
                    <h3 className="text-sm font-semibold mb-1 text-cali-blue">Consejos para visitantes</h3>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                      {selectedAttraction.tips.map((tip: string, index: number) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </TabsContent>

          <TabsContent value="gallery" className="mt-0">
            <CardContent className="p-4 pt-2">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-cali-blue flex items-center gap-2">
                  <Camera className="h-4 w-4 text-cali-orange" />
                  Fotos de {selectedAttraction.name}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRefreshPhotos}
                  className="h-8 px-2 text-xs text-cali-orange hover:text-cali-orange/80 hover:bg-cali-orange/10"
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Actualizar
                </Button>
              </div>

              <div className="mb-4">
                <div className="relative h-8 overflow-hidden rounded bg-cali-cream/50">
                  <div className="absolute left-0 top-0 h-full w-full flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cali-orange" />
                      <span className="text-xs text-cali-blue font-medium">
                        {selectedAttraction.googlePlaceName || selectedAttraction.name}, {selectedAttraction.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {selectedAttraction.googlePhotosLoading ? (
                  // Esqueleto de carga
                  <div className="grid grid-cols-2 gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="aspect-square animate-pulse rounded-md bg-cali-cream/50"></div>
                    ))}
                  </div>
                ) : selectedAttraction.images && selectedAttraction.images.length > 0 ? (
                  // Mostrar fotos usando las imágenes de la atracción
                  <PhotoGallery
                    photos={selectedAttraction.googlePhotos || []}
                    placeName={selectedAttraction.googlePlaceName || selectedAttraction.name}
                    attractionImages={selectedAttraction.images}
                  />
                ) : (
                  // Mostrar placeholders si no hay fotos
                  <div className="grid grid-cols-2 gap-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="group relative aspect-square overflow-hidden rounded-md bg-cali-cream/30"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cali-cream to-cali-orange/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-cali-blue/30" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-white">No hay fotos disponibles</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs bg-cali-cream/30 border-cali-orange/20 text-cali-orange hover:bg-cali-orange/10"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${selectedAttraction.latitude},${selectedAttraction.longitude}`,
                        "_blank",
                      )
                    }
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Ver en Google Maps
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs bg-cali-cream/30 border-cali-green/20 text-cali-green hover:bg-cali-green/10"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${selectedAttraction.latitude},${selectedAttraction.longitude}&query_place_id=ChIJxRUNxUX_Oo4RwNLl45Tg1Kw`,
                        "_blank",
                      )
                    }
                  >
                    <Camera className="h-3 w-3 mr-1" />
                    Más fotos
                  </Button>
                </div>

                <div className="rounded-md border border-cali-orange/20 bg-cali-cream/30 p-3">
                  <p className="text-xs text-gray-600">
                    <strong>Fotos verificadas de Cali, Colombia.</strong> Estas imágenes muestran lugares reales de la
                    ciudad y sus atracciones turísticas.
                  </p>
                </div>
              </div>
            </CardContent>
          </TabsContent>

          <TabsContent value="video" className="mt-0">
            <CardContent className="p-4 pt-2">
              {selectedAttraction.youtubeId ? (
                <div className="aspect-video w-full overflow-hidden rounded-md">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedAttraction.youtubeId}`}
                    title={`Video de ${selectedAttraction.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="aspect-video"
                  ></iframe>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-cali-cream/30 rounded-md">
                  <Camera className="h-12 w-12 text-cali-orange/50 mb-4" />
                  <p className="text-gray-500 text-center px-4">
                    Estamos trabajando para añadir un video sobre {selectedAttraction.name}. ¡Vuelve pronto para ver más
                    contenido!
                  </p>
                </div>
              )}
              <p className="text-sm text-gray-500 mt-4 bg-cali-cream/30 p-3 rounded-md border border-cali-orange/20">
                {selectedAttraction.youtubeId
                  ? `Explora ${selectedAttraction.name} a través de este video y descubre por qué es un lugar imprescindible en Cali. ¡Una chimba total!`
                  : `Estamos seleccionando el mejor contenido sobre ${selectedAttraction.name}. ¡Pronto tendremos videos bacanos para ti!`}
              </p>
            </CardContent>
          </TabsContent>
        </Tabs>

        <CardFooter className="p-4 pt-0 flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-cali-cream/30 border-cali-orange/20 text-cali-orange hover:bg-cali-orange/10"
            >
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Compartir</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-cali-cream/30 border-cali-blue/20 text-cali-blue hover:bg-cali-blue/10"
            >
              <Info className="h-4 w-4" />
              <span className="sr-only">Más información</span>
            </Button>
          </div>
          <Button
            variant="outline"
            className="bg-cali-orange text-white hover:bg-cali-orange/90 border-none btn-cali"
            onClick={() =>
              window.open(
                `https://www.openstreetmap.org/directions?from=&to=${selectedAttraction.latitude}%2C${selectedAttraction.longitude}`,
                "_blank",
              )
            }
          >
            Cómo llegar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
