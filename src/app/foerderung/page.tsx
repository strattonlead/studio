
import { AnimatedElement } from "@/components/animated-element";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "Förderung – Hair & Skin Couture",
  description:
    "Unser Meisterbetrieb wurde mit Mitteln des Europäischen Fonds für regionale Entwicklung (EFRE) im Rahmen der Meistergründungsprämie des Landes Berlin ko-finanziert.",
};

export default function FoerderungPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedElement animationType="flyInBottom" as="header" className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">FÖRDERUNG</h1>
      </AnimatedElement>

      <AnimatedElement animationType="fadeIn" delay={200}>
        <Card className="max-w-3xl mx-auto bg-card shadow-lg rounded-lg p-6 md:p-8">
          <CardContent className="space-y-8 text-muted-foreground">
            <section className="text-center">
              <Image
                src="/eu-efre-logo.jpg"
                alt="Europäische Union – Europäischer Fonds für regionale Entwicklung"
                width={800}
                height={624}
                className="mx-auto h-auto w-full max-w-xs md:max-w-sm"
                priority
              />
            </section>

            <section>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground text-lg">
                „Unser Meisterbetrieb hat eine Meistergründungsprämie erhalten, die mit Mitteln aus dem Europäischen Fonds für die regionale Entwicklung ko-finanziert worden ist."
              </blockquote>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Über unser Gründungsvorhaben</h2>
              <p>
                Hair &amp; Skin Couture ist ein Friseur-Meisterbetrieb in Berlin am Kurfürstendamm,
                spezialisiert auf Blond, Langhaar, Balayage und Haarverlängerung. Inhaberin
                Jana Schnebel hat das Unternehmen als Friseurmeisterin gegründet.
              </p>
              <p className="mt-2">
                Die Existenzgründung wurde durch die Meistergründungsprämie des Landes Berlin
                gefördert. Diese Förderung wird zu 50 % aus Mitteln des Europäischen Fonds
                für regionale Entwicklung (EFRE) ko-finanziert.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Förderdetails</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Förderung: Meistergründungsprämie des Landes Berlin</li>
                <li>Ko-Finanzierung: 50 % Land Berlin, 50 % Europäischer Fonds für regionale Entwicklung (EFRE)</li>
                <li>Operationelles Programm: EFRE Berlin 2014–2020</li>
                <li>Prioritätsachse: „Produktivität der Wirtschaft"</li>
                <li>Rechtsgrundlage: De-minimis-Beihilfe gemäß Verordnung (EG) Nr. 1407/2013</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Weitere Informationen</h2>
              <p>
                <a
                  href="https://www.hwk-berlin.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Handwerkskammer Berlin
                </a>
                {" | "}
                <a
                  href="https://www.berlin.de/sen/wirtschaft/gruenden-und-foerdern/europaeische-strukturfonds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  EFRE Berlin
                </a>
              </p>
            </section>
          </CardContent>
        </Card>
      </AnimatedElement>
    </div>
  );
}
