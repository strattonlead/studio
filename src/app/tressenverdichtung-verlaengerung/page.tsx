"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedElement } from "@/components/animated-element";
import { HeroTitle } from "@/components/hero-title";
import { Ornament } from "@/components/ornament";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/whatsapp-fab";

const benefits = [
  {
    n: "01",
    label: "Schonend & natürlich",
    body: "Ohne Kleber, Hitze oder Chemie. Dein Eigenhaar und deine Kopfhaut bleiben unberührt.",
  },
  {
    n: "02",
    label: "Für feines & dünnes Haar",
    body: "Sichtbare Verdichtung ohne Spannung — auch bei sensibler Haarstruktur.",
  },
  {
    n: "03",
    label: "Unsichtbar getragen",
    body: "Feines Silikonband liegt flach am Kopf — kein Druck, kein Abzeichnen.",
  },
  {
    n: "04",
    label: "Individuell angepasst",
    body: "Auf deine Haarfarbe, Struktur und Wunschlänge abgestimmt — ein Unikat.",
  },
];

const steps = [
  {
    n: "01",
    title: "Beratung",
    body: "Wir analysieren deine Haarstruktur, Wunschlänge und Farbe — ehrlich und ohne Druck.",
  },
  {
    n: "02",
    title: "Auswahl",
    body: "Echthaartressen werden farblich und strukturell auf dich abgestimmt.",
  },
  {
    n: "03",
    title: "Befestigung",
    body: "Schonende Einarbeitung über das feine Silikonband — in einem entspannten Termin.",
  },
  {
    n: "04",
    title: "Pflege",
    body: "Du bekommst eine ausführliche Pflege-Anleitung. Bei guter Pflege halten deine Tressen über Monate.",
  },
];

export default function TressenPage() {
  return (
    <>
      {/* Section 1 — Editorial hero */}
      <section className="relative min-h-[70vh] md:min-h-[78vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="hero-video absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="Langes, voluminöses blondes Haar"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            data-ai-hint="long voluminous blonde hair"
          />
        </div>
        <div className="hero-vignette absolute inset-0 z-10" />

        <div className="relative z-20 px-6 max-w-4xl mx-auto">
          <p
            className="eyebrow text-white/85 mb-6 opacity-0"
            style={{ animation: "letterReveal 900ms cubic-bezier(0.2,0.7,0.2,1) 100ms forwards" }}
          >
            Berlin — Atelier
          </p>

          <HeroTitle lines={["TRESSEN", "COUTURE"]} />

          <span className="hero-rule" aria-hidden="true" />

          <p
            className="font-serif italic text-white/90 text-xl md:text-3xl mt-4 font-light tracking-wide opacity-0"
            style={{ animation: "letterReveal 1100ms cubic-bezier(0.2,0.7,0.2,1) 1700ms forwards" }}
          >
            Verdichtung &amp; Verlängerung — schonend, unsichtbar, individuell.
          </p>
        </div>
      </section>

      {/* Section 2 — Die Technik / intro */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <AnimatedElement animationType="blurReveal" duration={900}>
            <p className="eyebrow mb-8">01 — Die Technik</p>
          </AnimatedElement>

          <AnimatedElement animationType="slideUpMask" duration={900} delay={100}>
            <p className="font-display text-3xl md:text-4xl leading-tight text-ink mb-10 tracking-tight">
              Echthaartressen für eine unsichtbare Verdichtung.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeIn" duration={900} delay={200}>
            <p className="drop-cap text-left text-lg md:text-xl text-ink/85 leading-relaxed mb-6">
              Der Vorteil von Tressen liegt darin, dass sie ganz ohne Kleber oder Hitze auskommen. Sie sind besonders
              schonend zum Eigenhaar und zur Kopfhaut, bieten ein angenehm leichtes Tragegefühl und wirken dabei
              unsichtbar und absolut natürlich.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeIn" duration={900} delay={300}>
            <p className="text-left text-lg md:text-xl text-ink/80 leading-relaxed">
              Zudem sind sie nachhaltig: Bei richtiger Pflege kannst du deine Tressen über mehrere Monate hinweg
              problemlos verwenden. Unsere Echthaartressen verfügen über ein feines Silikonband, das besonders flach
              am Kopf anliegt und so für einen optimalen, unauffälligen Sitz sorgt.
            </p>
          </AnimatedElement>

          <Ornament className="my-12 md:my-16" />
        </div>
      </section>

      {/* Section 3 — Vorteile */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedElement animationType="blurReveal" duration={900} className="text-center mb-12 md:mb-16">
            <p className="eyebrow mb-4">02 — Vorteile</p>
            <p className="font-display text-2xl md:text-3xl text-ink tracking-tight">
              Warum Tressen den Unterschied machen.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((b, i) => (
              <AnimatedElement
                key={b.n}
                animationType="slideUpMask"
                duration={800}
                delay={i * 120}
              >
                <article className="h-full bg-card p-8 md:p-10 rounded-lg shadow-[0_2px_24px_-12px_hsl(0_0%_0%/0.2)] border border-border/60">
                  <span className="font-display text-gold text-5xl md:text-6xl leading-none block">
                    {b.n}
                  </span>
                  <span className="block w-12 h-px bg-gold/60 my-5" aria-hidden="true" />
                  <h3 className="font-display text-lg md:text-xl text-ink mb-3 tracking-tight">
                    {b.label}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {b.body}
                  </p>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Dein Weg / Process */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedElement animationType="blurReveal" duration={900} className="text-center mb-12 md:mb-16">
            <p className="eyebrow mb-4">03 — Dein Weg</p>
            <p className="font-display text-2xl md:text-3xl text-ink tracking-tight">
              Vom ersten Gespräch bis zur Pflege.
            </p>
          </AnimatedElement>

          <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {/* Connecting line — vertical on mobile, horizontal on md+ */}
            <span
              className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              aria-hidden="true"
            />
            <span
              className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent"
              aria-hidden="true"
            />
            {steps.map((s, i) => (
              <AnimatedElement
                key={s.n}
                as="li"
                animationType="slideUpMask"
                duration={800}
                delay={i * 130}
                className="relative flex md:flex-col md:items-center md:text-center pl-16 md:pl-0"
              >
                <span
                  className="absolute md:static left-0 top-0 md:mb-4 flex items-center justify-center w-12 h-12 rounded-full
                             bg-background border border-gold/70 text-gold font-display text-base shadow-md"
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-lg md:text-xl text-ink mb-2 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs">
                    {s.body}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 5 — Bild + Zitat */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimatedElement animationType="flyInLeft" duration={1000}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted shadow-[0_8px_40px_-16px_hsl(0_0%_0%/0.35)]">
                <Image
                  src="/tressen-blond.jpg"
                  alt="Haarverlängerung mit Tressen — blondes Haar"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  data-ai-hint="blonde hair extensions"
                />
                {/* Corner ornaments — couture frame */}
                <span className="pointer-events-none absolute top-2 right-2 w-7 h-7 border-t border-r border-white/40" />
                <span className="pointer-events-none absolute bottom-2 left-2 w-7 h-7 border-b border-l border-white/40" />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="flyInRight" duration={1000} delay={150}>
              <blockquote className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -top-6 -left-2 font-display text-gold/40 text-7xl md:text-8xl leading-none select-none"
                >
                  &ldquo;
                </span>
                <p className="font-serif italic text-2xl md:text-3xl text-ink/90 leading-snug pl-6 md:pl-8">
                  Sichtbar und spürbar mehr Haar — ohne Kompromisse bei Tragekomfort und Natürlichkeit.
                </p>
                <footer className="mt-6 pl-6 md:pl-8">
                  <p className="eyebrow">— Hair &amp; Skin Couture</p>
                </footer>
              </blockquote>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Section 6 — CTA */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Ornament />

          <AnimatedElement animationType="blurReveal" duration={900}>
            <p className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-6">
              Bereit für deinen neuen Look?
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeIn" duration={900} delay={150}>
            <p className="text-base md:text-lg text-ink/75 leading-relaxed mb-10 max-w-xl mx-auto">
              Ich nehme mir Zeit für eine ehrliche Beratung — ganz individuell auf die Bedürfnisse deiner Haare.
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeIn" duration={900} delay={250}>
            <div className="flex flex-col items-center gap-6">
              <Button
                asChild
                size="lg"
                className="btn-shimmer bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-10 py-7 text-[13px] tracking-[0.28em] uppercase shadow-xl hover:shadow-2xl transition-shadow"
              >
                <Link href="/termin-buchen">Jetzt Termin buchen</Link>
              </Button>

              <p className="text-sm text-muted-foreground">
                Lieber direkt schreiben?{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink underline underline-offset-4 decoration-gold/60 hover:decoration-gold transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  Via WhatsApp
                </a>
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
}
