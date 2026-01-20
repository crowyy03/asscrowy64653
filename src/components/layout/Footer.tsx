import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold text-foreground">
              В Питере <span className="text-accent">Пить</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} В Питере Пить. Все права защищены.
          </p>

          {/* Made with love */}
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Сделано с <Heart className="w-4 h-4 text-accent fill-accent" /> в Петербурге
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
