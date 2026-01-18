import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/50 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/icons/header_logo.png"
            alt="Logo"
            width={313}
            height={64}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-22.5 md:flex">
          <Link href="/book" className="header link"> книга </Link>
          <Link href="/public-talk" className="header link"> паблик-ток </Link>
          <Link href="/events" className="header link"> практики </Link>
          <Link href="/shop" className="header link"> магазин </Link>

          {/* Telegram Icon */}
          <a
            href="https://t.me/crimson_yeah"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="Telegram"
          >
            <Image
              src="/icons/telegram_logo.svg"
              alt="Telegram"
              width={64}
              height={64}
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
