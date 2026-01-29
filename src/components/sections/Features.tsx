import { Coffee, Utensils, Beer } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Завтраки каждый день",
    time: "9:00–14:00",
  },
  {
    icon: Utensils,
    title: "Бизнес-ланчи",
    time: "650₽ • 12:30–14:30",
  },
  {
    icon: Beer,
    title: "7 кухонь мира",
    time: "10 видов пива",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-accent/10 hover:border-accent/25 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors duration-300">
                <feature.icon className="w-5 h-5" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold text-foreground mb-0.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-accent font-medium">
                  {feature.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
