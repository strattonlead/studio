
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedElement } from '@/components/animated-element';
import { BookingIframe } from '@/components/booking-iframe';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/background-sand.jpg"
          alt="Warmer Sand Textur Hintergrund für den Salon"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
          data-ai-hint="sand texture"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div> {/* Dark overlay for text contrast */}
        
        <div className="relative z-20 p-4">
          <AnimatedElement animationType="flyInBottom" delay={200} duration={800} as="h1" className="text-5xl sm:text-6xl md:text-7xl mb-4">
            HAIR & SKIN COUTURE
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" delay={800} duration={1000} as="p" className="text-xl md:text-3xl mb-8 font-light">
            Blonde isn’t just a color — it’s a statement.
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" delay={1200} duration={1000}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-shadow">
              <Link href="/termin-buchen">Jetzt Termin buchen</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Booking Iframe Section */}
      <section id="booking" className="py-16 md:py-24 bg-transparent"> {/* Changed bg-background to bg-transparent */}
        <div className="container mx-auto px-4">
          <AnimatedElement animationType="fadeIn" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Dein nächster Traumlook ist nur einen Klick entfernt
            </h2>
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" delay={400}>
            <BookingIframe />
          </AnimatedElement>
        </div>
      </section>
    </>
  );
}

