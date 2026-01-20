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
    <section id="contacts" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-custom px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Контакты</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Как нас <span className="text-gradient">найти</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы находимся в самом сердце Петербурга — ждём вас в гости!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map placeholder */}
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden bg-card border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.8!2d30.3891!3e59.9311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDU1JzUyLjAiTiAzMMKwMjMnMjAuOCJF!5e0!3m2!1sru!2sru!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Местоположение ресторана"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>

          {/* Contact information */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-card border border-border/50 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-accent/10">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                      {item.subvalue && (
                        <p className="text-sm text-muted-foreground">{item.subvalue}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery link */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Доставка через Яндекс Еду
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Закажите наши блюда с доставкой на дом
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent/30 hover:bg-accent/10 hover:border-accent shrink-0"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Заказать
                  </a>
                </Button>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Мы в социальных сетях:</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium text-foreground/80 hover:text-accent hover:border-accent/50 transition-colors"
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
