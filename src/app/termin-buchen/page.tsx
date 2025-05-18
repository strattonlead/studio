import { AnimatedElement } from "@/components/animated-element";
import { BookingIframe } from "@/components/booking-iframe";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

export default function TerminBuchenPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedElement animationType="flyInBottom" as="header" className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Bereit für deine Verwandlung?</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Sichere dir deinen persönlichen Termin bei Hair & Skin Couture und erlebe meisterhaftes Friseurhandwerk. 
          Wir freuen uns darauf, deine Haarwünsche Realität werden zu lassen!
        </p>
      </AnimatedElement>

      <AnimatedElement animationType="fadeIn" delay={300}>
        <BookingIframe />
      </AnimatedElement>

      <AnimatedElement animationType="fadeIn" delay={500} className="text-center mt-12">
        <p className="text-muted-foreground mb-2">Probleme bei der Online-Buchung oder spezielle Wünsche?</p>
        <Button variant="outline" asChild>
          <a href="tel:+491234567890">Ruf uns an</a>
        </Button>
      </AnimatedElement>
    </div>
  );
}
