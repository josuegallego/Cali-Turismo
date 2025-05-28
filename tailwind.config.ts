// DOCUMENTACIÓN: Configuración de Tailwind CSS para la aplicación de turismo de Cali
// Este archivo define la configuración personalizada de Tailwind CSS para el proyecto.
// Establece el modo oscuro, los selectores de contenido y los prefijos para las clases.
// Extiende el tema con colores personalizados para Cali, radios de borde y animaciones.
// Configura el contenedor para centrado y responsive en diferentes tamaños de pantalla.
// Incluye el plugin tailwindcss-animate para habilitar animaciones predefinidas.
// Proporciona una base sólida para el diseño visual consistente de la aplicación.

import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Colores personalizados para Cali - Paleta actualizada con azul medio
        "cali-red": "hsl(var(--cali-red))",
        "cali-blue": "hsl(var(--cali-blue))",
        "cali-cream": "hsl(var(--cali-cream))",
        "cali-green": "hsl(var(--cali-green))",
        "cali-yellow": "hsl(var(--cali-yellow))",
        "cali-orange": "hsl(var(--cali-orange))",
        "cali-pink": "hsl(var(--cali-pink))",
        "cali-purple": "hsl(var(--cali-purple))",
        "cali-teal": "hsl(var(--cali-teal))",
        "cali-light-blue": "hsl(var(--cali-light-blue))", // Azul medio principal
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "salsa-beat": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "salsa-beat": "salsa-beat 1s ease-in-out infinite",
      },
      backgroundImage: {
        "cali-gradient": "linear-gradient(135deg, hsl(var(--cali-light-blue)) 0%, hsl(var(--cali-orange)) 100%)",
        "tropical-gradient": "linear-gradient(135deg, hsl(var(--cali-green)) 0%, hsl(var(--cali-teal)) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
