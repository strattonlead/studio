import Image from "next/image";
import { AnimatedElement } from "@/components/animated-element";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Scissors, MessageSquare, CheckCircle } from "lucide-react";

const qualities = [
  { icon: <MessageSquare className="h-6 w-6 text-secondary" />, text: "Ehrliche, typgerechte Beratung" },
  { icon: <Heart className="h-6 w-6 text-secondary" />, text: "Höchste Aufmerksamkeit für dich und deine Wünsche" },
  { icon: <CheckCircle className="h-6 w-6 text-secondary" />, text: "Genügend Zeit für jede Behandlung – kein Zeitdruck" },
  { icon: <Scissors className="h-6 w-6 text-secondary" />, text: "Handwerkliche Präzision & modernes Know-how" },
];

export default function UeberMichPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
        <AnimatedElement animationType="flyInLeft" className="md:col-span-2">
          <div className="relative aspect-square md:aspect-[3/4] rounded-lg overflow-hidden shadow-xl mx-auto max-w-md md:max-w-none">
            <Image
              src="/jana-mit-hund.jpg" // Updated image source
              alt="Jana Schnebel mit ihrem Hund" // Updated alt text
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="woman dog" // Updated AI hint
            />
          </div>
        </AnimatedElement>

        <AnimatedElement animationType="flyInRight" className="md:col-span-3">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">JANA SCHNEBEL</h1>
            <p className="text-xl text-secondary font-semibold">Friseurmeisterin</p>
          </header>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hallo, ich bin Jana. Ich bin seit zwölf Jahren Friseurin und habe vor zwei Jahren – kurz nach meinem Meisterabschluss – meinen eigenen Salon eröffnet.
              Als Blond-Spezialistin gehören Balayage, Airtouch, Babylights und Tressenverlängerungen zu meinen Fachgebieten.
              Wenn du schon immer davon geträumt hast, blond zu sein, zögere nicht, mich zu kontaktieren – ich helfe dir gerne, deinen Wunsch Wirklichkeit werden zu lassen.
            </p>
            <p>
              Hi, my name is Jana. I have been a hairdresser for twelve years. I opened my salon two years ago, shortly after finishing my master&apos;s degree.
              Being a blonde specialist, balayage, air touch, babylights and weft extensions are my expertise. If you ever wished to be blonde, don&apos;t hesitate to contact me so l can help you make your dream a reality.
            </p>
          </div>
          
          <Card className="bg-card shadow-lg rounded-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Was mich auszeichnet:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {qualities.map((quality, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 pt-1">{quality.icon}</div>
                    <span className="text-base text-muted-foreground">{quality.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Deine Zufriedenheit ist mein Antrieb. Ich nehme mir die Zeit, die du verdienst – für ein Ergebnis, das begeistert.
          </p>
        </AnimatedElement>
      </div>
    </div>
  );
}
