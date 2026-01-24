import { Camera } from "lucide-react";

import interior1 from "@/assets/gallery-interior-1.jpg";
import cocktail1 from "@/assets/gallery-cocktail-1.jpg";
import dish1 from "@/assets/gallery-dish-1.jpg";
import bar1 from "@/assets/gallery-bar-1.jpg";
import table1 from "@/assets/gallery-table-1.jpg";

const galleryImages = [
  { src: interior1, alt: "Интерьер — основной зал" },
  { src: cocktail1, alt: "Авторские коктейли" },
  { src: dish1, alt: "Подача и кухня" },
  { src: bar1, alt: "Барная полка" },
  { src: table1, alt: "Сервировка" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />

      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Camera className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Галерея</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Визуальный <span className="text-gradient">ритм</span>
            </h2>
            <p className="text-muted-foreground">
              Больше динамики: две бегущие ленты с фото. Плейсхолдеры — вы легко замените их на реальные.
            </p>
          </div>

          <div className="text-sm text-foreground/70 max-w-md">
            Наведите курсор на ленту — движение остановится.
          </div>
        </div>

        <div className="space-y-5">
          {/* Row 1 */}
          <div className="marquee overflow-hidden rounded-2xl border border-border/60 bg-card/30">
            <div className="group flex items-center gap-4 py-4">
              <div
                className="marquee-track flex gap-4 px-4 animate-[marquee-left_26s_linear_infinite] group-hover:[animation-play-state:paused]"
                aria-label="Лента фото"
              >
                {[...galleryImages, ...galleryImages].map((img, idx) => (
                  <figure
                    key={`row1-${idx}`}
                    className="relative w-[240px] sm:w-[320px] md:w-[360px] aspect-[4/3] rounded-xl overflow-hidden border border-border/50 hover-lift"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 right-3 text-xs md:text-sm text-foreground/90 font-medium">
                      {img.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="marquee overflow-hidden rounded-2xl border border-border/60 bg-card/20">
            <div className="group flex items-center gap-4 py-4">
              <div
                className="marquee-track flex gap-4 px-4 animate-[marquee-right_30s_linear_infinite] group-hover:[animation-play-state:paused]"
                aria-label="Лента фото"
              >
                {[...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()].map((img, idx) => (
                  <figure
                    key={`row2-${idx}`}
                    className="relative w-[220px] sm:w-[300px] md:w-[340px] aspect-[4/3] rounded-xl overflow-hidden border border-border/50 hover-lift"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 right-3 text-xs md:text-sm text-foreground/90 font-medium">
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
