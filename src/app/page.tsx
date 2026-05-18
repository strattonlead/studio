
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedElement } from '@/components/animated-element';
import { Ornament } from '@/components/ornament';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const HERO_TITLE = 'HAIR & SKIN COUTURE';
const LETTER_BASE_DELAY = 250;
const LETTER_STEP = 55;

function HeroTitle() {
  return (
    <h1
      className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 tracking-[0.18em] sm:tracking-[0.24em] font-normal"
      aria-label={HERO_TITLE}
    >
      {HERO_TITLE.split('').map((char, i) => (
        <span
          key={`${char}-${i}`}
          aria-hidden="true"
          className={`hero-letter${char === ' ' ? ' hero-letter--space' : ''}`}
          style={{ animationDelay: `${LETTER_BASE_DELAY + i * LETTER_STEP}ms` }}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </h1>
  );
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] min-h-[620px] flex items-center justify-center text-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-background-mobile.jpg"
          className="hero-video absolute top-0 left-0 w-full h-full object-cover z-0"
          data-ai-hint="salon atmosphere video"
          ref={videoRef}
        >
          <source src="/hero-background-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/hero-background-optimized.mp4" type="video/mp4" media="(min-width: 769px)" />
          Dein Browser unterstützt das Video-Tag nicht.
        </video>

        {/* Cinematic vignette + base darken */}
        <div className="hero-vignette absolute inset-0 z-10" />

        <div className="relative z-20 px-6 max-w-5xl mx-auto">
          <p
            className="eyebrow text-white/85 mb-6 opacity-0"
            style={{
              animation: 'letterReveal 900ms cubic-bezier(0.2,0.7,0.2,1) 100ms forwards',
            }}
          >
            Berlin — Kurfürstendamm
          </p>

          <HeroTitle />

          <span className="hero-rule" aria-hidden="true" />

          <p
            className="font-serif italic text-white/90 text-xl md:text-3xl mb-10 font-light tracking-wide opacity-0"
            style={{
              animation: 'letterReveal 1100ms cubic-bezier(0.2,0.7,0.2,1) 1700ms forwards',
            }}
          >
            Not your average hairstylist
          </p>

          <div
            className="opacity-0"
            style={{
              animation: 'letterReveal 1000ms cubic-bezier(0.2,0.7,0.2,1) 2100ms forwards',
            }}
          >
            <Button
              asChild
              size="lg"
              className="btn-shimmer bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-10 py-7 text-[13px] tracking-[0.28em] uppercase shadow-2xl"
            >
              <Link href="/termin-buchen">Jetzt Termin buchen</Link>
            </Button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70">
          <span className="eyebrow !text-white/60 !text-[0.6rem]">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-transparent text-center relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedElement animationType="blurReveal" duration={900}>
            <p className="eyebrow mb-8">01 — Über Blond</p>
          </AnimatedElement>

          <AnimatedElement animationType="slideUpMask" duration={900} delay={100}>
            <p className="font-display text-2xl md:text-4xl leading-tight text-ink mb-10 tracking-tight">
              Blond ist mehr als nur eine Haarfarbe.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeIn" duration={900} delay={200}>
            <p className="drop-cap text-left text-lg md:text-xl text-ink/85 leading-relaxed mb-6">
              Es ist meine Leidenschaft und mein Spezialgebiet. Mit einem feinen Gespür für Nuancen,
              Präzision und Stil kreiere ich individuelle Blondtöne, die perfekt zu dir passen — von
              natürlichen Highlights bis hin zu ikonischem Platin.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeIn" duration={900} delay={300}>
            <p className="text-lg md:text-xl text-ink/80 leading-relaxed mb-10">
              Ich arbeite mit hochwertigen Produkten, viel Erfahrung und Liebe zum Detail, um dein
              persönliches <em className="font-serif italic text-ink">Signature Blond</em> zu gestalten.
            </p>
          </AnimatedElement>

          <Ornament className="my-12 md:my-16" />

          <AnimatedElement animationType="blurReveal" duration={900} delay={150}>
            <p className="font-display text-2xl md:text-3xl text-ink tracking-tight mb-12">
              Dein neuer Blond-Look beginnt hier.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeIn" duration={900} delay={300}>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="btn-shimmer bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-10 py-7 text-[13px] tracking-[0.28em] uppercase shadow-xl hover:shadow-2xl transition-shadow"
              >
                <Link href="/termin-buchen">Jetzt Termin buchen</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
}
