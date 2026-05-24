import { AnimatedElement } from "@/components/animated-element";
import { BookingButton } from "@/components/booking-iframe";
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/whatsapp-fab";

export default function TerminBuchenPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedElement animationType="flyInBottom" as="header" className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">BEREIT FÜR DEINE VERWANDLUNG?</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Sichere dir deinen persönlichen Termin bei Hair & Skin Couture und erlebe meisterhaftes Friseurhandwerk.
          Wir freuen uns darauf, deine Haarwünsche Realität werden zu lassen!
        </p>
      </AnimatedElement>

      <AnimatedElement animationType="fadeIn" delay={300}>
        <BookingButton />
      </AnimatedElement>

      <AnimatedElement animationType="fadeIn" delay={500} className="text-center mt-12">
        <p className="text-muted-foreground mb-4">Probleme bei der Online-Buchung oder spezielle Wünsche?</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer inline-flex items-center gap-3 bg-ink text-white
                     rounded-full px-8 py-4 tracking-[0.18em] text-[12px] uppercase font-sans
                     border border-gold/30 shadow-md
                     hover:border-gold/60 hover:shadow-lg hover:bg-ink/95
                     transition-all duration-500 ease-couture
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
          Via WhatsApp schreiben
        </a>
      </AnimatedElement>
    </div>
  );
}
