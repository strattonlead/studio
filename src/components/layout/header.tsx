
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/preise', label: 'Preise' },
  { href: '/ergebnisse', label: 'Ergebnisse' },
  { href: '/tressenverdichtung-verlaengerung', label: 'Tressenverdichtung / Verlängerung' },
  { href: '/ueber-mich', label: 'Über Mich' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-couture',
        isScrolled
          ? 'bg-background/85 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--gold)/0.35),0_8px_24px_-12px_hsl(0_0%_0%/0.2)]'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="group flex flex-col leading-tight">
          <span
            className={cn(
              'font-display text-lg md:text-xl tracking-[0.18em] transition-colors',
              !isScrolled && 'header-over-hero text-white',
              isScrolled && 'text-ink'
            )}
          >
            HAIR &amp; SKIN
          </span>
          <span
            className={cn(
              'font-serif italic text-xs md:text-sm tracking-[0.5em] -mt-0.5 transition-colors',
              !isScrolled && 'header-over-hero text-white/85',
              isScrolled && 'text-muted-foreground'
            )}
          >
            couture
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={active}
                className={cn(
                  'nav-link text-[13px] font-medium tracking-[0.16em] uppercase font-sans transition-colors',
                  !isScrolled && 'header-over-hero text-white/90 hover:text-white',
                  isScrolled && (active ? 'text-ink' : 'text-foreground hover:text-ink')
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            asChild
            className="hidden md:inline-flex btn-shimmer bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 py-3 tracking-[0.18em] text-[11px] uppercase font-sans shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href="/termin-buchen">Termin Buchen</Link>
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menü öffnen">
                <Menu
                  className={cn(
                    'h-6 w-6 transition-colors',
                    isScrolled ? 'text-ink' : 'text-white drop-shadow-md'
                  )}
                />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-background p-8 flex flex-col">
              <div className="mb-8">
                <Link href="/" className="group flex flex-col leading-tight">
                  <span className="font-display text-xl tracking-[0.18em] text-ink">
                    HAIR &amp; SKIN
                  </span>
                  <span className="font-serif italic text-sm tracking-[0.5em] text-muted-foreground -mt-0.5">
                    couture
                  </span>
                </Link>
              </div>

              <div className="mb-10">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="btn-shimmer w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-4 tracking-[0.18em] text-xs uppercase shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Link href="/termin-buchen">Termin buchen</Link>
                  </Button>
                </SheetClose>
              </div>

              <nav className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      data-active={pathname === link.href}
                      className={cn(
                        'nav-link text-base font-medium tracking-[0.14em] uppercase font-sans transition-colors',
                        pathname === link.href ? 'text-ink' : 'text-foreground hover:text-ink'
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
