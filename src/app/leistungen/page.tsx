import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedElement } from "@/components/animated-element";
import { Paintbrush, Diamond, Sparkles, Leaf } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <Paintbrush className="h-10 w-10 text-secondary" />,
    title: "Individuelle Farbtechniken & Haarpflege",
    description: "Ob Balayage, Airtouch, Babylights oder die angesagte Scandinavian Hairline – bei uns bist du in den besten Händen, wenn es um aufwendige und moderne Farbtechniken geht. Jede Farbe wird individuell auf deinen Typ abgestimmt und mit höchster Präzision umgesetzt.",
    image: "https://picsum.photos/seed/farbtechnik/600/400",
    aiHint: "hair coloring process"
  },
  {
    icon: <Diamond className="h-10 w-10 text-secondary" />,
    title: "Spezialistin für Blond & Langhaar",
    description: "Blondtöne verlangen Fingerspitzengefühl und Erfahrung – beides findest du hier. Als Langhaarspezialistin verstehe ich, wie wichtig Struktur, Glanz und die richtige Pflege für gesundes, langes Haar sind.",
    image: "https://picsum.photos/seed/blondlanghaar/600/400",
    aiHint: "blonde long hair"
  },
  {
    icon: <Sparkles className="h-10 w-10 text-secondary" />,
    title: "Pflege-Highlights mit Haarbotox",
    description: "Verwöhne dein Haar mit einer intensiven Haarbotox-Behandlung. Diese Pflegekur bringt dein Haar zum Strahlen, stärkt es von innen und sorgt für eine sichtbare Verjüngung der Haarstruktur.",
    image: "https://picsum.photos/seed/haarbotox/600/400",
    aiHint: "hair treatment shiny"
  },
  {
    icon: <Leaf className="h-10 w-10 text-secondary" />,
    title: "Vegane & tierversuchsfreie Produkte",
    description: "Für alle, die Wert auf Nachhaltigkeit legen: Es stehen auch vegane und tierversuchsfreie Produkte zur Auswahl – ohne Kompromisse bei Qualität oder Ergebnis.",
    image: "https://picsum.photos/seed/veganprodukte/600/400",
    aiHint: "natural beauty products"
  },
];

export default function LeistungenPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedElement animationType="flyInBottom" as="header" className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Unsere Leistungen</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Entdecken Sie maßgeschneiderte Services für Ihr schönstes Blond und gesundes Haar.
        </p>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {services.map((service, index) => (
          <AnimatedElement key={service.title} animationType="fadeIn" delay={index * 150}>
            <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card">
              <div className="relative w-full h-64">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint={service.aiHint}
                />
              </div>
              <CardHeader className="flex flex-row items-start space-x-4 p-6">
                <div className="flex-shrink-0 pt-1">{service.icon}</div>
                <div>
                  <CardTitle className="text-2xl font-semibold text-foreground">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}
