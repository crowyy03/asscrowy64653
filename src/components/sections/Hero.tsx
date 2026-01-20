import { MapPin, Clock, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent font-medium">Рестобар с петербургским характером</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">В Питере </span>
            <span className="text-gradient">Пить</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/80 mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Место, где Петербург подают в бокале и на тарелке
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Гастробар с настроением города и честной кухней. Авторские настойки, 
            семь видов кухни и атмосфера настоящего Петербурга.
          </p>

          {/* Info badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 px-4 py-2 glass-card">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/90">Ежедневно 9:00–23:00</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-card">
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
