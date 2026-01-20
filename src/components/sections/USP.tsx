import { Sparkles, MapPin, Award } from "lucide-react";

const uspItems = [
  {
    icon: Sparkles,
    title: "Эногастрономическая свобода",
    description:
      "К каждому блюду — свой идеальный напиток. Мы верим, что правильное сочетание раскрывает вкус и дарит новые впечатления.",
  },
  {
    icon: MapPin,
    title: "Авторский рестобар с петербургским акцентом",
    description:
      "Фирменные настойки на петербургских травах, коктейли, вдохновлённые историей города, и атмосфера белых ночей.",
  },
  {
    icon: Award,
    title: "Качество и честность",
    description:
      "Мы работаем только с фермерскими продуктами. Каждое блюдо — продуманное сочетание вкусов без компромиссов.",
  },
];

const USP = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover-lift"
            >
              {/* Gradient hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7" />
                </div>

                {/* Number indicator */}
                <div className="absolute top-0 right-0 font-display text-6xl font-bold text-foreground/5 group-hover:text-accent/10 transition-colors">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
