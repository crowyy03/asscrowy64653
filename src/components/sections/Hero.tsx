import { MapPin, Clock, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/gallery-interior-1.jpg";
import amberBlur from "@/assets/ref-amber-blur.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/65 via-background/45 to-transparent" />

        {/* Premium amber glow */}
        <img
          src={amberBlur}
          alt=""
          aria-hidden="true"
          className="absolute -right-24 -top-40 w-[520px] md:w-[680px] opacity-60 mix-blend-screen blur-[1px] pointer-events-none"
        />
        <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent font-medium">Современный рестобар с атмосферой Петербурга</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">В Питере </span>
            <span className="text-gradient">Пить</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/85 mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Место, где Петербург подают в бокале и на тарелке
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Гастробар с настроением города и честной кухней. Авторские настойки, 
            семь видов кухни и атмосфера настоящего Петербурга.
          </p>

          {/* Info badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 px-4 py-2 glass-card premium-surface">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/90">Ежедневно 9:00–23:00</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-card premium-surface">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/90">ул. Александра Невского, 12</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base accent-glow"
            >
              <a
                href="https://t.me/vpiterepit1703"
                target="_blank"
                rel="noopener noreferrer"
              >
                Забронировать стол
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#menu");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-foreground/20 hover:bg-foreground/5 text-foreground px-8 py-6 text-base"
            >
              Смотреть меню
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/50 hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Листать</span>
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
