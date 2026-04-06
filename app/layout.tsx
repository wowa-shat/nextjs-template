import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { drukTrial, helvetica_regular, helvetica_bold, helvetica_oblique, helvetica_lightoblique, helvetica_boldoblique } from '@/fonts';

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
        <Footer />
      </body>
    </html>
  );
}
