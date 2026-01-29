import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Адрес",
    value: "ул. Александра Невского, 12",
    subvalue: "Санкт-Петербург",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (999) 999-99-99",
    href: "tel:+79999999999",
  },
  {
    icon: Clock,
    label: "Часы работы",
    value: "Ежедневно",
    subvalue: "9:00 — 23:00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@vpiterepeet.ru",
    href: "mailto:hello@vpiterepeet.ru",
  },
];

const socialLinks = [
  { name: "Telegram", href: "https://t.me/vpiterepit1703" },
  { name: "VK", href: "#" },
  { name: "Instagram", href: "#" },
];

const Contacts = () => {
  return (
    <section id="contacts" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/20" />

      <div className="container-custom px-4 md:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="section-label mb-6 mx-auto w-fit">
            <MapPin className="w-4 h-4" />
            <span>Контакты</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Как нас <span className="text-gradient">найти</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы находимся в самом сердце Петербурга — ждём вас в гости
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map placeholder */}
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-2xl overflow-hidden bg-card/50 border border-border/30">
            {/* Replace with Yandex Maps embed when ready */}
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=30.3891%2C59.9311&z=15&l=map&pt=30.3891%2C59.9311%2Cpm2rdm"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              title="Местоположение ресторана"
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Contact information */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-card/40 border border-border/25 hover:border-accent/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-accent transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm">{item.value}</p>
                      )}
                      {item.subvalue && (
                        <p className="text-xs text-muted-foreground mt-0.5">{item.subvalue}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery link */}
            <div className="p-5 rounded-xl bg-accent/5 border border-accent/15">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-0.5">
                    Доставка через Яндекс Еду
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Закажите наши блюда с доставкой на дом
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-accent/30 hover:bg-accent/10 hover:border-accent/50 shrink-0"
                >
                  <a href="https://eda.yandex.ru/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    Заказать
                  </a>
                </Button>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3">Мы в социальных сетях:</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-card/50 border border-border/30 text-sm font-medium text-foreground/70 hover:text-accent hover:border-accent/30 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
