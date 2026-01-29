import { MessageCircle, Phone, Clock, User, Calendar, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Открываем Telegram с предзаполненным сообщением
    const message = `Бронирование стола:\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nДата: ${formData.date}\nВремя: ${formData.time}\nГостей: ${formData.guests}\nКомментарий: ${formData.comment || "—"}`;
    window.open(`https://t.me/vpiterepit1703?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/30" />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(var(--accent) / 0.06) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="section-label mb-6 mx-auto w-fit">
              <MessageCircle className="w-4 h-4" />
              <span>Бронирование</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Забронировать <span className="text-gradient">стол</span>
            </h2>

            <p className="text-muted-foreground max-w-lg mx-auto mb-6">
              Заполните форму или напишите нам напрямую — мы подберём лучший столик для вас
            </p>

            {/* Working hours */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/30">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/80">Ежедневно с 9:00 до 23:00</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                Форма бронирования
              </h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80 text-sm flex items-center gap-2">
                      <User className="w-4 h-4 text-accent" />
                      Имя
                    </Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border/40 focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80 text-sm flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background/50 border-border/40 focus:border-accent"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground/80 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      Дата
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="bg-background/50 border-border/40 focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground/80 text-sm">
                      Время
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="bg-background/50 border-border/40 focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-foreground/80 text-sm flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      Гостей
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="20"
                      placeholder="2"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="bg-background/50 border-border/40 focus:border-accent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment" className="text-foreground/80 text-sm flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    Комментарий
                  </Label>
                  <Textarea
                    id="comment"
                    placeholder="Особые пожелания, повод..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="bg-background/50 border-border/40 focus:border-accent resize-none"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold accent-glow"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Отправить в Telegram
                </Button>
              </div>
            </form>

            {/* Quick contact */}
            <div className="flex flex-col gap-4">
              <div className="glass-card p-6 md:p-8 flex-1">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Быстрая связь
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Предпочитаете написать или позвонить напрямую? Мы всегда на связи.
                </p>

                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://t.me/vpiterepit1703"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Написать в Telegram
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full border-border/40 hover:bg-card hover:border-accent/30 text-foreground"
                  >
                    <a href="tel:+79999999999" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Позвонить
                    </a>
                  </Button>
                </div>
              </div>

              {/* Extra blocks placeholders */}
              <div className="glass-card p-5 border-accent/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm">Подарочный сертификат</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Идеальный подарок для близких</p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-accent/30 text-foreground/70 hover:text-accent shrink-0"
                  >
                    <a href="https://t.me/vpiterepit1703" target="_blank" rel="noopener noreferrer">
                      Узнать
                    </a>
                  </Button>
                </div>
              </div>

              <div className="glass-card p-5 border-accent/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm">Банкеты</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Организация мероприятий</p>
                  </div>
                  <span className="text-xs text-accent font-medium px-2 py-1 rounded bg-accent/10">
                    По запросу
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
