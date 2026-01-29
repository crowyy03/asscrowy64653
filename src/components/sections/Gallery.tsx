import { Camera } from "lucide-react";

import interior1 from "@/assets/gallery-interior-1.jpg";
import cocktail1 from "@/assets/gallery-cocktail-1.jpg";
import dish1 from "@/assets/gallery-dish-1.jpg";
import bar1 from "@/assets/gallery-bar-1.jpg";
import table1 from "@/assets/gallery-table-1.jpg";

const galleryImages = [
  { src: interior1, alt: "Интерьер" },
  { src: cocktail1, alt: "Коктейли" },
  { src: dish1, alt: "Кухня" },
  { src: bar1, alt: "Бар" },
  { src: table1, alt: "Сервировка" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="container-custom px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="section-label mb-6">
              <Camera className="w-4 h-4" />
              <span>Галерея</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Атмосфера <span className="text-gradient">места</span>
            </h2>
            <p className="text-muted-foreground">
              Интерьер, подача и детали, которые создают настроение
            </p>
          </div>

          <p className="text-sm text-foreground/50 max-w-xs">
            Наведите курсор — движение остановится
          </p>
        </div>

        {/* Marquee rows */}
        <div className="space-y-4">
          {/* Row 1 — left direction */}
          <div className="marquee overflow-hidden rounded-2xl bg-card/20 border border-border/20">
            <div className="group flex items-center py-4">
              <div
                className="marquee-track flex gap-4 px-4 animate-[marquee-left_30s_linear_infinite] group-hover:[animation-play-state:paused]"
                aria-label="Лента фото"
              >
                {[...galleryImages, ...galleryImages].map((img, idx) => (
                  <figure
                    key={`row1-${idx}`}
                    className="relative w-[260px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-xl overflow-hidden border border-border/30 shrink-0"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-3 left-4 text-sm text-foreground/90 font-medium">
                      {img.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 — right direction */}
          <div className="marquee overflow-hidden rounded-2xl bg-card/10 border border-border/15">
            <div className="group flex items-center py-4">
              <div
                className="marquee-track flex gap-4 px-4 animate-[marquee-right_35s_linear_infinite] group-hover:[animation-play-state:paused]"
                aria-label="Лента фото"
              >
                {[...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()].map((img, idx) => (
                  <figure
                    key={`row2-${idx}`}
                    className="relative w-[240px] sm:w-[300px] md:w-[340px] aspect-[4/3] rounded-xl overflow-hidden border border-border/30 shrink-0"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-3 left-4 text-sm text-foreground/90 font-medium">
                      {img.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
