import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from 'next/font/google'
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Music, MapPin } from 'lucide-react'

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
  title: "Turismo en Cali - La Sucursal del Cielo",
  description: "Descubre los mejores lugares turísticos de Cali, Colombia. Explora la capital mundial de la salsa.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <div className="mr-4 flex">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-cali-orange flex items-center justify-center">
                      <Music className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-xl text-cali-blue">Cali Turismo</span>
                  </Link>
                </div>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <Link href="/" className="transition-colors hover:text-cali-orange">
                    Inicio
                  </Link>
                  <Link href="/mapa" className="transition-colors hover:text-cali-orange">
                    Mapa
                  </Link>
                  <Link href="#" className="transition-colors hover:text-cali-orange">
                    Gastronomía
                  </Link>
                  <Link href="#" className="transition-colors hover:text-cali-orange">
                    Cultura
                  </Link>
                  <Link href="#" className="transition-colors hover:text-cali-orange">
                    Eventos
                  </Link>
                </nav>
                <div className="ml-auto flex items-center space-x-4">
                  <div className="hidden md:flex items-center bg-cali-cream/50 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 text-cali-orange mr-1" />
                    <span className="text-xs text-cali-blue">¡Cali es Cali, lo demás es loma!</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="flex-1">{children}</div>

            <footer className="border-t py-8 bg-cali-blue text-white">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <Music className="h-5 w-5 mr-2 text-cali-orange" />
                      Cali Turismo
                    </h3>
                    <p className="text-sm text-white/80">
                      Tu guía definitiva para explorar Santiago de Cali, la capital mundial de la salsa y la sucursal
                      del cielo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-cali-orange">Explora</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/" className="text-white/80 hover:text-white">Inicio</Link></li>
                      <li><Link href="/mapa" className="text-white/80 hover:text-white">Mapa</Link></li>
                      <li><Link href="#" className="text-white/80 hover:text-white">Atracciones</Link></li>
                      <li><Link href="#" className="text-white/80 hover:text-white">Eventos</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-cali-orange">Categorías</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="#" className="text-white/80 hover:text-white">Cultura</Link></li>
                      <li><Link href="#" className="text-white/80 hover:text-white">Historia</Link></li>
                      <li><Link href="#" className="text-white/80 hover:text-white">Naturaleza</Link></li>
                      <li><Link href="#" className="text-white/80 hover:text-white">Gastronomía</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-cali-orange">Contacto</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="text-white/80">info@calituristico.com</li>
                      <li className="text-white/80">+57 (602) 123-4567</li>
                      <li className="text-white/80">Cali, Valle del Cauca, Colombia</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-center text-sm leading-loose text-white/70 md:text-left">
                    © 2025 Turismo Cali. Todos los derechos reservados.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link href="#" className="text-sm text-white/70 hover:text-white">Términos</Link>
                    <Link href="#" className="text-sm text-white/70 hover:text-white">Privacidad</Link>
                    <Link href="#" className="text-sm text-white/70 hover:text-white">Contacto</Link>
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
