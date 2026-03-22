// DOCUMENTACIÓN: Página de inicio de la aplicación de turismo de Cali
// Diseño Rediseñado: Super Ingeniero Multimedia Edition
// Estética: Premium Dark, Glassmorphism, Sophisticated Neon Accent

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, MapPin, Camera, Music, Utensils, Mountain, History, Sun, Heart, Star, Github, Linkedin, Mail } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Hero Section - Multimedia Experience */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/portada.jpeg"
            alt="Vista panorámica de Cali"
            fill
            className="object-cover scale-105 animate-slow-zoom opacity-40 grayscale-[0.2]"
            priority
          />
        </div>
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
        
        <div className="relative container h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="animate-salsa mb-8">
            <span className="inline-block px-6 py-2 rounded-full glass-panel border border-cali-orange/30 text-cali-orange text-xs font-bold tracking-[0.3em] uppercase">
              La Sucursal del Cielo
            </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
            SANTIAGO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cali-orange via-cali-red to-cali-purple animate-gradient-text drop-shadow-[0_0_30px_rgba(255,100,0,0.3)]">DE CALI</span>
          </h1>
          
          <p className="text-sm md:text-xl text-white/60 mb-12 max-w-2xl font-medium tracking-wide uppercase">
            Donde la salsa es el alma, el ritmo es la ley y la alegría <br className="hidden md:block" /> se respira en cada esquina de la sucursal.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/mapa">
              <Button
                size="lg"
                className="bg-cali-orange hover:bg-cali-orange/90 text-white px-10 py-8 text-xs font-bold uppercase tracking-[0.2em] rounded-none btn-cali group"
              >
                Explorar Lab <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white/10 hover:bg-white/5 text-white px-10 py-8 text-xs font-bold uppercase tracking-[0.2em] rounded-none glass-panel"
            >
              Cultura 360°
            </Button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-24">
            <div className="text-left group cursor-default">
              <p className="text-4xl font-black text-white group-hover:text-cali-orange transition-colors">28°</p>
              <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mt-1">Clima Eterno</p>
            </div>
            <div className="text-left group cursor-default">
              <p className="text-4xl font-black text-white group-hover:text-cali-blue transition-colors">6.5M</p>
              <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mt-1">Corazones</p>
            </div>
            <div className="text-left group cursor-default">
              <p className="text-4xl font-black text-white group-hover:text-cali-red transition-colors">∞/8</p>
              <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mt-1">Ritmo Salsa</p>
            </div>
            <div className="text-left group cursor-default">
              <p className="text-4xl font-black text-white group-hover:text-cali-green transition-colors">1536</p>
              <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mt-1">Heritage</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Scroll to Discover</span>
        </div>
      </section>

      {/* Introducción - Modern Layout */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-cali-orange/20 to-cali-purple/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative h-[600px] rounded-none overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src="/caycedo.png"
                alt="Plaza de Cayzedo, Cali"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-black text-2xl tracking-tighter uppercase italic">Legacy.01</p>
                <p className="text-white/40 text-xs font-bold tracking-widest uppercase mt-1">Plaza de Cayzedo - Foundation</p>
              </div>
            </div>
            {/* Decals */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-cali-orange/30"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-cali-blue/30"></div>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-cali-orange text-xs font-bold tracking-[0.4em] uppercase mb-6 flex items-center">
              <div className="w-12 h-[1px] bg-cali-orange mr-4"></div> The Core
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
              EXPERIMENTA <br />
              <span className="text-cali-blue">EL RITMO</span>
            </h2>
            <div className="space-y-6 text-white/50 text-base leading-relaxed font-medium uppercase tracking-wider">
              <p>
                Fundada en el corazón del siglo XVI, Santiago de Cali ha evolucionado hasta convertirse en un 
                centro neurálgico de expresión multimedia y cultural en Suramérica.
              </p>
              <p>
                Más allá de sus calles, Cali es un ecosistema vivo donde la arquitectura colonial converge con 
                la energía de la modernidad y la pasión ininterrumpida por el baile.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="p-4 border border-white/5 glass-panel group hover:border-cali-orange/30 transition-colors">
                <Music className="h-6 w-6 text-cali-orange mb-3" />
                <h4 className="text-white text-xs font-black uppercase tracking-widest">Global Salsa Capital</h4>
                <p className="text-white/30 text-[10px] mt-2 font-bold uppercase">The rhythmic pulse of the city</p>
              </div>
              <div className="p-4 border border-white/5 glass-panel group hover:border-cali-blue/30 transition-colors">
                <Utensils className="h-6 w-6 text-cali-blue mb-3" />
                <h4 className="text-white text-xs font-black uppercase tracking-widest">Avant-Garde Cuisine</h4>
                <p className="text-white/30 text-[10px] mt-2 font-bold uppercase">A sensory journey thru taste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section - Timeline Card Experience */}
      <section className="py-32 px-4 md:px-8 bg-pattern-salsa border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="text-left">
              <span className="text-cali-purple text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Chronicles</span>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">HISTORY.<span className="text-white/10">DATA</span></h2>
            </div>
            <p className="max-w-xs text-white/30 text-xs font-bold uppercase tracking-widest leading-loose">
              Recopilando los hitos que transformaron a Cali en el diamante del suroccidente colombiano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { year: "1536", title: "Foundation", img: "/history.jpg", color: "cali-red" },
              { year: "1900", title: "Evolution", img: "/industria.webp", color: "cali-blue" },
              { year: "NOW", title: "Future", img: "/contemp.jpg", color: "cali-orange" }
            ].map((item, i) => (
              <Card key={i} className="card-tropical border-none rounded-none group h-[500px]">
                <div className="relative h-full">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                  
                  <div className="absolute top-8 right-8">
                    <span className={`px-4 py-2 border border-white/10 glass-panel text-white text-xs font-black uppercase italic tracking-widest`}>
                      {item.year}
                    </span>
                  </div>
                  
                  <CardContent className="absolute bottom-0 p-8 w-full">
                    <div className={`w-12 h-1 mb-4 bg-${item.color}`}></div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h3>
                    <p className="text-white/40 text-xs font-bold uppercase leading-relaxed tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Un viaje a través del tiempo que revela la resiliencia y el espíritu indomable de la capital del Valle.
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section - Interactive Grid */}
      <section className="py-32 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { icon: Music, title: "Salsa Engine", color: "text-cali-orange", desc: "200+ Academias de Baile" },
              { icon: Camera, title: "Skyline Icon", color: "text-cali-red", desc: "Cristo Rey: 26m Vision" },
              { icon: Mountain, title: "Bio Hub", color: "text-cali-green", desc: "Zoológico: World Class Rank" },
              { icon: Star, title: "Gastronomy", color: "text-cali-yellow", desc: "Mastering the Cholado Beat" }
            ].map((fact, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-12 hover:bg-white/[0.08] transition-all group flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${fact.color}`}>
                  <fact.icon className="h-7 w-7" />
                </div>
                <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-4">{fact.title}</h3>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  {fact.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Pro Studio Style */}
      <section className="py-32 px-4 md:px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-cali-pink text-xs font-black tracking-[0.5em] uppercase mb-12 block">Feedback.log</span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "MARÍA R.", origin: "ARG", text: "¡La sucursal del cielo es pura energía!", color: "cali-orange" },
              { name: "CARLOS M.", origin: "MEX", text: "San Antonio es arquitectura pura.", color: "cali-blue" },
              { name: "ANA G.", origin: "ESP", text: "La rumba y el sancocho son otra liga.", color: "cali-red" }
            ].map((t, i) => (
              <div key={i} className="glass-panel p-10 border-white/5 relative text-left group overflow-hidden">
                <div className={`absolute top-0 right-0 p-4 font-black text-6xl opacity-[0.03] text-white uppercase tracking-tighter italic`}>
                  {t.origin}
                </div>
                <Star className={`h-8 w-8 text-${t.color} mb-8 fill-current opacity-20`} />
                <p className="text-white/60 text-lg italic font-medium uppercase tracking-tight mb-12">
                  "{t.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-[1px] bg-white/20 mr-4"></div>
                  <div>
                    <h4 className="text-white text-xs font-black uppercase tracking-widest">{t.name}</h4>
                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest mt-1">{t.origin} // VISITOR</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - High End Finish */}
      <section className="relative py-48 px-4 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cali-orange/10 via-background to-cali-purple/10"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            ¿LISTO PARA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cali-orange to-cali-red">EL VIAJE?</span>
          </h2>
          <p className="text-white/40 text-xs md:text-base font-bold uppercase tracking-[0.3em] mb-16 max-w-2xl mx-auto leading-loose">
            Explora el mapa interactivo y decodifica los secretos de la ciudad más alegre del mundo.
          </p>
          <Link href="/mapa">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-16 py-10 text-[10px] font-black uppercase tracking-[0.5em] rounded-none group transition-all"
            >
              Iniciar Sistema <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:scale-150" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
