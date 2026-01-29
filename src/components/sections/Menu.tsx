import { useState } from "react";
import { UtensilsCrossed, Coffee, Wine, Briefcase, Download, Beer, Grape, GlassWater } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// ============ MENU DATA ============

const breakfastItems = [
  { name: "Омлет с лососем и грибным соусом", price: "690 ₽" },
  { name: "Овсяная каша с манго и вишневым компотэ", price: "590 ₽" },
  { name: "Шакшука с кинзой", price: "650 ₽" },
  { name: "Тост с лососем и яйцом пашот", price: "550 ₽" },
  { name: "Тост с беконом и яйцом пашот", price: "450 ₽" },
  { name: "Сырники со сметаной и вишневым компотэ", price: "590 ₽" },
];

const mainMenuItems = {
  snacks: [
    { name: "Креветки «Бандитский Петербург»", price: "820 ₽" },
    { name: "Креветки темпура с манго", price: "690 ₽" },
    { name: "Тартар из тунца с апельсином", price: "670 ₽" },
    { name: "Куриные крылья в сладком чили", price: "720 ₽" },
    { name: "Селедка с луком и бородинским хлебом", price: "460 ₽" },
    { name: "Жареная моцарелла со смородиновым компотэ", price: "560 ₽" },
    { name: "Запеченный камамбер", price: "980 ₽" },
    { name: "Картофель фри с жареным луком и соусом", price: "400 ₽" },
    { name: "Жареные охотничьи колбаски с крутонами", price: "800 ₽" },
    { name: "Большой сет колбасок на 3–4 персоны", price: "2200 ₽" },
    { name: "Крутоны с чесночным соусом и пармезаном", price: "400 ₽" },
    { name: "Сыры с медом и орехами", price: "1250 ₽" },
    { name: "Острые куриные крылья с соусом тартар", price: "730 ₽" },
    { name: "Фисташки", price: "550 ₽", volume: "100 г" },
    { name: "Арахис", price: "390 ₽", volume: "100 г" },
  ],
  hot: [
    { name: "Пельмени с мраморной говядиной", price: "750 ₽" },
    { name: "Окунь с цукини и лаймовым соусом", price: "850 ₽" },
    { name: "Филе миньон с картофельным муссом", price: "1550 ₽" },
    { name: "Сливочная паста с лососем и креветками", price: "1100 ₽" },
    { name: "Паста карбонара", price: "750 ₽" },
    { name: "Стейк из лосося с овощами гриль", price: "1550 ₽" },
    { name: "Ребра BBQ с картофелем фри", price: "1050 ₽" },
    { name: "Баварская колбаска с муссом и капустой", price: "790 ₽" },
    { name: "Бургер «В Питере Пить»", price: "990 ₽" },
  ],
  salads: [
    { name: "Оливье", price: "600 ₽" },
    { name: "Острый салат с креветками и грушей", price: "650 ₽" },
    { name: "Теплый салат с баклажаном и кинзой", price: "650 ₽" },
    { name: "Цезарь с курицей в классическом соусе", price: "690 ₽" },
    { name: "Панцанелла с сыром фета", price: "650 ₽" },
  ],
  soups: [
    { name: "Борщ с салом и сметаной", price: "730 ₽" },
    { name: "Финская сливочная уха", price: "650 ₽" },
    { name: "Куриный суп с домашней лапшой", price: "550 ₽" },
    { name: "Окрошка на кефире", price: "590 ₽" },
    { name: "Окрошка на пиве", price: "590 ₽" },
  ],
  desserts: [
    { name: "«Питерский поребрик»", price: "520 ₽" },
    { name: "Чизкейк Соленая карамель", price: "520 ₽" },
    { name: "Торт рикотта с грушей", price: "550 ₽" },
    { name: "Медовик", price: "520 ₽" },
  ],
};

const barItems = {
  draftBeer: [
    { name: "Hefeweizen", desc: "Светлое нефильтрованное", price: "550 ₽", volume: "0,5 л" },
    { name: "В Питере пить Лагер", desc: "Светлое фильтрованное", price: "520 ₽", volume: "0,5 л" },
    { name: "Karlovec Svetly Lezak", desc: "Светлое фильтрованное", price: "780 ₽", volume: "0,5 л" },
    { name: "Blanche Biere", desc: "Светлое нефильтрованное", price: "510 ₽", volume: "0,5 л" },
    { name: "Milk Stout", desc: "Темное", price: "630 ₽", volume: "0,5 л" },
    { name: "Bourgogne des Flandres", desc: "Темное с нотками вишни", price: "980 ₽", volume: "0,5 л" },
    { name: "Rouge de Brabant", desc: "Фруктовое (Вишня)", price: "980 ₽", volume: "0,5 л" },
    { name: "В Питере пить IPA", desc: "Светлое нефильтрованное", price: "620 ₽", volume: "0,5 л" },
  ],
  bottledBeer: [
    { name: "Starlingtons Day in Paradise", desc: "Эль, Англия", price: "680 ₽", volume: "0,5 л" },
    { name: "Karlovec Svetly Lezak", desc: "Лагер, Чехия", price: "440 ₽", volume: "0,5 л" },
    { name: "В Питере пить Лагер", desc: "Лагер, СПб", price: "380 ₽", volume: "0,5 л" },
    { name: "Maisel's Weisse Original", desc: "Пшеничное, Германия", price: "520 ₽", volume: "0,5 л" },
    { name: "Blanche Bière", desc: "Пшеничное, Бельгия", price: "550 ₽", volume: "0,5 л" },
    { name: "Milk Stout", desc: "Стаут, СПб", price: "640 ₽", volume: "0,5 л" },
    { name: "Bourgogne des Flandres", desc: "Коричневое, Бельгия", price: "600 ₽", volume: "0,5 л" },
    { name: "Ламбруша", desc: "Пино колада с ламбиком", price: "640 ₽", volume: "0,5 л" },
    { name: "Сидр Le Jardin des fruits Cidre Brut", desc: "Сидр", price: "630 ₽", volume: "0,5 л" },
  ],
  tinctures: [
    { name: "Сет из 5-и настоек", price: "950 ₽", volume: "5 шт." },
    { name: "Имбирь", price: "220 ₽", volume: "40 мл" },
    { name: "Антифриз", price: "220 ₽", volume: "40 мл" },
    { name: "Лимончелло", price: "220 ₽", volume: "40 мл" },
    { name: "Пьяная корова", price: "220 ₽", volume: "40 мл" },
    { name: "Соленый огурец", price: "220 ₽", volume: "40 мл" },
    { name: "Свекла + лайм + розмарин", price: "220 ₽", volume: "40 мл" },
    { name: "Бородинский хлеб с чесноком", price: "220 ₽", volume: "40 мл" },
    { name: "Красная смородина", price: "220 ₽", volume: "40 мл" },
    { name: "Черная смородина", price: "220 ₽", volume: "40 мл" },
    { name: "Брусника + корица", price: "220 ₽", volume: "40 мл" },
    { name: "Облепиха", price: "220 ₽", volume: "40 мл" },
    { name: "Базилик", price: "220 ₽", volume: "40 мл" },
    { name: "Малина", price: "220 ₽", volume: "40 мл" },
    { name: "Клюква", price: "220 ₽", volume: "40 мл" },
    { name: "Вишня", price: "220 ₽", volume: "40 мл" },
  ],
  whisky: [
    { name: "Singleton 12", price: "920 ₽" },
    { name: "Bellevoye", price: "1220 ₽" },
    { name: "Writers' Tears", price: "800 ₽" },
    { name: "Jack Daniel's", price: "720 ₽" },
    { name: "Hart Brothers", price: "910 ₽" },
  ],
  wine: {
    sparkling: [
      { name: "Prosecco DOC Pitars", price: "4600 ₽" },
      { name: "Peluga Spumante bianco brut", price: "3900 ₽" },
      { name: "MVSA Brut Cava", price: "4800 ₽" },
    ],
    red: [
      { name: "Schmitt 1919 Pinot Noir", price: "4400 ₽" },
      { name: "Malbec Argenino", price: "4200 ₽" },
      { name: "Navas Crianza DOC Rioja", price: "7300 ₽" },
    ],
    white: [
      { name: "Holly Blue Vinho Verde", price: "3900 ₽" },
      { name: "Schmitt Landwein Riesling", price: "4150 ₽" },
    ],
  },
  spirits: [
    { name: "Онегин", desc: "Водка", price: "370 ₽" },
    { name: "Мамонт", desc: "Водка", price: "420 ₽" },
    { name: "Drumshanbo Gunpowder", desc: "Джин", price: "750 ₽" },
    { name: "Puerto de Indias Strawberry", desc: "Джин", price: "650 ₽" },
    { name: "Hine Rare VSOP", desc: "Коньяк", price: "1980 ₽" },
    { name: "Maxime Trijol VSOP", desc: "Коньяк", price: "1750 ₽" },
    { name: "Frapin Chateau de Fontpinot XO", desc: "Коньяк", price: "2480 ₽" },
    { name: "Jägermeister", desc: "Ликер", price: "500 ₽" },
    { name: "Campari", desc: "Вермут", price: "500 ₽" },
    { name: "Ley 925 Blanco", desc: "Текила", price: "580 ₽" },
  ],
  nonAlcoholic: [
    { name: "Мохито", desc: "Лимонад", price: "600 ₽" },
    { name: "Клубника-Апельсин", desc: "Лимонад", price: "600 ₽" },
    { name: "Манго-маракуйя", desc: "Лимонад", price: "600 ₽" },
    { name: "Лимонад собственного приготовления", price: "270 ₽" },
    { name: "Кока-Кола", price: "250 ₽" },
    { name: "Сок", price: "250 ₽" },
    { name: "Вода SanBenedetto", price: "250 ₽" },
    { name: "Молочный коктейль", desc: "Ваниль / Шоколад / Клубника", price: "550 ₽" },
  ],
  coffee: [
    { name: "Эспрессо", price: "170 ₽" },
    { name: "Двойной эспрессо", price: "220 ₽" },
    { name: "Американо", price: "250 ₽" },
    { name: "Капучино", price: "310 ₽" },
    { name: "Латте", price: "330 ₽" },
    { name: "Раф", price: "350 ₽" },
    { name: "Айс латте", price: "350 ₽" },
    { name: "Флэт Уайт", price: "330 ₽" },
    { name: "Горячий шоколад", price: "330 ₽" },
  ],
  tea: [
    { name: "Молочный улун", price: "300 ₽" },
    { name: "Вечерний / Черный / Пуэр / Имбирный с медом", price: "350 ₽" },
    { name: "Согревающий чебрец / яблоко-мед", price: "350 ₽" },
  ],
  fresh: [
    { name: "Апельсин", desc: "Фреш", price: "400 ₽" },
    { name: "Грейпфрут", desc: "Фреш", price: "400 ₽" },
  ],
};

const lunchItems = [
  { 
    name: "Бизнес-ланч", 
    desc: "2 сета на выбор • Будни 12:30–14:30", 
    price: "650 ₽" 
  },
];

// ============ MENU COMPONENTS ============

const MenuItem = ({ item }: { item: { name: string; desc?: string; price: string; volume?: string } }) => (
  <div className="flex items-start justify-between gap-4 py-3 border-b border-border/20 last:border-0">
    <div className="min-w-0">
      <h4 className="text-foreground font-medium text-sm md:text-base">{item.name}</h4>
      {item.desc && <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>}
    </div>
    <div className="text-right shrink-0">
      <span className="text-accent font-semibold text-sm">{item.price}</span>
      {item.volume && <p className="text-muted-foreground text-xs">{item.volume}</p>}
    </div>
  </div>
);

const MenuSection = ({ title, items }: { title: string; items: Array<{ name: string; desc?: string; price: string; volume?: string }> }) => (
  <div className="mb-8 last:mb-0">
    <h3 className="font-display text-lg font-semibold text-foreground mb-4 pb-2 border-b border-accent/20">
      {title}
    </h3>
    <div>
      {items.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </div>
  </div>
);

// ============ BAR SUB-TABS ============

const barSubCategories = [
  { id: "beer", label: "Пиво", icon: Beer },
  { id: "tinctures", label: "Настойки", icon: Wine },
  { id: "wine", label: "Вино", icon: Grape },
  { id: "spirits", label: "Крепкое", icon: Wine },
  { id: "soft", label: "Безалкогольное", icon: GlassWater },
  { id: "coffee", label: "Кофе/Чай", icon: Coffee },
];

const BarContent = () => {
  const [subTab, setSubTab] = useState("beer");

  return (
    <div>
      {/* Sub-tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {barSubCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSubTab(cat.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              subTab === cat.id
                ? "bg-accent text-accent-foreground"
                : "bg-card/50 text-foreground/70 hover:bg-card hover:text-foreground border border-border/30"
            }`}
          >
            <cat.icon className="w-4 h-4" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {subTab === "beer" && (
          <>
            <MenuSection title="Разливное пиво" items={barItems.draftBeer} />
            <MenuSection title="Бутылочное пиво" items={barItems.bottledBeer} />
          </>
        )}
        {subTab === "tinctures" && (
          <div className="md:col-span-2">
            <MenuSection title="Авторские настойки" items={barItems.tinctures} />
          </div>
        )}
        {subTab === "wine" && (
          <>
            <MenuSection title="Игристое" items={barItems.wine.sparkling} />
            <MenuSection title="Красное" items={barItems.wine.red} />
            <MenuSection title="Белое" items={barItems.wine.white} />
          </>
        )}
        {subTab === "spirits" && (
          <>
            <MenuSection title="Виски" items={barItems.whisky} />
            <MenuSection title="Крепкий алкоголь" items={barItems.spirits} />
          </>
        )}
        {subTab === "soft" && (
          <div className="md:col-span-2">
            <MenuSection title="Безалкогольные напитки" items={barItems.nonAlcoholic} />
            <MenuSection title="Фреши" items={barItems.fresh} />
          </div>
        )}
        {subTab === "coffee" && (
          <>
            <MenuSection title="Кофе" items={barItems.coffee} />
            <MenuSection title="Чай и согревающие" items={barItems.tea} />
          </>
        )}
      </div>
    </div>
  );
};

// ============ MAIN MENU COMPONENT ============

const menuCategories = [
  { id: "breakfast", label: "Завтраки", icon: Coffee },
  { id: "main", label: "Основное меню", icon: UtensilsCrossed },
  { id: "bar", label: "Карта бара", icon: Wine },
  { id: "lunch", label: "Бизнес-ланч", icon: Briefcase },
];

const Menu = () => {
  return (
    <section id="menu" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, hsl(var(--accent) / 0.04) 0%, transparent 60%)',
        filter: 'blur(80px)',
      }} />

      <div className="container-custom px-4 md:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="section-label mb-6">
            <UtensilsCrossed className="w-4 h-4" />
            <span>Меню</span>
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <TabsList className="flex flex-wrap justify-start gap-2 bg-transparent h-auto p-0">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-border/30 bg-card/30 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent transition-all"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="font-medium">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Download PDF button */}
            <Button
              variant="outline"
              className="border-accent/30 text-foreground/70 hover:text-accent hover:border-accent/50 shrink-0"
            >
              <Download className="w-4 h-4 mr-2" />
              Скачать PDF
            </Button>
          </div>

          {/* Breakfast */}
          <TabsContent value="breakfast" className="mt-0">
            <div className="glass-card p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <MenuSection title="Завтраки" items={breakfastItems} />
              </div>
            </div>
          </TabsContent>

          {/* Main Menu */}
          <TabsContent value="main" className="mt-0">
            <div className="glass-card p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <MenuSection title="Закуски" items={mainMenuItems.snacks} />
                <MenuSection title="Горячие блюда" items={mainMenuItems.hot} />
                <MenuSection title="Салаты" items={mainMenuItems.salads} />
                <MenuSection title="Супы" items={mainMenuItems.soups} />
                <MenuSection title="Десерты" items={mainMenuItems.desserts} />
              </div>
            </div>
          </TabsContent>

          {/* Bar */}
          <TabsContent value="bar" className="mt-0">
            <div className="glass-card p-6 md:p-8">
              <BarContent />
            </div>
          </TabsContent>

          {/* Lunch */}
          <TabsContent value="lunch" className="mt-0">
            <div className="glass-card p-6 md:p-8">
              <div className="max-w-md">
                <MenuSection title="Бизнес-ланч" items={lunchItems} />
                <p className="text-sm text-muted-foreground mt-4">
                  Действует по будням с 12:30 до 14:30. Два сета на выбор — уточняйте у официанта.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
