"use client"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Music, Utensils, History, Palmtree } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { attractionsData } from "@/lib/attractions-data"
import dynamic from "next/dynamic"
import AttractionDetails from "@/components/attraction-details"
import { useAttractions } from "@/components/attraction-context"
import Image from "next/image"

// Importar el componente de mapa dinámicamente (sin SSR)
const MapComponent = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-pattern-tropical">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cali-orange mb-4"></div>
        <p className="text-lg font-medium text-cali-blue">Cargando el mapa de Cali...</p>
        <p className="text-sm text-gray-500">Preparando una experiencia bacana</p>
      </div>
    </div>
  ),
})

// Componente para mostrar el icono de categoría
const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "cultura":
      return <Music className="h-4 w-4 text-cali-red" />
    case "historia":
      return <History className="h-4 w-4 text-cali-blue" />
    case "naturaleza":
      return <Palmtree className="h-4 w-4 text-cali-green" />
    case "gastronomia":
      return <Utensils className="h-4 w-4 text-cali-orange" />
    case "salsa":
      return <Music className="h-4 w-4 text-cali-pink" />
    default:
      return <MapPin className="h-4 w-4 text-gray-400" />
  }
}

export default function MapPage() {
  const searchParams = useSearchParams()
  const attractionParam = searchParams.get("attraction")

  const { activeCategory, setActiveCategory, selectedAttraction, handleSelectAttraction } = useAttractions()

  // Filtrar atracciones por categoría
  const filteredAttractions =
    activeCategory === "all"
      ? attractionsData
      : attractionsData.filter((attraction) => attraction.category === activeCategory)

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
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">
        {/* Panel lateral */}
        <div className="w-full md:w-96 p-4 border-r bg-background overflow-auto">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-cali-orange flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-cali-blue">Mapa de Cali</h1>
            </div>
            <p className="text-gray-600 mb-4 pl-10">
              ¡Parcero! Aquí te mostramos los sitios más bacanos de la sucursal del cielo
            </p>

            <Tabs defaultValue={activeCategory} className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-3 mb-4 bg-cali-cream/50">
                <TabsTrigger value="all" className="data-[state=active]:bg-cali-orange data-[state=active]:text-white">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="cultura" className="data-[state=active]:bg-cali-red data-[state=active]:text-white">
                  Cultura
                </TabsTrigger>
                <TabsTrigger
                  value="historia"
                  className="data-[state=active]:bg-cali-blue data-[state=active]:text-white"
                >
                  Historia
                </TabsTrigger>
              </TabsList>
              <TabsList className="grid grid-cols-3 bg-cali-cream/50">
                <TabsTrigger
                  value="naturaleza"
                  className="data-[state=active]:bg-cali-green data-[state=active]:text-white"
                >
                  Naturaleza
                </TabsTrigger>
                <TabsTrigger
                  value="gastronomia"
                  className="data-[state=active]:bg-cali-orange data-[state=active]:text-white"
                >
                  Gastronomía
                </TabsTrigger>
                <TabsTrigger value="salsa" className="data-[state=active]:bg-cali-pink data-[state=active]:text-white">
                  Salsa
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <ScrollArea className="h-[calc(100vh-16rem)]">
            {/* Lista de atracciones */}
            <div className="space-y-4 pr-4">
              {filteredAttractions.map((attraction) => (
                <Card
                  key={attraction.id}
                  className={`cursor-pointer hover:shadow-md transition-shadow overflow-hidden card-tropical ${
                    selectedAttraction?.id === attraction.id ? "ring-2 ring-cali-orange" : ""
                  }`}
                  onClick={() => handleSelectAttraction(attraction)}
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=300&width=500&text=" + encodeURIComponent(attraction.name)
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div
                      className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(attraction.category)}`}
                    >
                      <div className="flex items-center gap-1">
                        <CategoryIcon category={attraction.category} />
                        <span className="capitalize">{attraction.category}</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg text-cali-blue">
                      <span>{attraction.name}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      <span>{attraction.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 pb-2">
                    <p className="text-sm text-gray-600 line-clamp-2">{attraction.shortDescription}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < attraction.rating ? "text-cali-yellow fill-cali-yellow" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({attraction.reviews})</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Área del mapa */}
        <div className="flex-1 relative" style={{ isolation: "isolate" }}>
          <MapComponent attractionParam={attractionParam} />
          <AttractionDetails />
        </div>
      </div>
    </main>
  )
}
