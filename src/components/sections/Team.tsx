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
      <div className="container-custom px-4 md:px-8">
        <header className="max-w-2xl mb-10">
          <div className="section-label mb-6">
            <span>Команда</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Люди, которые создают <span className="text-gradient">атмосферу</span>
          </h2>
          <p className="text-muted-foreground">
            Замените фото и имена на реальные — это плейсхолдеры
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-5">
          {people.map((p) => {
            const Icon = p.icon;
            return (
              <article 
                key={p.role} 
                className="group p-6 md:p-8 rounded-2xl bg-card/40 border border-border/25 hover:border-accent/15 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  {/* Portrait */}
                  <div className="relative shrink-0">
                    <img
                      src={p.image}
                      alt={`${p.role} — ${p.name}`}
                      loading="lazy"
                      className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-border/40"
                    />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-accent mb-1">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{p.role}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-tight mb-3">
                      {p.name}
                    </h3>

                    <ul className="space-y-1.5 text-sm text-foreground/70">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span>{b}</span>
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
