
import { AnimatedElement } from "@/components/animated-element";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedElement animationType="flyInBottom" as="header" className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">IMPRESSUM</h1>
      </AnimatedElement>

      <AnimatedElement animationType="fadeIn" delay={200}>
        <Card className="max-w-3xl mx-auto bg-card shadow-lg rounded-lg p-6 md:p-8">
          <CardContent className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG:</h2>
              <p>Jana Schnebel</p>
              <p>Hair & Skin Couture</p>
              <p>Uhlandstraße 162</p>
              <p>10719 Berlin</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Kontakt:</h2>
              <p>Telefon: 0157 31108386</p>
              <p>E-Mail: info@hairandskincouture.de</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Vertreten durch:</h2>
              <p>Jana Schnebel</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Umsatzsteuer-ID:</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</p>
              <p>DE356655336</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Berufsbezeichnung und berufsrechtliche Regelungen:</h2>
              <p>Berufsbezeichnung: Friseurmeisterin</p>
              <p>Zuständige Kammer: Handwerkskammer Berlin, Blücherstraße 68, 10961 Berlin</p>
              <p>Verliehen durch: Deutschland</p>
              <p>Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung (HwO)</p>
              <p>Regelungen einsehbar unter: <a href="http://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gesetze-im-internet.de/hwo/</a></p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
              <p>Jana Schnebel</p>
              <p>Adresse siehe oben</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Streitschlichtung:</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> https://ec.europa.eu/consumers/odr</a>.
              </p>
              <p>Unsere E-Mail-Adresse findest du oben im Impressum.</p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Datenschutz:</h2>
              <p>
                Ausführliche Informationen zum Datenschutz findest du in unserer <Link href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>.
              </p>
            </section>
          </CardContent>
        </Card>
      </AnimatedElement>
    </div>
  );
}
