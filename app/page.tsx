// DOCUMENTACIÓN: Página de inicio de la aplicación de turismo de Cali
// Esta página presenta la ciudad como destino turístico con secciones informativas.
// Incluye un hero section con un botón prominente para acceder al mapa interactivo.
// Contiene secciones sobre la historia de Cali, datos curiosos y características destacadas.
// Utiliza componentes de shadcn/ui para mantener una interfaz coherente.
// Implementa un diseño responsive que se adapta a diferentes tamaños de pantalla.

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, MapPin, Camera, Music, Utensils, Mountain, History, Sun, Heart, Star, Github, Linkedin, Mail } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/portada.jpeg"
            alt="Vista panorámica de Cali"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6 z-10">
          <div className="animate-salsa">
            <span className="inline-block px-4 py-1 rounded-full bg-cali-orange/90 text-white text-sm font-medium mb-6">
              ¡La Sucursal del Cielo te espera!
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Bienvenido a <span className="text-cali-yellow">Cali</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl drop-shadow-lg">
            Donde la salsa se baila con el corazón y la alegría se respira en cada esquina
          </p>
          <Link href="/mapa">
            <Button
              size="lg"
              className="bg-cali-orange hover:bg-cali-orange/90 text-white px-8 py-6 text-lg rounded-full btn-cali"
            >
              Explorar Cali <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sun className="h-5 w-5 text-cali-yellow mr-2" />
              <span className="text-white text-sm">Clima cálido todo el año</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Music className="h-5 w-5 text-cali-yellow mr-2" />
              <span className="text-white text-sm">Capital mundial de la salsa</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="h-5 w-5 text-cali-yellow mr-2" />
              <span className="text-white text-sm">Gente cálida y acogedora</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Introducción */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-cali-cream text-cali-orange text-sm font-medium mb-4">
              ¡Parcero, bienvenido!
            </div>
            <h2 className="text-3xl font-bold mb-6 text-cali-blue">Descubre Santiago de Cali</h2>
            <p className="text-gray-700 mb-4">
              Fundada en 1536, Santiago de Cali es la tercera ciudad más grande de Colombia y la capital del
              departamento del Valle del Cauca. Conocida como "La Sucursal del Cielo" por su clima cálido y la alegría
              de su gente, Cali es un destino que combina historia, cultura, gastronomía y naturaleza.
            </p>
            <p className="text-gray-700 mb-6">
              Cali es mundialmente reconocida como la "Capital Mundial de la Salsa", donde la música y el baile forman
              parte esencial de la identidad caleña. Sus habitantes, conocidos por su calidez y hospitalidad, te harán
              sentir como en casa mientras exploras esta vibrante ciudad.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center text-sm bg-cali-cream text-cali-red px-3 py-1 rounded-full">
                <Music className="h-4 w-4 mr-1" /> Capital de la Salsa
              </div>
              <div className="flex items-center text-sm bg-cali-cream text-cali-orange px-3 py-1 rounded-full">
                <Utensils className="h-4 w-4 mr-1" /> Gastronomía Única
              </div>
              <div className="flex items-center text-sm bg-cali-cream text-cali-green px-3 py-1 rounded-full">
                <Mountain className="h-4 w-4 mr-1" /> Rodeada de Naturaleza
              </div>
              <div className="flex items-center text-sm bg-cali-cream text-cali-blue px-3 py-1 rounded-full">
                <History className="h-4 w-4 mr-1" /> Rica Historia
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-cali-gradient opacity-20 z-10"></div>
            <Image
              src="/caycedo.png"
              alt="Plaza de Cayzedo, Cali"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
              <p className="text-white text-sm font-medium">Plaza de Cayzedo - Corazón histórico de Cali</p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia de Cali */}
      <section className="py-20 px-4 md:px-6 bg-pattern-tropical">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-cali-cream text-cali-blue text-sm font-medium mb-4">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-cali-blue">Historia de Cali</h2>
            <p className="text-gray-600 mb-4 text-center max-w-3xl mx-auto">
              Un recorrido por los momentos más importantes que han forjado la identidad de esta ciudad
            </p>
            <div className="w-20 h-1 bg-cali-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-tropical overflow-hidden">
              <div className="relative h-48">
                <Image src="/history.jpg" alt="Cali Colonial" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-cali-blue">
                  1536
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cali-blue">Fundación y Época Colonial</h3>
                <p className="text-gray-700">
                  Fundada el 25 de julio de 1536 por Sebastián de Belalcázar, Cali fue un importante centro comercial
                  durante la época colonial debido a su proximidad al puerto de Buenaventura, sirviendo como punto de
                  conexión entre el Pacífico y el interior del país.
                </p>
              </CardContent>
            </Card>

            <Card className="card-tropical overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/industria.webp"
                  alt="Desarrollo Industrial de Cali"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-cali-blue">
                  Siglo XX
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cali-blue">Desarrollo Industrial</h3>
                <p className="text-gray-700">
                  A principios del siglo XX, Cali experimentó un importante desarrollo industrial con la llegada del
                  ferrocarril del Pacífico y la expansión de la industria azucarera. Este período marcó el comienzo de
                  la modernización de la ciudad.
                </p>
              </CardContent>
            </Card>

            <Card className="card-tropical overflow-hidden">
              <div className="relative h-48">
                <Image src="/contemp.jpg" alt="Cali moderna" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-cali-blue">
                  Actualidad
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cali-blue">Cali Contemporánea</h3>
                <p className="text-gray-700">
                  En 1971, Cali fue sede de los VI Juegos Panamericanos, evento que transformó la infraestructura de la
                  ciudad. Hoy, Cali es un importante centro cultural, deportivo y económico de Colombia, reconocida
                  mundialmente por su festival de salsa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Datos Curiosos */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-cali-cream text-cali-orange text-sm font-medium mb-4">
            ¿Sabías que...?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-cali-blue">Datos Curiosos</h2>
          <p className="text-gray-600 mb-4 text-center max-w-3xl mx-auto">
            Descubre algunos datos fascinantes sobre la ciudad de Cali
          </p>
          <div className="w-20 h-1 bg-cali-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 card-tropical">
            <div className="w-12 h-12 bg-cali-orange rounded-full flex items-center justify-center mb-4">
              <Music className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-cali-blue">Capital de la Salsa</h3>
            <p className="text-gray-600">
              Cali es conocida como la "Capital Mundial de la Salsa", con más de 200 escuelas de baile y el famoso
              Festival Mundial de Salsa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 card-tropical">
            <div className="w-12 h-12 bg-cali-red rounded-full flex items-center justify-center mb-4">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-cali-blue">Cristo Rey</h3>
            <p className="text-gray-600">
              El monumento de Cristo Rey mide 26 metros de altura y fue construido en 1953, inspirado en el Cristo
              Redentor de Río de Janeiro.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 card-tropical">
            <div className="w-12 h-12 bg-cali-green rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-cali-blue">Zoológico de Cali</h3>
            <p className="text-gray-600">
              El Zoológico de Cali es considerado uno de los mejores de Latinoamérica, con más de 2,500 animales de 233
              especies diferentes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 card-tropical">
            <div className="w-12 h-12 bg-cali-yellow rounded-full flex items-center justify-center mb-4">
              <Utensils className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-cali-blue">Gastronomía</h3>
            <p className="text-gray-600">
              El "Cholado" es un postre típico caleño, hecho con hielo raspado, frutas, leche condensada y otros dulces,
              perfecto para el clima cálido.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4 md:px-6 bg-pattern-salsa">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-cali-cream text-cali-red text-sm font-medium mb-4">
              Experiencias
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-cali-blue">
              Lo que dicen los visitantes
            </h2>
            <p className="text-gray-600 mb-4 text-center max-w-3xl mx-auto">
              Testimonios de quienes han vivido la magia de Cali
            </p>
            <div className="w-20 h-1 bg-cali-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md relative card-tropical">
              <div className="absolute -top-5 -right-5 bg-cali-orange text-white w-10 h-10 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 fill-current" />
              </div>
              <div className="mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="inline-block h-5 w-5 text-cali-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "¡Qué chimba de ciudad! La gente es súper amable, la comida deliciosa y bailar salsa hasta el amanecer
                fue una experiencia inolvidable. ¡Volveré pronto!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cali-cream rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-cali-blue">María Rodríguez</p>
                  <p className="text-sm text-gray-500">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative card-tropical">
              <div className="absolute -top-5 -right-5 bg-cali-orange text-white w-10 h-10 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 fill-current" />
              </div>
              <div className="mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="inline-block h-5 w-5 text-cali-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "El barrio San Antonio me encantó, con sus casas coloridas y ambiente bohemio. Desde allí se tiene una
                vista espectacular de toda la ciudad. ¡Cali es pura vida!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cali-cream rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-cali-blue">Carlos Méndez</p>
                  <p className="text-sm text-gray-500">Ciudad de México, México</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative card-tropical">
              <div className="absolute -top-5 -right-5 bg-cali-orange text-white w-10 h-10 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 fill-current" />
              </div>
              <div className="mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="inline-block h-5 w-5 text-cali-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Nunca había probado comida tan deliciosa como en Cali. Los cholados, el sancocho y las empanadas son
                manjares que no te puedes perder. ¡Y qué decir de la rumba!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cali-cream rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-cali-blue">Ana Gómez</p>
                  <p className="text-sm text-gray-500">Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Final */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-cali-orange to-cali-red text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            ¡Anímate, parcero!
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Listo para conocer Cali?</h2>
          <p className="mb-8 text-white/90 text-lg">
            Explora nuestro mapa interactivo y descubre los lugares más emblemáticos de la ciudad. ¡Te esperamos con los
            brazos abiertos y el mejor sabor caleño!
          </p>
          <Link href="/mapa">
            <Button
              size="lg"
              className="bg-white text-cali-orange hover:bg-white/90 px-8 py-6 text-lg rounded-full btn-cali"
            >
              Explorar el Mapa <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm">¡Cali es Cali, lo demás es loma!</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
