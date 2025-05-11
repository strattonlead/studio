import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted text-muted-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          &copy; {currentYear} Hair & Skin Couture. Alle Rechte vorbehalten.
        </p>
        <Link href="/impressum" className="text-sm hover:text-primary transition-colors">
          Impressum & Datenschutz
        </Link>
      </div>
    </footer>
  );
}
