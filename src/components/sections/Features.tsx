import { Coffee, Utensils, Beer } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Завтраки каждый день",
    description: "С 9:00 до 14:00 — авторские завтраки для идеального начала дня",
    highlight: "9:00–14:00",
  },
  {
    icon: Utensils,
    title: "Бизнес-ланчи",
    description: "Сытные обеды по будням в удобное время",
    highlight: "650₽ | 12:30–14:30",
  },
  {
    icon: Beer,
    title: "7 кухонь мира",
    description: "Разнообразие вкусов и 10 видов разливного пива",
    highlight: "10 видов пива",
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-custom px-4 md:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card p-6 md:p-8 hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Highlight badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
                {feature.highlight}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
