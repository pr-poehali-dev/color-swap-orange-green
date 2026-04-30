import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_HERO = 'https://i.1.creatium.io/36/ff/75/90f24c55129217062c1c1024b07eebab15/mg_2584_1.jpg';
const IMG_ABOUT1 = 'https://i.1.creatium.io/51/4b/2f/8336dc68c90523baebc50c29a962037168/mg_2430_1.jpg';
const IMG_ABOUT2 = 'https://i.1.creatium.io/d0/97/83/eac6643a83d64c3e74fb7975443942bbd9/mg_2498_1.jpg';
const IMG_ABOUT3 = 'https://i.1.creatium.io/36/ff/75/90f24c55129217062c1c1024b07eebab15/mg_2584_1.jpg';
const IMG_ABOUT4 = 'https://i.1.creatium.io/51/4b/2f/8336dc68c90523baebc50c29a962037168/mg_2430_1.jpg';

const navLinks = [
  { label: 'О машине', href: '#about' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Характеристики', href: '#specs' },
  { label: 'Навесное оборудование', href: '#equipment' },
  { label: 'Сервис', href: '#service' },
  { label: 'Контакты', href: '#contacts' },
];

const featureStrip = [
  { icon: 'CalendarDays', title: 'Всесезонность', desc: 'Эффективная работа в любое время года' },
  { icon: 'Compass', title: 'Маневренность', desc: 'Компактные габариты и радиус разворота 1,5 м' },
  { icon: 'Zap', title: 'Высокая эффективность', desc: 'Производительность до 12 000 м²/ч' },
  { icon: 'Flag', title: 'Российская адаптация', desc: 'Создана для работы в российских условиях' },
];

const heroSpecs = [
  { icon: 'Truck', label: '4×4', sub: 'полный привод' },
  { icon: 'ArrowLeftRight', label: '2,0 м', sub: 'ширина уборки' },
  { icon: 'MoveVertical', label: '210 мм', sub: 'клиренс' },
];

const aboutFeatures = [
  { img: IMG_ABOUT1, title: 'Вакуумная система', desc: 'Мощное всасывание и эффективное пылеподавление' },
  { img: IMG_ABOUT2, title: 'Боковые щётки', desc: 'Две дисковые щётки для уборки у бордюров и в углах' },
  { img: IMG_ABOUT3, title: 'Кабина оператора', desc: 'Панорамный обзор 360° и эргономичное управление' },
  { img: IMG_ABOUT4, title: 'Мусорный бак', desc: 'Объём 1–1,5 м³ из нержавеющей стали с системой опрокидывания' },
];

const mmk1000specs = [
  { label: 'Привод', value: 'Полный привод (4×4)' },
  { label: 'Двигатель', value: 'Дизельный, водяное охлаждение' },
  { label: 'Мощность двигателя', value: '35 л.с.' },
  { label: 'Ширина уборки', value: '2000 мм' },
  { label: 'Производительность', value: 'до 12 000 м²/ч' },
  { label: 'Объём мусорного бака', value: '1 м³' },
  { label: 'Объём бака для воды', value: '180 л' },
  { label: 'Клиренс', value: '210 мм' },
  { label: 'Скорость движения', value: '0–25 км/ч' },
  { label: 'Радиус разворота', value: '1 500 мм' },
  { label: 'Габариты (Д×Ш×В)', value: '2 200 × 1 000 × 2 000 мм' },
  { label: 'Масса', value: '1 100 кг' },
];

const mmk1500specs = [
  { label: 'Привод', value: 'Полный привод (4×4)' },
  { label: 'Двигатель', value: 'Дизельный, водяное охлаждение' },
  { label: 'Мощность двигателя', value: '48 л.с.' },
  { label: 'Ширина уборки', value: '2000 мм' },
  { label: 'Производительность', value: 'до 12 000 м²/ч' },
  { label: 'Объём мусорного бака', value: '1,5 м³' },
  { label: 'Объём бака для воды', value: '250 л' },
  { label: 'Клиренс', value: '210 мм' },
  { label: 'Скорость движения', value: '0–25 км/ч' },
  { label: 'Радиус разворота', value: '1 500 мм' },
  { label: 'Габариты (Д×Ш×В)', value: '2 800 × 1 200 × 2 200 мм' },
  { label: 'Масса', value: '1 400 кг' },
];

const advantages = [
  { icon: 'Shield', title: 'Надёжность', desc: 'Прочная конструкция и качественные комплектующие' },
  { icon: 'Wallet', title: 'Экономичность', desc: 'Низкий расход топлива и простота обслуживания' },
  { icon: 'Wrench', title: 'Сервис от производителя', desc: 'Гарантия, запчасти и техническая поддержка по всей России' },
  { icon: 'Settings', title: 'Индивидуальная комплектация', desc: 'Широкий выбор навесного оборудования под любые задачи' },
];

const footerMenu = ['О машине', 'Преимущества', 'Характеристики', 'Навесное оборудование', 'Сервис'];
const footerSupport = ['Сервис и гарантия', 'Запчасти', 'Документация'];

export default function Index() {
  const [activeModel, setActiveModel] = useState<'1000' | '1500'>('1000');
  const specs = activeModel === '1000' ? mmk1000specs : mmk1500specs;

  return (
    <div className="bg-white text-gray-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ===== HEADER ===== */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 gap-4">
          {/* Логотип */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center">
              <span className="text-white font-black text-sm leading-none">АБ</span>
            </div>
            <div className="text-blue-900 font-black text-sm leading-tight uppercase tracking-wide">
              АВТО<br />БАУ
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden xl:flex gap-5 flex-1 justify-center">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors uppercase tracking-wide whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Телефон + кнопка */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="tel:+74992900820" className="hidden md:block text-gray-900 font-bold text-sm hover:text-orange-500 transition-colors">
              +7 (800) 775-77-38
            </a>
            <a
              href="#contacts"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              Заказать звонок
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-0 items-center min-h-[520px]">
          {/* Левая часть */}
          <div className="py-16 pr-8">
            <h1 className="font-black text-5xl md:text-6xl text-gray-900 leading-none mb-1 uppercase">
              SWEEPER
            </h1>
            <h1 className="font-black text-5xl md:text-6xl text-orange-500 leading-none mb-5 uppercase">
              ММК-1000
            </h1>
            <p className="text-gray-600 font-bold text-base uppercase tracking-wide mb-3">
              Многофункциональная<br />коммунальная машина
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Профессиональная уборка круглый год. Надёжность, маневренность и максимальная эффективность в любых условиях.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contacts"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded text-sm transition-colors uppercase"
              >
                Получить консультацию
              </a>
              <a
                href="#specs"
                className="border-2 border-gray-300 text-gray-700 hover:border-gray-500 font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2 uppercase"
              >
                Скачать каталог
                <Icon name="Download" size={14} />
              </a>
            </div>

            {/* 3 характеристики справа от фото — на мобиле под текстом */}
            <div className="flex flex-col gap-3 md:hidden">
              {heroSpecs.map(s => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-orange-500 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name={s.icon} size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-base leading-none">{s.label}</div>
                    <div className="text-gray-500 text-xs">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая часть — фото + характеристики */}
          <div className="relative flex items-center">
            <img
              src={IMG_HERO}
              alt="Sweeper ММК-1000"
              className="w-full object-cover h-[520px]"
            />
            {/* Характеристики поверх фото справа */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 pr-4">
              {heroSpecs.map(s => (
                <div key={s.label} className="bg-white/90 backdrop-blur rounded-lg px-4 py-3 flex items-center gap-3 shadow-md min-w-[150px]">
                  <div className="w-9 h-9 border-2 border-orange-500 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name={s.icon} size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-sm leading-none">{s.label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE STRIP ===== */}
      <section className="bg-white border-t border-b border-gray-100 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {featureStrip.map((f, i) => (
            <div key={f.title} className={`flex items-start gap-4 ${i < featureStrip.length - 1 ? 'md:border-r md:border-gray-100' : ''} pr-4`}>
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <Icon name={f.icon} size={28} className="text-orange-500" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm uppercase tracking-wide">{f.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed mt-0.5">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== О МАШИНЕ ===== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* Левая часть */}
          <div>
            <span className="text-orange-500 font-semibold text-xs uppercase tracking-widest">О машине</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-3 mb-6 leading-tight uppercase">
              SWEEPER ММК —<br />ВАШ НАДЁЖНЫЙ<br />ПОМОЩНИК
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Sweeper ММК — многофункциональная коммунальная машина, разработанная и произведённая в России.
              Идеально подходит для уборки улиц, тротуаров, парковок, дворовых территорий и промышленных площадок.
            </p>
            <a
              href="#specs"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded transition-colors text-sm uppercase"
            >
              Узнать больше
            </a>
          </div>

          {/* Правая часть — сетка 2×2 */}
          <div className="grid grid-cols-2 gap-3">
            {aboutFeatures.map(f => (
              <div key={f.title} className="relative overflow-hidden rounded-xl group">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-white font-bold text-xs uppercase leading-tight">{f.title}</div>
                  <div className="text-gray-300 text-xs mt-0.5 leading-tight">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ХАРАКТЕРИСТИКИ ===== */}
      <section id="specs" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">Характеристики</span>
            <h2 className="font-black text-3xl md:text-4xl text-white mt-2 uppercase">
              Технические характеристики
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Таблица */}
            <div>
              {/* Переключатель */}
              <div className="flex gap-2 mb-8">
                {(['1000', '1500'] as const).map(model => (
                  <button
                    key={model}
                    onClick={() => setActiveModel(model)}
                    className={`px-5 py-2 rounded text-sm font-bold transition-colors ${
                      activeModel === model
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    ММК-{model}
                  </button>
                ))}
              </div>

              <div className="space-y-0">
                {specs.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex justify-between items-center py-2.5 px-0 ${
                      i < specs.length - 1 ? 'border-b border-gray-700' : ''
                    }`}
                  >
                    <span className="text-gray-400 text-sm">{s.label}</span>
                    <span className="text-white text-sm font-semibold">{s.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-4">
                Производитель имеет право изменять технические характеристики без предварительного уведомления.
              </p>
            </div>

            {/* Схема машины (SVG-заглушка) */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Схематичная боковая проекция */}
                <svg viewBox="0 0 420 300" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Кузов */}
                  <rect x="60" y="80" width="280" height="130" rx="8" stroke="#6b7280" strokeWidth="2" fill="none"/>
                  {/* Кабина */}
                  <rect x="70" y="50" width="120" height="60" rx="6" stroke="#6b7280" strokeWidth="2" fill="none"/>
                  {/* Колёса */}
                  <circle cx="120" cy="220" r="30" stroke="#9ca3af" strokeWidth="2" fill="none"/>
                  <circle cx="280" cy="220" r="30" stroke="#9ca3af" strokeWidth="2" fill="none"/>
                  <circle cx="120" cy="220" r="10" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
                  <circle cx="280" cy="220" r="10" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
                  {/* Щётки */}
                  <ellipse cx="60" cy="215" rx="20" ry="8" stroke="#f97316" strokeWidth="2" fill="none"/>
                  <ellipse cx="340" cy="215" rx="20" ry="8" stroke="#f97316" strokeWidth="2" fill="none"/>
                  {/* Размерные линии */}
                  <line x1="60" y1="270" x2="340" y2="270" stroke="#4b5563" strokeWidth="1" strokeDasharray="4"/>
                  <text x="200" y="285" textAnchor="middle" fill="#9ca3af" fontSize="11">1000 мм</text>
                  <line x1="60" y1="260" x2="60" y2="280" stroke="#4b5563" strokeWidth="1"/>
                  <line x1="340" y1="260" x2="340" y2="280" stroke="#4b5563" strokeWidth="1"/>
                  {/* Высота */}
                  <line x1="370" y1="50" x2="370" y2="210" stroke="#4b5563" strokeWidth="1" strokeDasharray="4"/>
                  <text x="395" y="135" textAnchor="middle" fill="#9ca3af" fontSize="11" transform="rotate(90 395 135)">2000 мм</text>
                  <line x1="360" y1="50" x2="380" y2="50" stroke="#4b5563" strokeWidth="1"/>
                  <line x1="360" y1="210" x2="380" y2="210" stroke="#4b5563" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ПОЧЕМУ ВЫБИРАЮТ ===== */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <span className="text-orange-500 font-semibold text-xs uppercase tracking-widest">Преимущества</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2 uppercase">
              Почему выбирают Sweeper ММК
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map(item => (
              <div key={item.title} className="border border-gray-100 rounded-xl p-6 hover:border-orange-200 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 border-2 border-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={22} fallback="Star" className="text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA + FOOTER ===== */}
      <footer className="bg-gray-900">
        {/* CTA блок */}
        <div className="relative overflow-hidden">
          <img
            src={IMG_HERO}
            alt="Sweeper ММК"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative max-w-7xl mx-auto px-4 py-16">
            <div className="max-w-xl">
              <h2 className="font-black text-3xl md:text-4xl text-white leading-tight uppercase mb-4">
                Готовые решения<br />для чистоты<br />вашего города
              </h2>
              <p className="text-gray-300 text-sm mb-8">
                Получите консультацию специалиста и подберите комплектацию под ваши задачи.
              </p>
              <a
                href="#contacts"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded transition-colors uppercase text-sm"
              >
                Получить консультацию
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Логотип */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center">
                  <span className="text-white font-black text-sm">АБ</span>
                </div>
                <div className="text-white font-black text-sm uppercase tracking-wide leading-tight">
                  АВТО<br />БАУ
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">© Sweeper ММК, 2024<br />Все права защищены</p>
            </div>

            {/* Меню */}
            <div>
              <div className="text-gray-300 font-bold text-xs uppercase tracking-widest mb-4">Меню</div>
              <ul className="space-y-2">
                {footerMenu.map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-orange-400 text-xs transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Поддержка */}
            <div>
              <div className="text-gray-300 font-bold text-xs uppercase tracking-widest mb-4">Поддержка</div>
              <ul className="space-y-2">
                {footerSupport.map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-orange-400 text-xs transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <div className="text-gray-300 font-bold text-xs uppercase tracking-widest mb-4">Контакты</div>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+74992900820" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 text-xs transition-colors">
                    <Icon name="Phone" size={12} />
                    +7 (800) 775-77-38
                  </a>
                </li>
                <li>
                  <a href="mailto:info@autobau-muvo.ru" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 text-xs transition-colors">
                    <Icon name="Mail" size={12} />
                    info@autobau-muvo.ru
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-xs">
                  <Icon name="MapPin" size={12} className="mt-0.5 flex-shrink-0" />
                  г. Миасс, Тургоякское шоссе, 5/9
                </li>
              </ul>

              {/* Соцсети */}
              <div className="flex gap-3 mt-4">
                {['vk', 'send', 'youtube'].map((n) => (
                  <a key={n} href="#" className="w-8 h-8 bg-gray-700 hover:bg-orange-500 rounded flex items-center justify-center transition-colors">
                    <Icon name={n === 'vk' ? 'Users' : n === 'send' ? 'Send' : 'Play'} size={14} className="text-gray-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== CONTACTS SECTION ===== */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-xs uppercase tracking-widest">Связаться с нами</span>
            <h2 className="font-black text-3xl md:text-4xl text-gray-900 mt-2 uppercase">
              Получить консультацию
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Ваше имя" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors text-gray-700">
                  <option value="">Выберите модель</option>
                  <option value="1000">Sweeper ММК-1000</option>
                  <option value="1500">Sweeper ММК-1500</option>
                </select>
                <textarea placeholder="Комментарий..." rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none" />
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors uppercase text-sm">
                  Отправить заявку
                </button>
                <p className="text-xs text-gray-400 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-500 rounded-2xl p-6 text-white">
                <div className="text-orange-100 text-xs uppercase tracking-widest mb-1">Официальный дилер</div>
                <div className="font-black text-xl mb-4">АО «Автобау»</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-orange-200 text-xs">Дорожные и коммунальные машины</div>
                    <a href="tel:+74992900820" className="block font-bold text-xl hover:text-orange-100 transition-colors">+7 (499) 290-08-20</a>
                  </div>
                  <div>
                    <div className="text-orange-200 text-xs">ТО подметальных машин</div>
                    <a href="tel:+79037966262" className="block font-bold text-base hover:text-orange-100 transition-colors">+7 (903) 796-62-62</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Офис продаж</div>
                    <div className="font-semibold text-gray-900 text-sm">117465, Москва, ул. Генерала Тюленева, д.4А, стр.3</div>
                    <div className="text-xs text-gray-400 mt-0.5">м. Тёплый стан</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Email</div>
                    <a href="mailto:info@autobau-muvo.ru" className="font-semibold text-gray-900 text-sm hover:text-orange-500 transition-colors">info@autobau-muvo.ru</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
