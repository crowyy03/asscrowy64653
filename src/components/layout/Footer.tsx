import { ExternalLink, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-8 border-t border-border/20 bg-card/20 relative z-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold text-foreground">
              В Питере <span className="text-accent">Пить</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60">
            <a
              href="tel:+79999999999"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              +7 (999) 999-99-99
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <a
              href="https://t.me/vpiterepit1703"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              Telegram
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <a
              href="https://eda.yandex.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              Доставка
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1.5 text-xs text-foreground/40">
            © {new Date().getFullYear()} • Сделано с <Heart className="w-3 h-3 text-accent fill-accent" /> в Петербурге
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
