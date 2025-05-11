import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hair & Skin Couture - Because blonde is more than just a shade',
  description: 'Ihr Friseursalon in Berlin am Kurfürstendamm, spezialisiert auf Blond, Langhaar, Balayage und Haarverlängerung.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-16 md:pt-20 bg-background">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
