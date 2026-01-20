import { MessageCircle, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container-custom px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <MessageCircle className="w-10 h-10 text-accent" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Забронировать <span className="text-gradient">стол</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Напишите нам в Telegram или позвоните — мы подберём лучший столик для вас
          </p>

          {/* Working hours reminder */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 mb-10">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-sm text-foreground/80">Ежедневно с 9:00 до 23:00</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-base accent-glow"
            >
              <a
                href="https://t.me/vpiterepit1703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Написать в Telegram
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 hover:bg-foreground/5 text-foreground px-10 py-6 text-base"
            >
              <a href="tel:+79999999999" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Позвонить
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
