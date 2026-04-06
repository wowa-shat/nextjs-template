import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top border */}
      <div className="border-t border-black" />
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {/* Social Media Section */}
          <div className="md:border-r md:border-black md:pr-8">
            <h3 className="font-druk text-xl md:text-2xl mb-6">Мы в соцсетях</h3>
            <Link 
              href="https://t.me/m0therl0ver" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-druk text-base md:text-lg hover:opacity-70 transition-opacity"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 md:w-7 md:h-7" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              TELEGRAM
            </Link>
          </div>

          {/* Contacts Section */}
          <div className="md:border-r md:border-black md:px-8">
            <h3 className="font-druk text-xl md:text-2xl mb-6">Контакты</h3>
            <div className="space-y-2">
              <p className="font-helvetica-bold text-base md:text-lg">
                Креативный директор проекта
              </p>
              <p className="font-helvetica-regular text-base md:text-lg">
                Сережитдинова Регина
              </p>
              <Link 
                href="mailto:regina_serazhitdinova@mail.ru"
                className="block font-helvetica-oblique text-base md:text-lg hover:opacity-70 transition-opacity"
              >
                regina_serazhitdinova@mail.ru
              </Link>
              <Link 
                href="https://t.me/m0therl0ver" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block font-helvetica-oblique text-base md:text-lg hover:opacity-70 transition-opacity"
              >
                t.me/m0therl0ver
              </Link>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="md:pl-8">
            <h3 className="font-druk text-xl md:text-2xl mb-6">Разделы</h3>
            <nav className="space-y-2">
              <Link 
                href="/" 
                className="block font-helvetica-regular text-base md:text-lg hover:opacity-70 transition-opacity"
              >
                Главная
              </Link>
              <Link 
                href="/book" 
                className="block font-helvetica-regular text-base md:text-lg hover:opacity-70 transition-opacity"
              >
                Книга
              </Link>
              <Link 
                href="/public-talk" 
                className="block font-helvetica-regular text-base md:text-lg hover:opacity-70 transition-opacity"
              >
                Паблик-ток
              </Link>
              <Link 
                href="/events" 
                className="block font-helvetica-regular text-base md:text-lg hover:opacity-70 transition-opacity"
              >
                Практики
              </Link>
              <Link 
                href="/shop" 
                className="block font-helvetica-regular text-base md:text-lg hover:opacity-70 transition-opacity"
              >
                Магазин
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-center">
        <p className="font-helvetica-regular text-sm md:text-base">
          © Все права защищены.
        </p>
      </div>
    </footer>
  );
}
