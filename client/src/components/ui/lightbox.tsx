import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "./button";
import { Image } from "./image";

interface LightboxProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          break;
        case "ArrowRight":
          setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-7xl px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className={`h-full w-full object-contain transition-transform duration-300 ${
                isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/50 hover:bg-background/70"
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/50 hover:bg-background/70"
              onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-6 top-4 rounded-full bg-background/50 hover:bg-background/70"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Zoom button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-6 top-4 rounded-full bg-background/50 hover:bg-background/70"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <ZoomIn className="h-6 w-6" />
          </Button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/50 px-4 py-2 text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 overflow-x-auto p-2">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-16 w-24 overflow-hidden rounded-md transition-opacity ${
                  index === currentIndex ? "ring-2 ring-primary" : "opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 