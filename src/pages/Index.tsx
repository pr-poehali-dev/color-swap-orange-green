import Icon from '@/components/ui/icon';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/600d4174-1b44-4799-92ac-2895e57c0d83/files/86fea74c-b2ab-4801-8f5e-3c17a453306b.jpg';

const navLinks = [
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Характеристики', href: '#specs' },
  { label: 'Применение', href: '#applications' },
  { label: 'Контакты', href: '#contacts' },
];

const attachments = [
  { label: 'Снегоотвал', icon: '❄️' },
  { label: 'Щётка', icon: '🔄' },
  { label: 'Разбрасыватель', icon: '🌱' },
  { label: 'Отвал', icon: '🔧' },
  { label: 'Снегомёт', icon: '💨' },
  { label: 'Мойка', icon: '💧' },
  { label: 'Косилка', icon: '🌿' },
  { label: 'Бункер', icon: '📦' },
];

const advantages = [
  {
    title: 'Всесезонное применение',
    desc: 'Машина работает круглый год: зимой убирает снег и посыпает реагентами, летом подметает и моет покрытие. Одна машина заменяет несколько единиц техники.',
    icon: 'Calendar',
  },
  {
    title: 'Превосходная проходимость',
    desc: 'Полный привод и высокий клиренс позволяют работать в самых сложных условиях. MUVO справляется с любым покрытием: брусчаткой, плиткой, асфальтом.',
    icon: 'Gauge',
  },
  {
    title: 'Простота управления',
    desc: 'Интуитивный пульт управления навесным оборудованием. Оператор осваивает технику за несколько часов без специального обучения.',
    icon: 'MonitorSpeaker',
  },
  {
    title: 'Незаменим на тротуарах',
    desc: 'Компактные габариты машины позволяют работать там, где обычная техника не пройдёт: узкие тротуары, парковые дорожки, пешеходные зоны.',
    icon: 'MapPin',
  },
];

const specGroups = [
  {
    title: 'Двигатель',
    specs: [
      { label: 'Тип', value: 'Дизельный, 4-цилиндровый' },
      { label: 'Мощность', value: '50 л.с.' },
      { label: 'Объём', value: '2,2 л' },
      { label: 'Стандарт', value: 'Stage V / Tier 4' },
    ],
  },
  {
    title: 'Ходовая часть',
    specs: [
      { label: 'Привод', value: 'Полный (4×4)' },
      { label: 'Скорость', value: 'до 40 км/ч' },
      { label: 'Клиренс', value: '300 мм' },
      { label: 'Радиус поворота', value: '4,2 м' },
    ],
  },
  {
    title: 'Габариты',
    specs: [
      { label: 'Длина', value: '3 500 мм' },
      { label: 'Ширина', value: '1 450 мм' },
      { label: 'Высота', value: '1 950 мм' },
      { label: 'Масса', value: '2 800 кг' },
    ],
  },
  {
    title: 'Навесное оборудование',
    specs: [
      { label: 'Точек подключения', value: '3 (перед, зад, бок)' },
      { label: 'Гидравлика', value: 'До 70 л/мин' },
      { label: 'Ширина отвала', value: 'до 2 200 мм' },
      { label: 'Вместимость бункера', value: '500 л' },
    ],
  },
];

const applications = [
  { title: 'Тротуары и пешеходные зоны', desc: 'Идеальная ширина для работы на тротуарах любой конфигурации' },
  { title: 'Парки и скверы', desc: 'Бережная уборка без вреда для газонов и насаждений' },
  { title: 'Промышленные предприятия', desc: 'Обслуживание территорий заводов, складов и логистических центров' },
  { title: 'Торговые центры', desc: 'Уборка парковок и прилегающих территорий без остановки работы' },
  { title: 'Аэропорты', desc: 'Расчистка перронов и служебных проездов в любое время суток' },
  { title: 'Жилые кварталы', desc: 'Обслуживание дворовых территорий и подъездных путей' },
];

export default function Index() {
  return (
    <div style={{ fontFamily: "'Montserrat', 'Open Sans', sans-serif" }} className="bg-white text-gray-800">
      {/* HEADER */}
      <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-green-400 font-bold text-xl tracking-widest">AUTOBAU</span>
            <span className="text-gray-400 text-sm hidden sm:block">|</span>
            <span className="text-gray-300 text-sm hidden sm:block">официальный дистрибьютор MUVO</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+74999931487"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold text-sm transition-colors duration-200"
          >
            <Icon name="Phone" size={15} />
            +7 (499) 993-14-87
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded mb-4 tracking-wider uppercase">
              Официальный дистрибьютор в России
            </div>
            <h1 className="font-black text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
              Машина MUVO —{' '}
              <span className="text-green-600">мини КДМ</span>{' '}
              для уборки улиц
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Компактная коммунальная машина для круглогодичной уборки тротуаров, парков и пешеходных зон.
              8+ видов навесного оборудования.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contacts"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded transition-colors duration-200 text-base"
              >
                Получить консультацию
              </a>
              <a
                href="#advantages"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-3 rounded transition-colors duration-200 text-base"
              >
                Узнать подробнее
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={HERO_IMAGE}
              alt="Машина MUVO"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg font-bold text-sm">
              Полный привод 4×4
            </div>
          </div>
        </div>

        {/* Attachments strip */}
        <div className="bg-gray-900 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 text-center">Навесное оборудование</p>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {attachments.map(item => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <span className="text-gray-400 text-xs text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Почему MUVO</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2">
              Преимущества самоходной машины MUVO
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map(item => (
              <div key={item.title} className="flex gap-5 p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={24} fallback="Star" className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GREEN BANNER */}
      <section className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-white text-center">
          <div>
            <div className="font-black text-4xl mb-1">8+</div>
            <div className="text-green-100 text-sm">видов навесного оборудования</div>
          </div>
          <div>
            <div className="font-black text-4xl mb-1">4×4</div>
            <div className="text-green-100 text-sm">полный привод для любых условий</div>
          </div>
          <div>
            <div className="font-black text-4xl mb-1">365</div>
            <div className="text-green-100 text-sm">дней в году — всесезонная работа</div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Технические данные</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2">
              Характеристики MUVO
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specGroups.map(group => (
              <div key={group.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b-2 border-green-500">
                  {group.title}
                </h3>
                <div className="space-y-3">
                  {group.specs.map(spec => (
                    <div key={spec.label} className="flex justify-between items-start gap-2">
                      <span className="text-gray-500 text-sm">{spec.label}</span>
                      <span className="text-gray-900 text-sm font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="applications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Где применяется</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2">
              Позиции, с которыми вы можете увидеть всё
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app, i) => (
              <div
                key={app.title}
                className="p-6 rounded-xl border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-green-600 text-white rounded font-bold flex items-center justify-center text-sm mb-4 group-hover:scale-110 transition-transform duration-200">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVE SECTION */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">Силовая установка</span>
            <h2 className="font-black text-3xl md:text-4xl mt-2 mb-6">
              Привод и управление с учётом широкого{' '}
              <span className="text-green-400">спектра применения</span>
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Привод', desc: 'Полноприводная трансмиссия обеспечивает уверенное движение на любом покрытии и в любых погодных условиях.' },
                { title: 'Управление', desc: 'Джойстиковое управление навесным оборудованием позволяет оператору контролировать все функции одной рукой.' },
                { title: 'Надёжность', desc: 'Немецкое качество исполнения и проверенные комплектующие обеспечивают минимальные эксплуатационные расходы.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-green-400 font-semibold">{item.title}: </span>
                    <span className="text-gray-300 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-600 rounded-xl p-6 text-white">
              <Icon name="Zap" size={32} className="mb-3" />
              <div className="font-black text-2xl">50 л.с.</div>
              <div className="text-green-100 text-sm">мощность двигателя</div>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 text-white">
              <Icon name="Fuel" size={32} className="mb-3 text-green-400" />
              <div className="font-black text-2xl">Stage V</div>
              <div className="text-gray-300 text-sm">экологический стандарт</div>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 text-white">
              <Icon name="Settings" size={32} className="mb-3 text-green-400" />
              <div className="font-black text-2xl">70 л/мин</div>
              <div className="text-gray-300 text-sm">производительность гидравлики</div>
            </div>
            <div className="bg-green-600 rounded-xl p-6 text-white">
              <Icon name="Shield" size={32} className="mb-3" />
              <div className="font-black text-2xl">3 года</div>
              <div className="text-green-100 text-sm">гарантия на технику</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Связаться с нами</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2">
              Получите консультацию и коммерческое предложение
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Отправить запрос</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Комментарий</label>
                  <textarea
                    placeholder="Опишите задачу..."
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors duration-200">
                  Отправить запрос
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Телефон</div>
                    <a href="tel:+74999931487" className="font-bold text-gray-900 hover:text-green-600 transition-colors">
                      +7 (499) 993-14-87
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a href="mailto:info@autobau-muvo.ru" className="font-bold text-gray-900 hover:text-green-600 transition-colors">
                      info@autobau-muvo.ru
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Адрес</div>
                    <div className="font-semibold text-gray-900 text-sm">г. Москва, ул. Верейская, д. 17</div>
                  </div>
                </div>
              </div>
              <div className="bg-green-600 rounded-xl p-6 text-white">
                <div className="font-bold mb-1">Режим работы</div>
                <div className="text-green-100 text-sm">Пн–Пт: 9:00 – 18:00</div>
                <div className="text-green-100 text-sm">Сб–Вс: по договорённости</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-green-400 font-bold text-lg">AUTOBAU</span>
            <p className="text-sm mt-1">Официальный дистрибьютор MUVO в России</p>
          </div>
          <div className="text-sm text-center">
            © 2024 Autobau. Все права защищены.
          </div>
          <div className="flex gap-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm hover:text-green-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}