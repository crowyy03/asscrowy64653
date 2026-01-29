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
      {/* Background glow */}
      <div 
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.04) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-custom px-4 md:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="section-label mb-6 mx-auto w-fit">
            <Calendar className="w-4 h-4" />
            <span>События</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Что у нас <span className="text-gradient">происходит</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Регулярные мероприятия и особые вечера для наших гостей
          </p>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group p-6 rounded-2xl bg-card/40 border border-border/25 hover:border-accent/20 transition-all duration-300"
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                <event.icon className="w-3 h-3" />
                {event.tag}
              </div>

              {/* Date */}
              <p className="text-accent text-sm font-medium mb-2">{event.date}</p>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {event.description}
              </p>

              {/* CTA */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-border/40 hover:bg-accent/10 hover:border-accent/30 text-foreground/80"
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
          ))}
        </div>

        {/* Special banner */}
        <div className="mt-12 p-8 md:p-10 rounded-2xl bg-card/30 border border-accent/15 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Планируете мероприятие?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Организуем день рождения, корпоратив или романтический ужин
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 accent-glow"
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
