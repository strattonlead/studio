
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted text-muted-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
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
        </div>
      </div>
    </footer>
  );
}
