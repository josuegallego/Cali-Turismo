// DOCUMENTACIÓN: Layout específico para la sección del mapa de atracciones
// Este componente proporciona el contexto de atracciones a todas las páginas bajo la ruta /mapa.
// Envuelve las páginas del mapa con el AttractionProvider para compartir el estado global.
// Permite que los componentes hijos accedan al estado de atracciones mediante el hook useAttractions.
// Centraliza la gestión de estado para la selección de atracciones y la visualización de detalles.
// Mantiene la coherencia del estado entre diferentes componentes de la página del mapa.
// Simplifica la comunicación entre componentes relacionados con las atracciones turísticas.

"use client"

import type React from "react"

import { AttractionProvider } from "@/components/attraction-context"

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return <AttractionProvider>{children}</AttractionProvider>
}
