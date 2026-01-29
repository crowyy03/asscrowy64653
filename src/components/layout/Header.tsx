import { useState, useEffect } from "react";
import { Menu, X, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "О проекте", href: "#about" },
  { label: "Меню", href: "#menu" },
  { label: "Доставка", href: "https://eda.yandex.ru/", external: true },
  { label: "Галерея", href: "#gallery" },
  { label: "События", href: "#events" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
          >
            <span className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
              В Питере <span className="text-accent">Пить</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+79999999999" 
              className="text-foreground/60 hover:text-accent transition-colors duration-200"
              aria-label="Позвонить"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6"
            >
              <a
                href="https://t.me/vpiterepit1703"
                target="_blank"
                rel="noopener noreferrer"
              >
                Забронировать
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30">
            <nav className="flex flex-col py-4 px-4">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-3 text-foreground/80 hover:text-accent transition-colors border-b border-border/20 last:border-0"
                  >
                    {item.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="py-3 text-left text-foreground/80 hover:text-accent transition-colors border-b border-border/20 last:border-0"
                  >
                    {item.label}
                  </button>
                )
              )}
              <Button
                asChild
                className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              >
                <a
                  href="https://t.me/vpiterepit1703"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Забронировать стол
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
