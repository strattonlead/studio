
import { AnimatedElement } from "@/components/animated-element";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedElement animationType="flyInBottom" as="header" className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">DATENSCHUTZERKLÄRUNG</h1>
      </AnimatedElement>

      <AnimatedElement animationType="fadeIn" delay={200}>
        <Card className="max-w-3xl mx-auto bg-card shadow-lg rounded-lg p-6 md:p-8">
          <CardContent className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-medium text-foreground mt-4 mb-1">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten
                passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du
                persönlich identifiziert werden kannst. Ausführliche Informationen zum Thema Datenschutz entnimmst du
                unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              <h3 className="text-lg font-medium text-foreground mt-4 mb-1">Datenerfassung auf dieser Website</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                kannst du dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung oder dem <Link href="/impressum" className="text-primary hover:underline">Impressum</Link> dieser Website entnehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              {/* Add specific hosting provider details here if known, otherwise general placeholder */}
              <h3 className="text-lg font-medium text-foreground mt-4 mb-1">Externes Hosting</h3>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
                werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p>
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
                effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1
                lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
                Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
                (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Unser(e) Hoster wird (werden) deine Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
                Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-medium text-foreground mt-4 mb-1">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln
                deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn du diese Website benutzt, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen du persönlich identifiziert werden kannst. Die
                vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
                erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                nicht möglich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">4. Deine Rechte</h2>
              <p>
                Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
                sowie zu weiteren Fragen zum Thema personenbezogene Daten kannst du dich jederzeit an uns wenden.
              </p>
            </section>
            
            {/* Add more sections as needed, e.g., Cookies, Analyse-Tools, Plugins etc. */}
            <section>
              <p className="text-sm mt-8">
                <em>
                  Dies ist ein generierter Platzhalter für eine Datenschutzerklärung. 
                  Bitte ersetze diesen Text durch deine vollständige und rechtlich geprüfte Datenschutzerklärung.
                  Du kannst Generatoren oder Rechtsberatung nutzen, um eine korrekte Erklärung zu erstellen.
                </em>
              </p>
            </section>
          </CardContent>
        </Card>
      </AnimatedElement>
    </div>
  );
}
