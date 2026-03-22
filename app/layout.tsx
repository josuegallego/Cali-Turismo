import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from 'next/font/google'
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Music, MapPin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Load Inter font
const inter = Inter({ subsets: ["latin"] })

// Load Poppins font with correct weight specification
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Turismo en Cali - Multimedia Edition",
  description: "Descubre los mejores lugares turísticos de Cali, Colombia. Explora la capital mundial de la salsa.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body className={`${inter.className} ${poppins.variable} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex flex-col min-h-screen relative">
            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cali-purple/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cali-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5">
              <div className="container flex h-16 items-center px-4 md:px-8">
                <div className="mr-8 flex">
                  <Link href="/" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cali-orange to-cali-red flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-cali-orange/20">
                      <Music className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-2xl tracking-tighter text-white group-hover:text-cali-orange transition-colors uppercase">CALI<span className="text-cali-orange">.</span></span>
                  </Link>
                </div>
                <nav className="hidden md:flex items-center space-x-8 text-[10px] font-bold tracking-[0.2em] uppercase">
                  <Link href="/" className="text-white/50 transition-all hover:text-white hover:tracking-[0.3em]">
                    Inicio
                  </Link>
                  <Link href="/mapa" className="text-white/50 transition-all hover:text-white hover:tracking-[0.3em]">
                    Mapa
                  </Link>
                  <Link href="#" className="text-white/50 transition-all hover:text-white hover:tracking-[0.3em]">
                    Gastronomía
                  </Link>
                  <Link href="#" className="text-white/50 transition-all hover:text-white hover:tracking-[0.3em]">
                    Cultura
                  </Link>
                </nav>
                <div className="ml-auto flex items-center space-x-6">
                  <div className="hidden lg:flex items-center bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                    <MapPin className="h-4 w-4 text-cali-orange mr-2 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">Sucursal del Cielo</span>
                  </div>
                  <Button variant="ghost" className="md:hidden text-white">
                    <Music className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </header>

            <div className="flex-1 relative">{children}</div>

            <footer className="border-t border-white/5 py-12 bg-[#050505] text-white">
              <div className="container px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  <div className="space-y-4">
                    <h3 className="text-xl font-black flex items-center tracking-tighter uppercase">
                      <div className="w-2 h-8 bg-cali-orange mr-3 rounded-full"></div>
                      CALI TURISMO
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed max-w-xs font-medium">
                      Elevando la experiencia turística de la Sucursal del Cielo a un estándar de ingeniería multimedia premium.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.2em] text-cali-orange">Explora</h4>
                    <ul className="space-y-3 text-sm font-medium">
                      <li><Link href="/" className="text-white/30 hover:text-white transition-colors">Inicio</Link></li>
                      <li><Link href="/mapa" className="text-white/30 hover:text-white transition-colors">Mapa Interactivo</Link></li>
                      <li><Link href="#" className="text-white/30 hover:text-white transition-colors">Guía de Salsa</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.2em] text-cali-orange">Patrimonio</h4>
                    <ul className="space-y-3 text-sm font-medium">
                      <li><Link href="#" className="text-white/30 hover:text-white transition-colors">Museos</Link></li>
                      <li><Link href="#" className="text-white/30 hover:text-white transition-colors">Farallones</Link></li>
                      <li><Link href="#" className="text-white/30 hover:text-white transition-colors">Plaza de Cayzedo</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-6 text-[10px] uppercase tracking-[0.2em] text-cali-orange">Contacto</h4>
                    <ul className="space-y-3 text-sm font-medium">
                      <li className="flex items-center text-white/30 hover:text-white transition-colors cursor-pointer group">
                        <Mail className="h-4 w-4 mr-3 text-cali-red group-hover:scale-110 transition-transform" /> info@cali.premium
                      </li>
                      <li className="flex items-center text-white/30 hover:text-white transition-colors cursor-pointer group">
                        <MapPin className="h-4 w-4 mr-3 text-cali-red group-hover:scale-110 transition-transform" /> Cali, Col
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">
                  <p>© 2025 Cali Turismo • Multimedia Edition</p>
                  <div className="flex items-center gap-8">
                    <Link href="#" className="hover:text-white transition-colors">Lab</Link>
                    <Link href="#" className="hover:text-white transition-colors">Legal</Link>
                    <Link href="#" className="hover:text-white transition-colors">Credits</Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
