
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedElement } from '@/components/animated-element';

import { useRef, useEffect } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const checkAndPlayVideo = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    }
  };

  return (
    <>
      {/* Add a script or trigger for checkAndPlayVideo if needed */}
      
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-background-mobile.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          data-ai-hint="salon atmosphere video"
          ref={videoRef}
        >
          <source src="/hero-background-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/hero-background-optimized.mp4" type="video/mp4" media="(min-width: 769px)"/>

          Dein Browser unterstützt das Video-Tag nicht.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Dark overlay for text contrast, increased opacity slightly */}
        
        <div className="relative z-20 p-4">
          <AnimatedElement animationType="flyInBottom" delay={200} duration={800} as="h1" className="text-5xl sm:text-6xl md:text-7xl mb-4">
            HAIR & SKIN COUTURE
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" delay={800} duration={1000} as="p" className="text-xl md:text-3xl mb-8 font-light">
          Not your average hairstylist
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" delay={1200} duration={1000}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-shadow font-sans">
              <Link href="/termin-buchen">Jetzt Termin buchen</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* New Text Section */}
      <section className="py-16 md:py-24 bg-transparent text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedElement animationType="fadeIn" delay={100}>
            <p className="text-lg md:text-xl text-foreground mb-6">
              Blond ist mehr als nur eine Haarfarbe. Es ist meine Leidenschaft und mein Spezialgebiet. Mit einem feinen Gespür für Nuancen, Präzision und Stil kreiere ich individuelle Blondtöne, die perfekt zu dir passen – von natürlichen Highlights bis hin zu ikonischem Platin.
            </p>
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" delay={300}>
            <p className="text-lg md:text-xl text-foreground mb-8">
              Ich arbeite mit hochwertigen Produkten, viel Erfahrung und Liebe zum Detail, um dein persönliches Signature Blond zu gestalten.
            </p>
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" delay={500}>
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              Dein neuer Blond-Look beginnt hier.
            </p>
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" delay={600}>
            <div className="flex justify-center my-16"> {/* Add this div for centering */}
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-shadow font-sans">
                <Link href="/termin-buchen">Jetzt Termin buchen</Link>
              </Button>
            </div> 
          </AnimatedElement>
        </div>
      </section>
    </>
  );
}
