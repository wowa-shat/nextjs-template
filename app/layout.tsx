import "./globals.css";
import Header from "@/components/Header";
import { drukTrial, helvetica_regular, helvetica_bold, helvetica_oblique, helvetica_lightoblique, helvetica_boldoblique } from '@/fonts';
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${drukTrial.variable} ${helvetica_regular.variable} ${helvetica_bold.variable} ${helvetica_oblique.variable} ${helvetica_lightoblique.variable} ${helvetica_boldoblique.variable}`}>
      <body className="bg-white antialiased">
        <Header />
        {children}
        <div className="w-full">
          <Image
            src="/images/screens/footer.png"
            alt=""
            width={1920}
            height={609}
            className="w-full h-auto"
            priority
          />
        </div>
      </body>
    </html>
  );
}