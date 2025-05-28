"use client"

import type React from "react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ImageOff, MapPin } from 'lucide-react'
import Image from "next/image"

interface GooglePhoto {
  url: string
  author: string
  location?: string
}

interface PhotoGalleryProps {
  photos: GooglePhoto[]
  placeName: string
  attractionImages?: string[]
}

export default function PhotoGallery({ photos, placeName, attractionImages }: PhotoGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  // Usar las imágenes de la atracción si están disponibles, sino usar las fotos de Google
  const imagesToShow = attractionImages && attractionImages.length > 0
    ? attractionImages.map((url, index) => ({ url, author: `Imagen ${index + 1}`, location: placeName }))
    : photos

  if (!imagesToShow || imagesToShow.length === 0) {
    return null
  }

  const handleOpenGallery = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagesToShow.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + imagesToShow.length) % imagesToShow.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      handleNext()
    } else if (e.key === "ArrowLeft") {
      handlePrevious()
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
  }

  // Función para generar un color de fondo basado en el índice
  const getBackgroundColor = (index: number) => {
    const colors = [
      "bg-gradient-to-br from-cali-red/20 to-cali-orange/30",
      "bg-gradient-to-br from-cali-blue/20 to-cali-teal/30",
      "bg-gradient-to-br from-cali-green/20 to-cali-yellow/30",
      "bg-gradient-to-br from-cali-purple/20 to-cali-pink/30",
    ]
    return colors[index % colors.length]
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imagesToShow.map((photo, index) => (
          <div
            key={index}
            className={`relative cursor-pointer aspect-square rounded-xl overflow-hidden ${getBackgroundColor(index)}`}
            onClick={() => handleOpenGallery(index)}
          >
            {!imageErrors[index] ? (
              <Image
                src={photo.url}
                alt={`Imagen de ${placeName}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                onError={() => handleImageError(index)}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                <ImageOff className="w-10 h-10" />
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent onKeyDown={handleKeyDown} className="max-w-4xl">
          <DialogHeader className="flex flex-row justify-between items-center">
            <DialogTitle>{placeName}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </DialogHeader>
          <div className="relative aspect-video bg-muted rounded-xl overflow-hidden">
            {!imageErrors[currentIndex] ? (
              <Image
                src={imagesToShow[currentIndex].url}
                alt={`Imagen de ${placeName}`}
                fill
                className="object-cover"
                onError={() => handleImageError(currentIndex)}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                <ImageOff className="w-12 h-12" />
              </div>
            )}
          </div>
          <DialogDescription className="text-sm mt-2 text-muted-foreground">
            {imagesToShow[currentIndex].author}
            {imagesToShow[currentIndex].location && (
              <span className="flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4" /> {imagesToShow[currentIndex].location}
              </span>
            )}
          </DialogDescription>
          <div className="flex justify-between mt-4">
            <Button onClick={handlePrevious} variant="outline">
              <ChevronLeft className="mr-2" /> Anterior
            </Button>
            <Button onClick={handleNext} variant="outline">
              Siguiente <ChevronRight className="ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
