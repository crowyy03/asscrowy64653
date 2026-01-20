import { Music, Wine, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">О ресторане</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Петербург в каждом <span className="text-gradient">глотке</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">«В Питере Пить»</strong> — это не просто рестобар. 
                Это место, где атмосфера Северной столицы сочетается с авторской кухней 
                и уникальной коллекцией напитков.
              </p>
              <p>
                Мы создали пространство, где каждый вечер — особенный. Наши авторские настойки 
                и коктейли вдохновлены духом Петербурга, а меню объединяет лучшие традиции 
                семи кухонь мира.
              </p>
              <p>
                По вечерам в зале звучит русский рок — музыка, которая создаёт неповторимую 
                атмосферу ностальгии и уюта.
              </p>
            </div>

            {/* Mini features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Wine className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Авторские настойки</h4>
                  <p className="text-xs text-muted-foreground">Уникальные рецепты</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Music className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Русский рок</h4>
                  <p className="text-xs text-muted-foreground">Живая атмосфера</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Интерьер ресторана"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Авторский коктейль"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Блюдо ресторана"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Барная стойка"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
