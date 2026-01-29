import { MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMenu = () => {
    const element = document.querySelector("#menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background — placeholder until real video is added */}
      <div className="absolute inset-0 z-0">
        {/* Replace src with actual video file when available */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.svg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* <source src="/path-to-video.mp4" type="video/mp4" /> */}
        </video>

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 video-overlay" />

        {/* Subtle amber glow spots */}
        <div 
          className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(16 51% 46% / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(26 62% 48% / 0.06) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Main heading */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up"
          >
            <span className="text-foreground">Рестобар </span>
            <span className="text-gradient">«В Питере Пить»</span>
          </h1>

          {/* Tagline */}
          <p 
            className="text-xl md:text-2xl text-foreground/90 mb-3 font-light animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Место, где Петербург подают в бокале и на тарелке
          </p>
          
          <p 
            className="text-base md:text-lg text-foreground/60 mb-10 max-w-xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Гастробар с настроением города и честной кухней
          </p>

          {/* Info badges */}
          <div 
            className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up" 
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/40 backdrop-blur-md border border-border/30">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/85">Ежедневно 9:00–23:00</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/40 backdrop-blur-md border border-border/30">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/85">ул. Александра Невского, 12</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" 
            style={{ animationDelay: "0.25s" }}
          >
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
              onClick={scrollToMenu}
              className="border-foreground/20 hover:bg-foreground/5 hover:border-foreground/30 text-foreground px-8 py-6 text-base"
            >
              Смотреть меню
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator — subtle and quiet */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-foreground/40 hover:text-accent transition-colors duration-300 group"
        aria-label="Листать вниз"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Листать</span>
        <ChevronDown className="w-5 h-5 animate-subtle-bounce" />
      </button>
    </section>
  );
};

export default Hero;
