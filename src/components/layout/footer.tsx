
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted text-muted-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <Link
          href="/foerderung"
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 pb-6 border-b border-border hover:opacity-80 transition-opacity"
          aria-label="Informationen zur EFRE-Förderung"
        >
          <Image
            src="/eu-efre-logo.jpg"
            alt="Europäische Union – Europäischer Fonds für regionale Entwicklung"
            width={800}
            height={624}
            className="h-14 w-auto"
          />
          <span className="text-xs sm:text-sm max-w-xs sm:text-left">
            Gefördert durch die Meistergründungsprämie – ko-finanziert vom Europäischen Fonds für regionale Entwicklung
          </span>
        </Link>
        <div className="flex justify-center space-x-6 mb-4">
          {/* <a 
            href="https://facebook.com/yourpage" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </a> */}
          <a 
            href="https://www.instagram.com/hairandskin.couture" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm mb-2">
          &copy; {currentYear} Hair & Skin Couture. Alle Rechte vorbehalten.
        </p>
        <div className="space-x-4">
          <Link href="/impressum" className="text-sm hover:text-primary transition-colors">
            Impressum
          </Link>
          <span className="text-sm">|</span>
          <Link href="/anfahrt" className="text-sm hover:text-primary transition-colors">
            Anfahrt
          </Link>
          <span className="text-sm">|</span>
          <Link href="/datenschutz" className="text-sm hover:text-primary transition-colors">
            Datenschutz
          </Link>
          <span className="text-sm">|</span>
          <Link href="/foerderung" className="text-sm hover:text-primary transition-colors">
            Förderung
          </Link>
        </div>
      </div>
    </footer>
  );
}
