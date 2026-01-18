import "./globals.css";
import Header from "@/components/Header";
import { drukTrial, helvetica_regular, helvetica_oblique, helvetica_lightoblique } from '@/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${drukTrial.variable} ${helvetica_regular.variable} ${helvetica_oblique.variable} ${helvetica_lightoblique.variable}`}>
      <body className="bg-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}