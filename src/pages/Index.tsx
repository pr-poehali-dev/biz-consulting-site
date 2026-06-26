import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/969f2789-1666-441d-a5f5-14f06f9e06d4/files/5b066eae-26a0-4b4f-8769-ed1aa9c2a426.jpg';

const NAV = [
  { id: 'services', label: 'Услуги' },
  { id: 'about', label: 'О компании' },
  { id: 'cases', label: 'Кейсы' },
  { id: 'team', label: 'Команда' },
  { id: 'blog', label: 'Блог' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  {
    icon: 'TrendingUp',
    title: 'Стратегический консалтинг',
    desc: 'Финансовая модель, точки роста и план развития на 12 месяцев.',
    price: 60000,
  },
  {
    icon: 'Calculator',
    title: 'Бухгалтерское обслуживание',
    desc: 'Полное ведение учёта, отчётность и оптимизация налогов.',
    price: 25000,
  },
  {
    icon: 'Truck',
    title: 'Логистика и цепочки поставок',
    desc: 'Снижаем издержки на доставку и выстраиваем складские процессы.',
    price: 45000,
  },
  {
    icon: 'Scale',
    title: 'Юридическое сопровождение',
    desc: 'Договоры, проверки контрагентов и защита интересов бизнеса.',
    price: 30000,
  },
  {
    icon: 'Users',
    title: 'HR и процессы',
    desc: 'Найм, регламенты и система мотивации команды.',
    price: 35000,
  },
  {
    icon: 'LineChart',
    title: 'Маркетинг и продажи',
    desc: 'Воронка продаж, аналитика и план привлечения клиентов.',
    price: 40000,
  },
];

const CASES = [
  { tag: 'Розница', title: 'Сеть кофеен', result: '+38% выручки за полгода', desc: 'Перестроили учёт и логистику закупок.' },
  { tag: 'Производство', title: 'Мебельный цех', result: '−22% издержек', desc: 'Оптимизировали цепочку поставок сырья.' },
  { tag: 'Услуги', title: 'Студия дизайна', result: '×2 чистая прибыль', desc: 'Внедрили финмодель и налоговую оптимизацию.' },
];

const TEAM = [
  { name: 'Анна Соколова', role: 'Управляющий партнёр', exp: '15 лет в стратегии' },
  { name: 'Дмитрий Орлов', role: 'Главный бухгалтер', exp: '12 лет в учёте' },
  { name: 'Игорь Власов', role: 'Эксперт по логистике', exp: '10 лет в цепочках поставок' },
  { name: 'Мария Левина', role: 'Юрист', exp: '11 лет практики' },
];

const REVIEWS = [
  { name: 'Сергей М.', company: 'ООО «ВкусДом»', text: 'За три месяца навели порядок в бухгалтерии и помогли сэкономить на налогах. Чёткие, системные ребята.' },
  { name: 'Ольга К.', company: 'ИП Кравцова', text: 'Логистику пересобрали полностью — доставка стала дешевле и быстрее. Рекомендую малому бизнесу.' },
  { name: 'Артём Б.', company: 'Студия «Контур»', text: 'Стратегическая сессия дала понимание, куда двигаться. Прибыль выросла в два раза за год.' },
];

const BLOG = [
  { tag: 'Налоги', title: 'Как малому бизнесу законно снизить налоговую нагрузку в 2026', date: '18 июня' },
  { tag: 'Логистика', title: '5 ошибок в складском учёте, которые съедают вашу прибыль', date: '11 июня' },
  { tag: 'Стратегия', title: 'Финмодель за один вечер: пошаговый разбор', date: '3 июня' },
];

const fmt = (n: number) => n.toLocaleString('ru-RU');

const Index = () => {
  const [selected, setSelected] = useState<number[]>([0]);

  const toggle = (i: number) =>
    setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  const total = selected.reduce((sum, i) => sum + SERVICES[i].price, 0);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-sand text-navy font-sans antialiased">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-sand/80 backdrop-blur-md border-b border-navy/10">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center">
              <Icon name="Compass" className="text-sand" size={20} />
            </div>
            <span className="font-display text-2xl font-700 tracking-tight">Меридиан</span>
          </button>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-500 text-navy/70 hover:text-navy transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => scrollTo('contacts')}
            className="bg-navy text-sand hover:bg-navy/90 rounded-full px-6"
          >
            Консультация
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="pt-36 pb-24 lg:pt-44">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-600 uppercase tracking-[0.2em] text-clay mb-6">
              <span className="w-8 h-px bg-clay" /> Консалтинг для малого бизнеса
            </span>
            <h1 className="font-display text-5xl lg:text-7xl leading-[1.05] font-600 mb-6">
              Системный рост вашего&nbsp;дела
            </h1>
            <p className="text-lg text-navy/70 max-w-md mb-8 leading-relaxed">
              Стратегия, бухгалтерия и логистика в одних руках. Наводим порядок в бизнесе
              и растим прибыль — спокойно и предсказуемо.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo('calculator')}
                className="bg-navy text-sand hover:bg-navy/90 rounded-full px-8 h-12 text-base"
              >
                Рассчитать стоимость
              </Button>
              <Button
                onClick={() => scrollTo('cases')}
                variant="outline"
                className="border-navy/30 text-navy hover:bg-navy hover:text-sand rounded-full px-8 h-12 text-base"
              >
                Смотреть кейсы
              </Button>
            </div>
            <div className="flex gap-10 mt-12">
              {[
                ['12 лет', 'на рынке'],
                ['340+', 'клиентов'],
                ['98%', 'продлевают'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-600">{n}</div>
                  <div className="text-sm text-navy/60">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            <div className="absolute -inset-4 bg-clay/20 rounded-[2rem] rotate-3" />
            <img
              src={HERO_IMG}
              alt="Команда консультантов"
              className="relative rounded-[2rem] w-full object-cover aspect-[4/5] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="container">
          <SectionTitle eyebrow="Услуги" title="Что мы берём на себя" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-navy/10 hover:border-navy/30 hover:shadow-xl transition-all bg-sand/40"
              >
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:bg-clay transition-colors">
                  <Icon name={s.icon} className="text-sand" size={22} />
                </div>
                <h3 className="font-display text-2xl font-600 mb-3">{s.title}</h3>
                <p className="text-navy/65 leading-relaxed mb-4">{s.desc}</p>
                <div className="text-sm font-600 text-clay">от {fmt(s.price)} ₽/мес</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-24">
        <div className="container max-w-5xl">
          <SectionTitle eyebrow="Калькулятор" title="Рассчитайте стоимость услуг" />
          <div className="grid lg:grid-cols-5 gap-8 mt-14">
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {SERVICES.map((s, i) => {
                const active = selected.includes(i);
                return (
                  <button
                    key={i}
                    onClick={() => toggle(i)}
                    className={`text-left p-5 rounded-xl border transition-all ${
                      active
                        ? 'bg-navy text-sand border-navy'
                        : 'bg-white border-navy/15 hover:border-navy/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon name={s.icon} size={20} className={active ? 'text-clay' : 'text-navy'} />
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                          active ? 'bg-clay border-clay' : 'border-navy/30'
                        }`}
                      >
                        {active && <Icon name="Check" size={14} className="text-navy" />}
                      </div>
                    </div>
                    <div className="font-600 text-sm leading-snug">{s.title}</div>
                    <div className={`text-xs mt-1 ${active ? 'text-sand/70' : 'text-navy/50'}`}>
                      от {fmt(s.price)} ₽
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-28 p-8 rounded-2xl bg-navy text-sand">
                <div className="text-sm uppercase tracking-widest text-sand/60 mb-2">Итого в месяц</div>
                <div className="font-display text-5xl font-600 mb-1">{fmt(total)} ₽</div>
                <div className="text-sand/60 text-sm mb-6">
                  Выбрано услуг: {selected.length}
                </div>
                <div className="h-px bg-sand/20 mb-6" />
                <ul className="space-y-2 mb-6 text-sm">
                  {selected.length === 0 && (
                    <li className="text-sand/50">Выберите услуги слева</li>
                  )}
                  {selected.map((i) => (
                    <li key={i} className="flex justify-between">
                      <span className="text-sand/80">{SERVICES[i].title}</span>
                      <span className="text-sand/60">{fmt(SERVICES[i].price)} ₽</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollTo('contacts')}
                  className="w-full bg-clay text-navy hover:bg-clay/90 rounded-full h-12 font-600"
                >
                  Оставить заявку
                </Button>
                <p className="text-xs text-sand/50 mt-3 text-center">
                  Точную смету подберём на бесплатной консультации
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle eyebrow="О компании" title="Партнёр, а не подрядчик" align="left" />
            <p className="text-lg text-navy/70 leading-relaxed mt-6 mb-6">
              «Меридиан» — команда практиков, которая понимает боли малого бизнеса.
              Мы не пишем толстые отчёты в стол: мы внедряем изменения и отвечаем
              за результат вместе с вами.
            </p>
            <div className="space-y-4">
              {[
                ['ShieldCheck', 'Прозрачные условия без скрытых платежей'],
                ['Clock', 'Отвечаем в течение часа в рабочее время'],
                ['Target', 'Фокус на измеримом росте прибыли'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center shrink-0">
                    <Icon name={icon} size={18} className="text-clay" />
                  </div>
                  <span className="text-navy/80">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['340+', 'проектов реализовано'],
              ['12 лет', 'опыта на рынке'],
              ['₽1.2 млрд', 'сэкономлено клиентам'],
              ['98%', 'остаются с нами'],
            ].map(([n, l]) => (
              <div key={l} className="p-8 rounded-2xl bg-sand text-center">
                <div className="font-display text-4xl font-600 text-navy mb-2">{n}</div>
                <div className="text-sm text-navy/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24">
        <div className="container">
          <SectionTitle eyebrow="Кейсы" title="Результаты наших клиентов" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {CASES.map((c) => (
              <div key={c.title} className="p-8 rounded-2xl bg-navy text-sand">
                <span className="text-xs uppercase tracking-widest text-clay">{c.tag}</span>
                <h3 className="font-display text-2xl font-600 mt-3 mb-4">{c.title}</h3>
                <div className="font-display text-3xl font-600 text-clay mb-3">{c.result}</div>
                <p className="text-sand/70 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 bg-white">
        <div className="container">
          <SectionTitle eyebrow="Команда" title="Эксперты, которые ведут вас" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {TEAM.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="aspect-square rounded-2xl bg-sand mb-5 flex items-center justify-center overflow-hidden">
                  <span className="font-display text-5xl font-600 text-navy/30 group-hover:text-clay transition-colors">
                    {m.name.split(' ').map((w) => w[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-600">{m.name}</h3>
                <div className="text-clay text-sm font-600 mt-1">{m.role}</div>
                <div className="text-navy/50 text-sm mt-1">{m.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24">
        <div className="container">
          <SectionTitle eyebrow="Отзывы" title="Что говорят клиенты" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-8 rounded-2xl bg-white border border-navy/10">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-clay fill-clay" />
                  ))}
                </div>
                <p className="text-navy/75 leading-relaxed mb-6">«{r.text}»</p>
                <div className="font-600">{r.name}</div>
                <div className="text-sm text-navy/50">{r.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 bg-white">
        <div className="container">
          <SectionTitle eyebrow="Блог" title="Полезное для бизнеса" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {BLOG.map((b) => (
              <article
                key={b.title}
                className="group p-8 rounded-2xl bg-sand/50 hover:bg-sand transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs uppercase tracking-widest text-clay">{b.tag}</span>
                  <span className="text-xs text-navy/40">{b.date}</span>
                </div>
                <h3 className="font-display text-2xl font-600 leading-snug mb-6">{b.title}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-600 text-navy group-hover:gap-3 transition-all">
                  Читать <Icon name="ArrowRight" size={16} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 p-10 lg:p-14 rounded-[2rem] bg-navy text-sand">
            <div>
              <span className="text-xs font-600 uppercase tracking-[0.2em] text-clay">Контакты</span>
              <h2 className="font-display text-4xl lg:text-5xl font-600 mt-4 mb-6 leading-tight">
                Запишитесь на бесплатную консультацию
              </h2>
              <p className="text-sand/70 mb-8 leading-relaxed">
                Разберём вашу ситуацию, найдём точки роста и предложим план — без обязательств.
              </p>
              <div className="space-y-4">
                {[
                  ['Phone', '+7 (495) 120-45-67'],
                  ['Mail', 'hello@meridian.ru'],
                  ['MapPin', 'Москва, ул. Пресненская, 12'],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-4">
                    <Icon name={icon} size={18} className="text-clay" />
                    <span className="text-sand/85">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-sand text-navy rounded-2xl p-8 space-y-4"
            >
              <Input
                placeholder="Ваше имя"
                className="bg-white border-navy/15 h-12 rounded-xl"
              />
              <Input
                placeholder="Телефон или e-mail"
                className="bg-white border-navy/15 h-12 rounded-xl"
              />
              <Textarea
                placeholder="Коротко о задаче"
                className="bg-white border-navy/15 rounded-xl min-h-28"
              />
              <Button className="w-full bg-navy text-sand hover:bg-navy/90 rounded-full h-12 font-600">
                Отправить заявку
              </Button>
              <p className="text-xs text-navy/50 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-navy text-sand/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Compass" size={18} className="text-clay" />
            <span className="font-display text-xl font-600 text-sand">Меридиан</span>
          </div>
          <div className="text-sm">© 2026 Меридиан. Консалтинг для малого бизнеса.</div>
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({
  eyebrow,
  title,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  align?: 'center' | 'left';
}) => (
  <div className={align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}>
    <span
      className={`inline-flex items-center gap-2 text-xs font-600 uppercase tracking-[0.2em] text-clay mb-4 ${
        align === 'center' ? 'justify-center' : ''
      }`}
    >
      <span className="w-8 h-px bg-clay" /> {eyebrow}
    </span>
    <h2 className="font-display text-4xl lg:text-5xl font-600 leading-tight">{title}</h2>
  </div>
);

export default Index;
