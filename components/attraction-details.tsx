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

  // Obtener color de categoría - Updated for High Contrast & Cali Vibes
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "cultura":
        return "bg-cali-red/20 text-cali-red border-cali-red/40"
      case "historia":
        return "bg-cali-blue/20 text-white border-cali-blue/40 shadow-[0_0_10px_rgba(var(--cali-blue),0.2)]"
      case "naturaleza":
        return "bg-cali-green/20 text-cali-green border-cali-green/40 shadow-[0_0_10px_rgba(var(--cali-green),0.2)]"
      case "gastronomia":
        return "bg-cali-yellow/20 text-cali-yellow border-cali-yellow/40"
      case "salsa":
        return "bg-cali-red/20 text-cali-red border-cali-red/40 animate-pulse"
      default:
        return "bg-white/10 text-white/90 border-white/20"
    }
  }

  return (
    <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[450px] max-h-[80vh] overflow-hidden z-[1000]">
      <Card
        className="shadow-lg relative card-tropical"
        style={{ isolation: "isolate" }}
        key={`attraction-${selectedAttraction.id}`}
      >
        <CardHeader className="p-5 pb-3">
          <div className="flex justify-between items-start">
            <div className="flex-1 mr-4">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] mb-3 border ${getCategoryColor(selectedAttraction.category)}`}
              >
                <CategoryIcon category={selectedAttraction.category} />
                <span>{selectedAttraction.category}</span>
              </div>
              <CardTitle className="text-white text-2xl font-black uppercase tracking-tighter leading-none mb-1 shadow-sm">
                {selectedAttraction.name}
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="bg-white/5 hover:bg-cali-red hover:text-white transition-all rounded-none border border-white/10"
            >
              <span className="sr-only">Cerrar</span>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <CardDescription className="flex items-center gap-2 mt-2">
            <MapPin className="h-4 w-4 text-cali-red" />
            <span className="text-white/60 font-medium text-xs uppercase tracking-widest">{selectedAttraction.location}</span>
          </CardDescription>
        </CardHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex w-full items-stretch justify-start p-1 bg-white/[0.03] border-b border-white/10 rounded-none h-12">
            <TabsTrigger value="info" className="flex-1 data-[state=active]:bg-cali-red data-[state=active]:text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all rounded-none h-full border-x border-white/5">
              Info
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex-1 data-[state=active]:bg-cali-green data-[state=active]:text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all rounded-none h-full border-x border-white/5">
              Media
            </TabsTrigger>
            <TabsTrigger value="video" className="flex-1 data-[state=active]:bg-cali-yellow data-[state=active]:text-black font-black uppercase tracking-[0.2em] text-[10px] transition-all rounded-none h-full border-x border-white/5">
              Live
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="mt-0">
            <CardContent className="p-5 pt-4 max-h-[50vh] overflow-y-auto space-y-6">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < selectedAttraction.rating ? "text-cali-yellow fill-cali-yellow" : "text-white/10"
                    }`}
                  />
                ))}
                <span className="text-[10px] font-bold text-white/30 ml-2 uppercase tracking-widest">({selectedAttraction.reviews} Reseñas)</span>
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
                <div className="absolute bottom-3 left-3 glass-panel border border-white/10 px-4 py-1 rounded-none text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  SPOT.01 // DESTACADO
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] font-black mb-3 text-cali-red uppercase tracking-[0.3em] flex items-center">
                    <div className="w-4 h-[1px] bg-cali-red mr-2"></div> Descripción
                  </h3>
                  <p className="text-sm text-white/70 font-medium leading-relaxed uppercase tracking-wide italic">{selectedAttraction.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Clock, label: "Horario", val: selectedAttraction.hours, col: "text-cali-yellow" },
                    { icon: DollarSign, label: "Precio", val: selectedAttraction.price, col: "text-cali-green" },
                    { icon: Calendar, label: "Duración", val: selectedAttraction.visitDuration, col: "text-cali-red" },
                    { icon: ThumbsUp, label: "Peak Time", val: selectedAttraction.bestTime || "Todo el día", col: "text-cali-blue" }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 group hover:border-white/10 transition-colors">
                      <stat.icon className={`h-5 w-5 ${stat.col}`} />
                      <div>
                        <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{stat.label}</p>
                        <p className="text-[11px] font-black text-white uppercase mt-0.5">{stat.val}</p>
                      </div>
                    </div>
                  ))}
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

                <div className="bg-gradient-to-br from-cali-red/10 to-transparent p-6 border border-cali-red/20 relative group overflow-hidden">
                  <div className="absolute -top-4 -right-4 bg-cali-red text-white w-12 h-12 rounded-full flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
                    <Info className="h-6 w-6" />
                  </div>
                  <h3 className="text-[10px] font-black mb-3 text-cali-red uppercase tracking-[0.4em]">¿SABÍAS QUE?</h3>
                  <p className="text-xs text-white/80 font-bold uppercase tracking-wider leading-relaxed italic">
                    {selectedAttraction.funFact ||
                      "Los caleños son conocidos por su alegría y amabilidad. ¡Pregúntale a cualquier local!"}
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

        <CardFooter className="p-4 border-t border-white/10 flex items-center justify-between bg-black/40 gap-4 mt-auto">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/5 border-white/10 text-white hover:bg-white/20 transition-all rounded-none w-10 h-10 shrink-0"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/5 border-white/10 text-white hover:bg-white/20 transition-all rounded-none w-10 h-10 shrink-0"
            >
              <Info className="h-4 w-4" />
            </Button>
          </div>
          <Button
            className="flex-1 bg-cali-red hover:bg-white hover:text-black text-white font-black uppercase tracking-[0.2em] h-10 rounded-none transition-all shadow-lg shadow-cali-red/20 text-xs truncate"
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
