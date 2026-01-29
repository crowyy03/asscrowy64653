import { Sparkles, MapPin, Award } from "lucide-react";

const uspItems = [
  {
    icon: Sparkles,
    marker: "01",
    title: "Эногастрономическая свобода",
    description:
      "К каждому блюду — свой идеальный напиток. Мы верим, что правильное сочетание раскрывает вкус и дарит новые впечатления.",
  },
  {
    icon: MapPin,
    marker: "02",
    title: "Авторский рестобар с петербургским акцентом",
    description:
      "Фирменные настойки на петербургских травах, коктейли, вдохновлённые историей города, и атмосфера белых ночей.",
  },
  {
    icon: Award,
    marker: "03",
    title: "Качество и честность",
    description:
      "Мы работаем только с фермерскими продуктами. Каждое блюдо — продуманное сочетание вкусов без компромиссов.",
  },
];

const USP = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative glow */}
      <div 
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--raisin) / 0.4) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom px-4 md:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Почему выбирают <span className="text-gradient">нас</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Три причины, почему «В Питере Пить» станет вашим любимым местом
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {uspItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-card/50 border border-border/30 hover:border-accent/20 transition-all duration-300"
            >
              {/* Marker */}
              <div className="absolute top-6 right-6 font-display text-4xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                {item.marker}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5">
                <item.icon className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 pr-8">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
