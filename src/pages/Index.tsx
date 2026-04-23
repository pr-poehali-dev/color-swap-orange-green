import Icon from '@/components/ui/icon';

const IMG_HERO = 'https://cdn.poehali.dev/projects/600d4174-1b44-4799-92ac-2895e57c0d83/files/4f09f57e-9139-4357-9217-897279a8e46a.jpg';
const IMG_WORK = 'https://cdn.poehali.dev/projects/600d4174-1b44-4799-92ac-2895e57c0d83/files/3fd0de39-372e-410b-8d79-e7d708cde6e9.jpg';

const navLinks = [
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Продукция', href: '#products' },
  { label: 'Оборудование', href: '#equipment' },
  { label: 'Сертификаты', href: '#certs' },
  { label: 'Контакты', href: '#contacts' },
];

const heroPoints = [
  { icon: 'Maximize2', title: 'Компактные размеры', desc: 'Привод 4×4, эффективна на парках, тротуарах, дворах' },
  { icon: 'Wallet', title: 'Экономичность', desc: 'Минимальные цены на запчасти и обслуживание' },
  { icon: 'Wrench', title: 'Сервис от производителя', desc: 'Выезд специалиста с завода для настройки и обучения' },
];

const attachments = [
  { label: 'Снегоотвал', icon: '❄️' },
  { label: 'Снегоочиститель', icon: '💨' },
  { label: 'Пескоразбрасыватель', icon: '🌱' },
  { label: 'Щётки передние', icon: '🔄' },
  { label: 'Щётки задние', icon: '🔄' },
  { label: 'Реагенты', icon: '🧪' },
  { label: 'Поливомойка', icon: '💧' },
  { label: 'Бак 500 л', icon: '📦' },
];

const advantages = [
  {
    title: 'Адаптирована к российским дорогам',
    desc: 'Клиренс 210 мм и полный привод 4×4 обеспечивают уверенную работу на разбитых покрытиях, бордюрах и в условиях российской зимы.',
    icon: 'Shield',
  },
  {
    title: 'Компактные размеры',
    desc: 'Шарнирно-сочленённая рама позволяет работать там, где другая техника не пройдёт: узкие тротуары, дворы, парковые дорожки.',
    icon: 'Maximize2',
  },
  {
    title: 'Комфортная кабина',
    desc: 'Кабина установлена на сайлентблоках — вибрация и шум снижены до минимума. Оператор меньше устаёт, работает продуктивнее.',
    icon: 'Armchair',
  },
  {
    title: 'Большая ширина уборки',
    desc: 'Ширина уборки 2 метра позволяет за один проход охватить максимальную площадь и снизить затраты на обслуживание территории.',
    icon: 'ArrowLeftRight',
  },
  {
    title: 'Надёжная гидравлика',
    desc: 'Гидравлические компоненты от мировых производителей. Проверенная техника, которая работает без сбоев в любых условиях.',
    icon: 'Gauge',
  },
  {
    title: 'Гарантия и сервис',
    desc: 'Специалист завода выезжает на место для наладки и обучения персонала. Минимальные цены на оригинальные запчасти.',
    icon: 'BadgeCheck',
  },
];

const mmk1500 = [
  { label: 'Тип шасси', value: 'Двухосное, шарнирно-сочленённая рама' },
  { label: 'Масса max', value: '3 700 кг' },
  { label: 'Мощность', value: '48 кВт' },
  { label: 'Двигатель', value: 'Дизель' },
  { label: 'Привод', value: '4×4' },
  { label: 'Ширина уборки', value: '2 м' },
  { label: 'Бак для мусора', value: '1,5 куб.м' },
  { label: 'Клиренс', value: '210 мм' },
];

const mmk1000 = [
  { label: 'Тип шасси', value: 'Двухосное, шарнирно-сочленённая рама' },
  { label: 'Масса max', value: '3 000 кг' },
  { label: 'Мощность', value: '31,3–48 кВт' },
  { label: 'Двигатель', value: 'Дизель' },
  { label: 'Привод', value: '4×4' },
  { label: 'Ширина уборки', value: '2 м' },
  { label: 'Бак для мусора', value: '1–1,5 куб.м' },
  { label: 'Клиренс', value: '210 мм' },
];

const applications = [
  { title: 'Тротуары и пешеходные зоны', desc: 'Компактная ширина позволяет убирать даже самые узкие тротуары' },
  { title: 'Дворовые территории', desc: 'Манёвренная рама проходит между припаркованными автомобилями' },
  { title: 'Парки и скверы', desc: 'Бережная уборка дорожек без вреда для газонов и насаждений' },
  { title: 'Промышленные предприятия', desc: 'Уборка территорий заводов, складов, логистических центров' },
  { title: 'Муниципальные объекты', desc: 'Площади, рынки, остановки транспорта — любые городские пространства' },
  { title: 'Аэропорты и ж/д', desc: 'Расчистка перронов и служебных проездов в любое время суток' },
];

export default function Index() {
  return (
    <div style={{ fontFamily: "'Montserrat', 'Open Sans', sans-serif" }} className="bg-white text-gray-800">

      {/* ===== HEADER ===== */}
      <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-orange-400 font-black text-lg tracking-wide leading-tight">Sweeper ММК</div>
              <div className="text-gray-400 text-xs">ОАО СМЗ Элеватормельмаш</div>
            </div>
          </div>
          <nav className="hidden lg:flex gap-5">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-end gap-0.5">
            <a href="tel:89063199644" className="flex items-center gap-1.5 text-white hover:text-orange-400 transition-colors font-bold text-sm">
              <Icon name="Phone" size={14} />
              8 906 319-96-44
            </a>
            <a href="tel:88452294171" className="flex items-center gap-1.5 text-gray-300 hover:text-orange-400 transition-colors text-xs">
              <Icon name="Phone" size={12} />
              8 8452 29-41-71
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded mb-5 tracking-wider uppercase">
              Производитель — ОАО СМЗ Элеватормельмаш
            </div>
            <h1 className="font-black text-3xl md:text-4xl xl:text-5xl text-gray-900 leading-tight mb-5">
              Подметальная вакуумная<br />
              <span className="text-orange-500">уборочная машина</span><br />
              «Sweeper» ММК 1500/1000
            </h1>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Российская коммунальная техника для круглогодичной уборки тротуаров, парков и дворовых территорий.
              Полный привод 4×4, шарнирно-сочленённая рама, широкий выбор навесного оборудования.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contacts"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded transition-colors duration-200"
              >
                Получить предложение
              </a>
              <a
                href="#products"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-7 py-3 rounded transition-colors duration-200"
              >
                Смотреть технику
              </a>
            </div>
            {/* 3 тезиса */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {heroPoints.map(p => (
                <div key={p.title} className="flex gap-3 items-start">
                  <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={p.icon} size={18} fallback="Star" className="text-orange-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs mb-0.5">{p.title}</div>
                    <div className="text-gray-500 text-xs leading-snug">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={IMG_HERO}
              alt="Sweeper ММК"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-5 py-3 rounded-xl shadow-lg font-bold text-sm text-center">
              Привод 4×4<br /><span className="text-xs font-normal text-orange-100">Клиренс 210 мм</span>
            </div>
          </div>
        </div>

        {/* Attachments strip */}
        <div className="bg-gray-900 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 text-center">Навесное оборудование</p>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {attachments.map(item => (
                <div key={item.label} className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <span className="text-gray-400 text-xs text-center leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-orange-500 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          <div>
            <div className="font-black text-4xl mb-1">16</div>
            <div className="text-orange-100 text-sm">лет на рынке</div>
          </div>
          <div>
            <div className="font-black text-4xl mb-1">36</div>
            <div className="text-orange-100 text-sm">регионов присутствия</div>
          </div>
          <div>
            <div className="font-black text-4xl mb-1">200+</div>
            <div className="text-orange-100 text-sm">машин продано</div>
          </div>
          <div>
            <div className="font-black text-4xl mb-1">4×4</div>
            <div className="text-orange-100 text-sm">полный привод</div>
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Почему выбирают нас</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2">
              Преимущества машины Sweeper ММК
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(item => (
              <div key={item.title} className="flex gap-5 p-6 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={22} fallback="Star" className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Наша продукция</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2">
              Модельный ряд Sweeper ММК
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Две модели с разной мощностью и объёмом бака — выберите подходящую под ваши задачи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ММК-1500 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-orange-500 px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="text-orange-100 text-xs uppercase tracking-widest">Флагманская модель</div>
                  <h3 className="text-white font-black text-2xl">Sweeper ММК-1500</h3>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl px-4 py-2 text-center">
                  <div className="text-white font-black text-xl">1,5</div>
                  <div className="text-orange-100 text-xs">куб.м бак</div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {mmk1500.map(spec => (
                    <div key={spec.label} className="flex justify-between items-center border-b border-gray-50 pb-2">
                      <span className="text-gray-500 text-sm">{spec.label}</span>
                      <span className="text-gray-900 text-sm font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <a href="#contacts" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-center py-3 rounded-lg transition-colors duration-200">
                  Запросить цену
                </a>
              </div>
            </div>

            {/* ММК-1000 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest">Базовая модель</div>
                  <h3 className="text-white font-black text-2xl">Sweeper ММК-1000</h3>
                </div>
                <div className="bg-white bg-opacity-10 rounded-xl px-4 py-2 text-center">
                  <div className="text-white font-black text-xl">1,0</div>
                  <div className="text-gray-400 text-xs">куб.м бак</div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {mmk1000.map(spec => (
                    <div key={spec.label} className="flex justify-between items-center border-b border-gray-50 pb-2">
                      <span className="text-gray-500 text-sm">{spec.label}</span>
                      <span className="text-gray-900 text-sm font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <a href="#contacts" className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-bold text-center py-3 rounded-lg transition-colors duration-200">
                  Запросить цену
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EQUIPMENT ===== */}
      <section id="equipment" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Всесезонная техника</span>
            <h2 className="font-black text-3xl md:text-4xl mt-2 mb-6">
              Навесное оборудование для{' '}
              <span className="text-orange-400">любого сезона</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Sweeper ММК работает круглый год благодаря широкому выбору навесного оборудования.
              Одна машина заменяет несколько единиц техники и существенно снижает эксплуатационные расходы.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '❄️', label: 'Зима', items: 'Снегоотвал, роторный снегоочиститель, пескоразбрасыватель, реагенты' },
                { icon: '☀️', label: 'Лето', items: 'Универсальные щётки, поливомоечное оборудование, бак 500 л' },
              ].map(season => (
                <div key={season.label} className="bg-gray-800 rounded-xl p-4">
                  <div className="text-2xl mb-2">{season.icon}</div>
                  <div className="text-orange-400 font-bold text-sm mb-1">{season.label}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{season.items}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={IMG_WORK}
              alt="Sweeper ММК в работе"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Где применяется</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2">
              Сферы применения
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app, i) => (
              <div
                key={app.title}
                className="p-6 rounded-xl border border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-orange-500 text-white rounded font-bold flex items-center justify-center text-sm mb-4 group-hover:scale-110 transition-transform duration-200">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTS ===== */}
      <section id="certs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Документация</span>
            <h2 className="font-black text-3xl text-gray-900 mt-2">Сертификаты и документы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: 'FileCheck', title: 'Сертификат соответствия', desc: 'Техника сертифицирована по российским стандартам качества' },
              { icon: 'Award', title: 'Паспорт на изделие', desc: 'Полная техническая документация передаётся вместе с машиной' },
              { icon: 'BookOpen', title: 'Руководство по эксплуатации', desc: 'Подробное руководство на русском языке для операторов' },
            ].map(doc => (
              <div key={doc.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={doc.icon} size={24} fallback="File" className="text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{doc.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Связаться с нами</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2">
              Получите консультацию и коммерческое предложение
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Форма */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Интересующая модель</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-orange-400 transition-colors text-gray-700">
                    <option value="">Выберите модель</option>
                    <option value="1500">Sweeper ММК-1500</option>
                    <option value="1000">Sweeper ММК-1000</option>
                    <option value="both">Обе модели / не определился</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Комментарий</label>
                  <textarea
                    placeholder="Задача, объём работ, регион..."
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors duration-200">
                  Отправить заявку
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>

            {/* Контакты */}
            <div className="space-y-5">
              <div className="bg-orange-500 rounded-2xl p-6 text-white">
                <div className="font-bold text-lg mb-1">Позвоните нам</div>
                <a href="tel:89063199644" className="block text-2xl font-black hover:text-orange-100 transition-colors">
                  8 906 319-96-44
                </a>
                <a href="tel:88452294171" className="block text-base font-semibold text-orange-100 hover:text-white transition-colors mt-1">
                  8 8452 29-41-71
                </a>
                <div className="text-orange-200 text-sm mt-3">Пн–Пт: 9:00 – 18:00</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Производитель</div>
                    <div className="font-bold text-gray-900 text-sm">ОАО СМЗ Элеватормельмаш</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Адрес</div>
                    <div className="font-semibold text-gray-900 text-sm">г. Саратов, Россия</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Сайт</div>
                    <a href="https://sweeper-mmk.ru" className="font-semibold text-orange-500 hover:text-orange-600 text-sm transition-colors">
                      sweeper-mmk.ru
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                  <Icon name="Truck" size={24} className="text-orange-500 mx-auto mb-2" />
                  <div className="text-xs font-bold text-gray-900">Доставка</div>
                  <div className="text-xs text-gray-500 mt-0.5">По всей России</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                  <Icon name="Wrench" size={24} className="text-orange-500 mx-auto mb-2" />
                  <div className="text-xs font-bold text-gray-900">Сервис</div>
                  <div className="text-xs text-gray-500 mt-0.5">Выезд специалиста</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-orange-400 font-black text-lg">Sweeper ММК</div>
            <div className="text-sm mt-1">ОАО СМЗ Элеватормельмаш</div>
            <div className="text-xs mt-1">© 2024. Все права защищены.</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <a href="tel:89063199644" className="text-white font-bold hover:text-orange-400 transition-colors">
              8 906 319-96-44
            </a>
            <a href="tel:88452294171" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">
              8 8452 29-41-71
            </a>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
