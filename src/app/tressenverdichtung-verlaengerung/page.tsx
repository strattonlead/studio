
import Image from "next/image";
import { AnimatedElement } from "@/components/animated-element";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Wind, Award, Star } from "lucide-react";

const features = [
  { icon: <CheckSquare className="h-6 w-6 text-secondary" />, text: "Ideal für feines oder dünner werdendes Haar" },
  { icon: <Wind className="h-6 w-6 text-secondary" />, text: "Schonende Befestigungsmethoden" },
  { icon: <Award className="h-6 w-6 text-secondary" />, text: "Nahtlose Übergänge – sichtbar und spürbar mehr Haar" },
  { icon: <Star className="h-6 w-6 text-secondary" />, text: "Individuell abgestimmt auf Haarfarbe, Struktur & Wunschlänge" },
];

export default function TressenPage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 md:py-32 text-center text-white overflow-hidden">
        <Image
          src="/banner.jpg"
          alt="Langes, voluminöses Haar"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="long voluminous hair"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <AnimatedElement animationType="flyInBottom" delay={200} as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            Mehr Haar. Mehr Ausdruck. Mehr DU.
          </AnimatedElement>
          <AnimatedElement animationType="fadeIn" delay={500} as="p" className="text-lg md:text-2xl max-w-3xl mx-auto font-light">
            Für alle, die sich mehr Volumen oder Länge wünschen, bieten wir professionelle Haarverdichtungen und -verlängerungen mit Tressen an.
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedElement animationType="flyInRight" className="order-1 md:order-2">
              <Card className="bg-card shadow-xl rounded-lg p-6 md:p-8">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-3xl font-semibold text-foreground">Unsere Tressen-Technik:</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Der Vorteil von Tressen liegt darin, dass sie ganz ohne Kleber oder Hitze auskommen. Sie sind besonders schonend zum Eigenhaar und zur Kopfhaut, bieten ein angenehm leichtes Tragegefühl und wirken dabei unsichtbar und absolut natürlich. Zudem sind sie nachhaltig: Bei richtiger Pflege kannst du deine Tressen über mehrere Monate hinweg problemlos verwenden. Unsere Echthaartressen verfügen über ein feines Silikonband, das besonders flach am Kopf anliegt und so für einen optimalen, unauffälligen Sitz sorgt.
                  </p>
                  <ul className="space-y-4 mb-6">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 pt-1">{feature.icon}</div>
                        <span className="text-base text-muted-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-muted-foreground font-medium">
                    Du träumst von einer langen Mähne oder mehr Fülle im Alltag? Dann bist du bei uns genau richtig.
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>
            <AnimatedElement animationType="flyInLeft" className="order-2 md:order-1">
              <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/tressen-blond.jpg" 
                  alt="Haarverlängerung mit Tressen - Blondes Haar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  data-ai-hint="blonde hair extensions"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
}

