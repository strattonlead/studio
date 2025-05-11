import type { Metadata } from 'next';
// Removed Geist and Geist_Mono imports
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

// Removed geistSans and geistMono const declarations

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
    <html lang="de">
      <head>
        <link href="https://fonts.cdnfonts.com/css/bodoni" rel="stylesheet" />
      </head>
      {/* Removed font variables from body className, font will be applied via globals.css */}
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
