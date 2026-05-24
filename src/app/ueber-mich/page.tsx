import Image from "next/image";
import Link from "next/link";
import { AnimatedElement } from "@/components/animated-element";
import { HeroTitle } from "@/components/hero-title";
import { Ornament } from "@/components/ornament";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/whatsapp-fab";

const qualities = [
  {
    n: "01",
    label: "Ehrliche Beratung",
    body: "Ehrliche, typgerechte Beratung — ich sage dir, was wirklich zu dir passt.",
  },
  {
    n: "02",
    label: "Volle Aufmerksamkeit",
    body: "Höchste Aufmerksamkeit für dich und deine Wünsche.",
  },
  {
    n: "03",
    label: "Zeit für dich",
    body: "Genügend Zeit für jede Behandlung — kein Zeitdruck.",
  },
  {
    n: "04",
    label: "Präzision & Know-how",
    body: "Handwerkliche Präzision und modernes Know-how.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      {/* Section 1 — Editorial title (no portrait — magazine-cover register) */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="relative z-20 px-6 max-w-4xl mx-auto">
          <p
            className="eyebrow mb-6 opacity-0"
            style={{ animation: "letterReveal 900ms cubic-bezier(0.2,0.7,0.2,1) 100ms forwards" }}
          >
            Berlin — Atelier
          </p>

          <HeroTitle
            lines={["JANA", "SCHNEBEL"]}
            className="font-display text-ink text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 tracking-[0.18em] sm:tracking-[0.24em] font-normal leading-[1.05]"
          />

          <span className="hero-rule" aria-hidden="true" />

          <p
            className="font-serif italic text-ink/80 text-xl md:text-2xl mt-4 font-light tracking-wide opacity-0"
            style={{ animation: "letterReveal 1100ms cubic-bezier(0.2,0.7,0.2,1) 1500ms forwards" }}
          >
            Friseurmeisterin
          </p>
        </div>
      </section>

      {/* Section 2 — Portrait + Signature intro */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimatedElement animationType="flyInLeft" duration={1000}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted shadow-[0_8px_40px_-16px_hsl(0_0%_0%/0.35)] mx-auto max-w-md md:max-w-none">
                <Image
                  src="/jana-mit-hund.jpg"
                  alt="Jana Schnebel mit ihrem Hund"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  data-ai-hint="woman dog portrait"
                />
                {/* Corner ornaments — couture frame */}
                <span className="pointer-events-none absolute top-2 right-2 w-7 h-7 border-t border-r border-white/40" />
                <span className="pointer-events-none absolute bottom-2 left-2 w-7 h-7 border-b border-l border-white/40" />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="flyInRight" duration={1000} delay={150}>
              <p className="eyebrow mb-5">01 — Mein Weg</p>
              <p className="font-display text-2xl md:text-3xl leading-tight text-ink mb-8 tracking-tight">
                Mit Leidenschaft. Mit Präzision. Mit Zeit.
              </p>
              <p className="drop-cap text-lg md:text-xl text-ink/85 leading-relaxed">
                Hallo, ich bin Jana. Seit zwölf Jahren bin ich Friseurin und habe vor zwei Jahren —
                kurz nach meinem Meisterabschluss — meinen eigenen Salon eröffnet. Als{" "}
                <em className="font-serif italic text-ink">Blond-Spezialistin</em> gehören Balayage,
                Airtouch, Babylights und Tressenverlängerungen zu meinen Fachgebieten.
              </p>
              <p className="mt-5 text-lg md:text-xl text-ink/80 leading-relaxed">
                Ich freue mich darauf, dich bald persönlich in meinem Atelier zu einem
                Beratungstermin zu begrüßen — damit wir gemeinsam deinen Traum vom perfekten Haar
                verwirklichen.
              </p>
            </AnimatedElement>
          </div>

          <Ornament className="my-16 md:my-20" />
        </div>
      </section>

      {/* Section 3 — Was mich auszeichnet (numbered cards) */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedElement animationType="blurReveal" duration={900} className="text-center mb-12 md:mb-16">
            <p className="eyebrow mb-4">02 — Was mich auszeichnet</p>
            <p className="font-display text-2xl md:text-3xl text-ink tracking-tight">
              Vier Versprechen, an denen du mich misst.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {qualities.map((q, i) => (
              <AnimatedElement
                key={q.n}
                animationType="slideUpMask"
                duration={800}
                delay={i * 120}
              >
                <article className="h-full bg-card p-8 md:p-10 rounded-lg shadow-[0_2px_24px_-12px_hsl(0_0%_0%/0.2)] border border-border/60">
                  <span className="font-display text-gold text-5xl md:text-6xl leading-none block">
                    {q.n}
                  </span>
                  <span className="block w-12 h-px bg-gold/60 my-5" aria-hidden="true" />
                  <h3 className="font-display text-lg md:text-xl text-ink mb-3 tracking-tight">
                    {q.label}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {q.body}
                  </p>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Pull quote */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedElement animationType="blurReveal" duration={1000}>
            <blockquote className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-6 -left-2 font-display text-gold/40 text-7xl md:text-8xl leading-none select-none"
              >
                &ldquo;
              </span>
              <p className="font-serif italic text-2xl md:text-3xl text-ink/90 leading-snug pl-6 md:pl-8">
                Deine Zufriedenheit ist mein Antrieb. Ich nehme mir die Zeit, die du verdienst —
                für ein Ergebnis, das begeistert.
              </p>
              <footer className="mt-6 pl-6 md:pl-8">
                <p className="eyebrow">— Jana Schnebel</p>
              </footer>
            </blockquote>
          </AnimatedElement>
        </div>
      </section>

      {/* Section 5 — English version (preserved, demoted visually) */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <AnimatedElement animationType="fadeIn" duration={900}>
            <p className="eyebrow text-muted-foreground mb-5">For English-speaking guests</p>
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" duration={900} delay={120}>
            <p className="font-serif italic text-base md:text-lg text-ink/70 leading-relaxed">
              Hi, my name is Jana. I have been a hairdresser for twelve years and opened my salon
              two years ago, shortly after finishing my master&apos;s degree. As a blonde specialist,
              balayage, airtouch, babylights and weft extensions are my expertise. I&apos;m looking
              forward to welcoming you to my salon for a personal consultation — so we can bring
              your dream of perfect hair to life together.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Section 6 — CTA */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Ornament />

          <AnimatedElement animationType="blurReveal" duration={900}>
            <p className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-6">
              Lust auf ein Beratungsgespräch?
            </p>
          </AnimatedElement>

          <AnimatedElement animationType="fadeIn" duration={900} delay={150}>
            <p className="text-base md:text-lg text-ink/75 leading-relaxed mb-10 max-w-xl mx-auto">
              Lass uns gemeinsam deinen Look gestalten.
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
