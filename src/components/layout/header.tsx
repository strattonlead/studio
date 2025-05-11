"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ergebnisse', label: 'Ergebnisse' },
  { href: '/ueber-mich', label: 'Über Mich' },
  { href: '/tressenverdichtung-verlaengerung', label: 'Tressenverdichtung / Verlängerung' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold flex items-center group">
          <Sparkles className={cn("mr-2 h-5 w-5 transition-colors", isScrolled ? "text-primary" : "text-foreground group-hover:text-primary")} />
          <span className={cn("transition-colors", isScrolled ? "text-primary" : "text-foreground group-hover:text-primary")}>
            Hair & Skin Couture
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : (isScrolled ? "text-foreground" : "text-foreground"),
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button asChild className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-shadow rounded-full px-6 py-3">
            <Link href="/termin-buchen">Termin Buchen</Link>
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menü öffnen">
                <Menu className={cn("h-6 w-6", isScrolled ? "text-primary" : "text-foreground")} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background p-6">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                   <Link href="/" className="text-lg font-bold flex items-center group">
                     <Sparkles className="mr-2 h-5 w-5 text-primary" />
                     Hair & Skin Couture
                   </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Menü schließen">
                       <X className="h-6 w-6 text-primary" />
                     </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-shadow rounded-full py-3 text-lg">
                     <Link href="/termin-buchen">Termin Buchen</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
