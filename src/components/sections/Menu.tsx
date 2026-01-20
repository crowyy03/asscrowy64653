import { useState } from "react";
import { UtensilsCrossed, Coffee, Wine, Briefcase } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuCategories = [
  {
    id: "breakfast",
    label: "Завтраки",
    icon: Coffee,
    items: [
      {
        name: "Сырники со сметаной",
        description: "Домашние сырники с ванилью, подаются со сметаной и ягодным соусом",
        price: "390₽",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Яйца Бенедикт",
        description: "Пашот на булочке бриошь с голландским соусом и беконом",
        price: "490₽",
        image: "https://images.unsplash.com/photo-1608039829572-97f9e4e82e30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Авокадо-тост",
        description: "Тост из ремесленного хлеба с авокадо, яйцом пашот и микрозеленью",
        price: "420₽",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "main",
    label: "Основное",
    icon: UtensilsCrossed,
    items: [
      {
        name: "Стейк Рибай",
        description: "Мраморная говядина Black Angus, обжаренная на гриле с соусом демиглас",
        price: "1890₽",
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Паста с морепродуктами",
        description: "Спагетти с креветками, мидиями и кальмарами в сливочном соусе",
        price: "890₽",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Утиная грудка",
        description: "Томлёная утка с вишнёвым соусом и пюре из сельдерея",
        price: "1290₽",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "bar",
    label: "Карта бара",
    icon: Wine,
    items: [
      {
        name: "Петербургский закат",
        description: "Авторский коктейль на основе настойки на клюкве с апельсином",
        price: "490₽",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Белые ночи",
        description: "Освежающий коктейль с джином, бузиной и тоником",
        price: "450₽",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Настойка «Невская»",
        description: "Фирменная настойка на кедровых орешках и травах",
        price: "350₽",
        image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "lunch",
    label: "Бизнес-ланч",
    icon: Briefcase,
    items: [
      {
        name: "Комплекс «Стандарт»",
        description: "Салат + суп + горячее + напиток на выбор",
        price: "650₽",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Комплекс «Премиум»",
        description: "Расширенный выбор блюд с десертом",
        price: "850₽",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Суп дня",
        description: "Спрашивайте у официанта о супе дня",
        price: "250₽",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="section-padding relative overflow-hidden">
      <div className="container-custom px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <UtensilsCrossed className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Наше меню</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Вкусы <span className="text-gradient">Петербурга</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Семь кухонь мира в одном месте — от классических русских блюд до изысканных европейских рецептов
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-10 bg-transparent h-auto p-0">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-border/50 bg-card/50 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent transition-all"
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="group glass-card overflow-hidden hover-lift"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex justify-between items-start gap-3 mb-2">
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <span className="text-accent font-semibold whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
