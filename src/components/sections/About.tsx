import { Music, Wine, Heart } from "lucide-react";
import interior1 from "@/assets/gallery-interior-1.jpg";
import cocktail1 from "@/assets/gallery-cocktail-1.jpg";
import dish1 from "@/assets/gallery-dish-1.jpg";
import bar1 from "@/assets/gallery-bar-1.jpg";

const galleryImages = [interior1, cocktail1, dish1, bar1];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background glow */}
      <div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.05) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-custom px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Section label */}
            <div className="section-label mb-6">
              <Heart className="w-4 h-4" />
              <span>О проекте</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Петербург в каждом <span className="text-gradient">глотке</span>
            </h2>

            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                <strong className="text-foreground font-medium">«В Питере Пить»</strong> — гастробар 
                с петербургским характером, где город подают в бокале и на тарелке. 
                Это место для тех, кто ценит честную кухню и настоящую атмосферу.
              </p>
              <p>
                Наши авторские настойки и коктейли вдохновлены духом Северной столицы, 
                а меню объединяет лучшие традиции семи кухонь мира. По вечерам в зале 
                звучит русский рок — музыка, которая создаёт неповторимую атмосферу 
                ностальгии и уюта.
              </p>
            </div>

            {/* Mini features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/40 border border-border/20">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Wine className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Авторские настойки</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">15+ уникальных рецептов</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/40 border border-border/20">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Music className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Русский рок</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Живая атмосфера</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images Grid — warm amber lighting */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden border border-border/20 ${
                  idx % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                } ${idx === 1 ? "mt-6" : ""}`}
              >
                <img
                  src={src}
                  alt={`Интерьер ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
