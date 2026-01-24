import chefPortrait from "@/assets/chef-portrait.jpg";
import ownerPortrait from "@/assets/owner-portrait.jpg";
import { ChefHat, Crown } from "lucide-react";

const people = [
  {
    role: "Бренд‑шеф",
    name: "Имя Фамилия",
    icon: ChefHat,
    image: chefPortrait,
    bullets: [
      "Авторские блюда и сезонные обновления",
      "Фокус на честных продуктах и вкусе",
      "Меню, которое хочется изучать",
    ],
  },
  {
    role: "Владелец",
    name: "Имя Фамилия",
    icon: Crown,
    image: ownerPortrait,
    bullets: [
      "Антураж и настроение — как часть сервиса",
      "Музыка, свет и барная карта в одном ритме",
      "Гостеприимство без лишнего пафоса",
    ],
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />

      <div className="container-custom px-4 md:px-8">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm text-accent font-medium">Команда</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Люди, которые делают <span className="text-gradient">вкус</span> и атмосферу
          </h2>
          <p className="text-muted-foreground">
            В первой версии — плейсхолдеры (вы замените фото и имена на реальные).
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {people.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.role} className="premium-surface rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-2 rounded-2xl bg-accent/10 blur-xl" aria-hidden="true" />
                    <img
                      src={p.image}
                      alt={`${p.role} — ${p.name}`}
                      loading="lazy"
                      className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border border-border/60"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-accent mb-1">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{p.role}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-tight">
                      {p.name}
                    </h3>

                    <ul className="mt-4 space-y-2 text-sm md:text-base text-foreground/80">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span className="min-w-0">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
