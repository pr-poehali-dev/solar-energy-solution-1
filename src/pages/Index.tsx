import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';

const HERO_IMG = 'https://cdn.poehali.dev/projects/cbb4b150-512d-46c0-9d5a-f8c6739870aa/files/0ab0c3e6-f705-4684-a19e-2354e9b8e834.jpg';
const WORK_IMG = 'https://cdn.poehali.dev/projects/cbb4b150-512d-46c0-9d5a-f8c6739870aa/files/71be4513-bf75-4e85-9f0b-4c828978db53.jpg';

const NAV = [
  { label: 'Главная', href: '#home' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Услуги', href: '#services' },
  { label: 'Калькулятор', href: '#calc' },
  { label: 'Новости', href: '#news' },
  { label: 'Контакты', href: '#contacts' },
];

const ADVANTAGES = [
  { icon: 'ShieldCheck', title: '7 лет на рынке СПб', text: 'Более 240 станций установлено в Ленинградской области под ключ' },
  { icon: 'Zap', title: 'Свет всегда', text: 'Автономный резерв: пока район во тьме — ваш дом сияет' },
  { icon: 'Wrench', title: 'Свой монтаж', text: 'Штатные инженеры, без подрядчиков. Гарантия 25 лет на панели' },
  { icon: 'Leaf', title: 'Чистая энергия', text: 'Экономия до 90% на электричестве и забота о природе региона' },
];

const CATALOG = [
  { type: 'Панели', icon: 'PanelTop', items: '450–550 Вт', price: 'от 9 900 ₽' },
  { type: 'Инверторы', icon: 'CircuitBoard', items: '3–12 кВт', price: 'от 34 000 ₽' },
  { type: 'Аккумуляторы', icon: 'BatteryCharging', items: 'LiFePO4', price: 'от 48 000 ₽' },
  { type: 'Станции', icon: 'Sun', items: 'под ключ', price: 'от 190 000 ₽' },
];

const SERVICES = [
  { icon: 'Ruler', title: 'Проектирование', text: 'Расчёт мощности, подбор оборудования под ваш дом и потребление' },
  { icon: 'HardHat', title: 'Монтаж', text: 'Установка на крышу или землю за 1–3 дня, пусконаладка под ключ' },
  { icon: 'Settings', title: 'Сервис', text: 'Обслуживание, мониторинг и гарантийная поддержка станций' },
];

const WORKS = [
  { place: 'Всеволожск', power: '8 кВт', text: 'Автономное снабжение коттеджа' },
  { place: 'Гатчина', power: '5 кВт', text: 'Гибридная станция с резервом' },
  { place: 'Выборг', power: '12 кВт', text: 'Хозяйство без подключения к сети' },
];

const REVIEWS = [
  { name: 'Андрей М.', place: 'Приозерск', text: 'Свет в посёлке отключают постоянно. Теперь смотрим кино, пока соседи ищут свечи. Спасибо команде!' },
  { name: 'Елена К.', place: 'Кировск', text: 'Поставили станцию под ключ за 2 дня. Счета за электричество упали в разы. Всё работает как часы.' },
  { name: 'Сергей В.', place: 'Тосно', text: 'Грамотный расчёт, честная цена, монтаж аккуратный. Дом полностью автономный — рекомендую.' },
];

const FILTERS = ['Все', 'Панели', 'Инверторы', 'Аккумуляторы', 'Станции'];

const Index = () => {
  const [filter, setFilter] = useState('Все');
  const [power, setPower] = useState([5]);
  const [consumption, setConsumption] = useState('300');

  const panels = Math.ceil((power[0] * 1000) / 500);
  const area = Math.round(panels * 2.2);
  const cost = power[0] * 95000;
  const saving = Math.round(Number(consumption || 0) * 6.5 * 12);

  const visibleCatalog = filter === 'Все' ? CATALOG : CATALOG.filter((c) => c.type === filter);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-forest-deep">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-solar text-forest-deep">
              <Icon name="Sun" size={20} />
            </div>
            <span className="font-heading text-xl tracking-wider">47<span className="text-forest">VOLTS</span></span>
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/70 hover:text-forest transition-colors">{n.label}</a>
            ))}
          </nav>
          <a href="tel:+78120000000" className="hidden sm:block">
            <Button className="bg-forest text-white hover:bg-forest-deep font-semibold">+7 (812) 000-00-00</Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-16 min-h-[92vh] flex items-center overflow-hidden">
        <img src={HERO_IMG} alt="Солнечная электростанция в Ленинградской области" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/40" />
        <div className="container relative py-20">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-solar/15 border border-solar/30 px-4 py-1.5 text-sm font-medium text-solar mb-6">
              <Icon name="MapPin" size={15} /> Санкт-Петербург и Ленинградская область
            </span>
            <h1 className="text-5xl md:text-7xl text-white leading-[0.95] mb-6 text-balance">
              Когда у всех темнота — <span className="text-solar">у вас есть свет</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Солнечные электростанции под ключ. Автономный резервный источник энергии для вашего дома.
              Хватит зависеть от дырявой сети — твоя энергия, твои правила.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#calc"><Button size="lg" className="bg-solar text-forest-deep hover:bg-solar/90 font-semibold text-base h-12 px-7">Рассчитать станцию</Button></a>
              <a href="#catalog"><Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 h-12 px-7">Каталог оборудования</Button></a>
            </div>
            <div className="flex gap-8 mt-12">
              {[['240+', 'станций'], ['25 лет', 'гарантия'], ['90%', 'экономия']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-heading text-3xl text-solar">{n}</div>
                  <div className="text-sm text-white/60">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 grain">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-leaf font-semibold tracking-wider text-sm uppercase">Почему 47Volts</span>
            <h2 className="text-4xl md:text-5xl mt-3">Независимость от электросети</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((a) => (
              <Card key={a.title} className="p-7 hover-lift border-border bg-card">
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-leaf/10 text-leaf mb-5 h-12 w-12">
                  <Icon name={a.icon} size={26} />
                </div>
                <h3 className="text-lg mb-2 normal-case font-heading">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-secondary/40">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-leaf font-semibold tracking-wider text-sm uppercase">Каталог</span>
              <h2 className="text-4xl md:text-5xl mt-3">Оборудование под ключ</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button key={f} onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === f ? 'bg-forest text-white' : 'bg-white text-forest border border-border hover:bg-accent'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleCatalog.map((c) => (
              <Card key={c.type} className="group overflow-hidden hover-lift bg-card">
                <div className="aspect-[4/3] bg-gradient-to-br from-forest to-forest-deep flex items-center justify-center text-solar">
                  <Icon name={c.icon} size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl normal-case font-heading mb-1">{c.type}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{c.items}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg text-forest">{c.price}</span>
                    <Icon name="ArrowRight" size={18} className="text-leaf group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-leaf font-semibold tracking-wider text-sm uppercase">Услуги</span>
            <h2 className="text-4xl md:text-5xl mt-3">Полный цикл работ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Card key={s.title} className="p-8 relative overflow-hidden hover-lift bg-card">
                <span className="absolute -top-4 -right-2 font-heading text-8xl text-accent select-none">{i + 1}</span>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-solar mb-5">
                    <Icon name={s.icon} size={24} />
                  </div>
                  <h3 className="text-xl normal-case font-heading mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" className="py-24 bg-forest-deep text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-solar/20 blur-3xl animate-glow" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-solar font-semibold tracking-wider text-sm uppercase">Калькулятор</span>
              <h2 className="text-4xl md:text-5xl mt-3 mb-5 text-white">Рассчитайте свою станцию</h2>
              <p className="text-white/70 mb-8 max-w-md">Подберите мощность под ваш дом и узнайте примерную стоимость и экономию за минуту.</p>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-white/80">Мощность станции</label>
                    <span className="font-heading text-solar text-xl">{power[0]} кВт</span>
                  </div>
                  <Slider value={power} onValueChange={setPower} min={1} max={20} step={1} />
                </div>
                <div>
                  <label className="text-white/80 block mb-3">Потребление в месяц, кВт·ч</label>
                  <Input value={consumption} onChange={(e) => setConsumption(e.target.value.replace(/\D/g, ''))}
                    className="bg-white/10 border-white/20 text-white h-12 text-lg" placeholder="300" />
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white text-foreground">
              <h3 className="text-2xl normal-case font-heading mb-6">Ваша станция</h3>
              <div className="space-y-4 mb-7">
                {[
                  ['Solar', 'Панелей 500 Вт', `${panels} шт`],
                  ['Maximize', 'Площадь крыши', `~${area} м²`],
                  ['Wallet', 'Экономия в год', `${saving.toLocaleString('ru-RU')} ₽`],
                ].map(([icon, label, val]) => (
                  <div key={label} className="flex items-center justify-between border-b border-border pb-3">
                    <span className="flex items-center gap-3 text-muted-foreground">
                      <Icon name={icon} size={20} className="text-leaf" /> {label}
                    </span>
                    <span className="font-heading text-lg">{val}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-accent p-5 mb-6 text-center">
                <div className="text-sm text-muted-foreground mb-1">Стоимость под ключ</div>
                <div className="font-heading text-4xl text-forest">{cost.toLocaleString('ru-RU')} ₽</div>
              </div>
              <Button className="w-full bg-solar text-forest-deep hover:bg-solar/90 font-semibold h-12 text-base">Получить точный расчёт</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* WORKS / PORTFOLIO */}
      <section id="news" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-leaf font-semibold tracking-wider text-sm uppercase">Портфолио</span>
            <h2 className="text-4xl md:text-5xl mt-3">Наши работы в области</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {WORKS.map((w) => (
              <Card key={w.place} className="group overflow-hidden hover-lift bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={WORK_IMG} alt={`Станция в ${w.place}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-solar px-3 py-1 text-sm font-semibold text-forest-deep">{w.power}</span>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-heading text-xl flex items-center gap-1.5"><Icon name="MapPin" size={16} className="text-solar" />{w.place}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground">{w.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-leaf font-semibold tracking-wider text-sm uppercase">Отзывы</span>
            <h2 className="text-4xl md:text-5xl mt-3">Нам доверяют дома региона</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <Card key={r.name} className="p-7 bg-card hover-lift">
                <div className="flex gap-1 text-solar mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="Star" size={18} fill="currentColor" />)}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-5">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white font-heading">{r.name[0]}</div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.place}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS / CTA FORM */}
      <section id="contacts" className="py-24">
        <div className="container">
          <Card className="overflow-hidden border-0 bg-forest-deep grid lg:grid-cols-2">
            <div className="p-10 lg:p-14 text-white">
              <h2 className="text-4xl md:text-5xl text-white mb-5">Перейдите на чистую энергию сегодня</h2>
              <p className="text-white/70 mb-8 max-w-md">Оставьте заявку — инженер свяжется с вами, проведёт замеры и подготовит проект станции под ваш дом бесплатно.</p>
              <div className="space-y-4">
                {[['Phone', '+7 (812) 000-00-00'], ['Mail', 'info@47volts.ru'], ['MapPin', 'Санкт-Петербург, Ленинградская обл.']].map(([icon, val]) => (
                  <div key={val} className="flex items-center gap-3 text-white/85">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-solar"><Icon name={icon} size={18} /></div>
                    {val}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 lg:p-14">
              <h3 className="text-2xl normal-case font-heading mb-6">Заявка на расчёт</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Ваше имя" className="h-12" />
                <Input placeholder="Телефон" className="h-12" />
                <Input placeholder="Населённый пункт" className="h-12" />
                <Button className="w-full bg-solar text-forest-deep hover:bg-solar/90 font-semibold h-12 text-base">Отправить заявку</Button>
                <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest-deep text-white/60 py-12 border-t border-white/10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-solar text-forest-deep"><Icon name="Sun" size={18} /></div>
            <span className="font-heading text-lg tracking-wider">47<span className="text-solar">VOLTS</span></span>
          </div>
          <nav className="flex flex-wrap justify-center gap-5 text-sm">
            {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-solar transition-colors">{n.label}</a>)}
          </nav>
          <span className="text-sm">© 2026 47Volts.ru</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;