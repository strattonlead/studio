import type { Metadata } from 'next';
import { Bodoni_Moda, Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import CookieConsent from '@/components/cookie-consent';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppFab } from '@/components/whatsapp-fab';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Hair & Skin Couture - Because blonde is more than just a shade',
  description: 'Dein Friseursalon in Berlin am Kurfürstendamm, spezialisiert auf Blond, Langhaar, Balayage und Haarverlängerung.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bodoniModa.variable} ${cormorant.variable} ${manrope.variable}`}>
      <head>
        <meta name="llms-txt" content="https://hairandskincouture.de/llms.txt" />
      </head>
      <body className="antialiased flex flex-col min-h-screen relative">
        <div className="couture-vignette" aria-hidden="true" />
        <div className="couture-grain" aria-hidden="true" />
        <Header />
        <main className="flex-grow pt-16 md:pt-20 relative z-10">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <WhatsAppFab />
        <Toaster />
      </body>
    </html>
  );
}
