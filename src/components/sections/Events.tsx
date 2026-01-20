import { Calendar, Music, Star, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    icon: Music,
    date: "Каждую пятницу",
    title: "Живая музыка",
    description: "Вечера русского рока в живом исполнении. Любимые хиты и атмосфера настоящего Петербурга.",
    tag: "Музыка",
  },
  {
    icon: Star,
    date: "Каждую субботу",
    title: "Винный вечер",
    description: "Дегустация вин из нашей коллекции с сырной тарелкой от шефа.",
    tag: "Дегустация",
  },
  {
    icon: PartyPopper,
    date: "По воскресеньям",
    title: "Семейный бранч",
    description: "Расширенное меню завтраков, детское меню и особая атмосфера для всей семьи.",
    tag: "Семья",
  },
];

const Events = () => {
  return (
    <section id="events" className="section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 md:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">События</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Что у нас <span className="text-gradient">происходит</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Регулярные мероприятия и особые вечера для наших гостей
          </p>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover-lift overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative">
                {/* Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                  <event.icon className="w-3 h-3" />
                  {event.tag}
                </div>

                {/* Date */}
                <p className="text-accent text-sm font-medium mb-2">{event.date}</p>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* CTA */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent/30 hover:bg-accent/10 hover:border-accent text-foreground"
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
            </div>
          ))}
        </div>

        {/* Special banner */}
        <div className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/30 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Планируете мероприятие?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Организуем день рождения, корпоратив или романтический ужин. Напишите нам, и мы всё устроим!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
          >
            <a
              href="https://t.me/vpiterepit1703"
              target="_blank"
              rel="noopener noreferrer"
            >
              Обсудить в Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
