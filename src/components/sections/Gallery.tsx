import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Интерьер ресторана — основной зал",
  },
  {
    src: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Уютная атмосфера вечером",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Барная зона",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Авторские блюда",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Сервировка стола",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-custom px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Галерея</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Атмосфера <span className="text-gradient">ресторана</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Загляните внутрь — петербургский уют и стиль в каждой детали
          </p>
        </div>

        {/* Main carousel */}
        <div className="relative">
          {/* Main image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-foreground/90 text-sm md:text-base font-medium">
                {galleryImages[currentIndex].alt}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background text-foreground backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background text-foreground backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 mt-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-accent scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Dots indicator (mobile) */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-accent w-6" : "bg-foreground/30"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
