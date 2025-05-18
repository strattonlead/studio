import { AnimatedElement } from "@/components/animated-element";
import { ImageGallery, type GalleryItem } from "@/components/image-gallery";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    beforeSrc: "/dunkel-zu-blond-balayage-vorher.jpg",
    beforeAlt: "Vorher Bild 1",
    beforeHint: "dark hair",
    afterSrc: "/dunkel-zu-blond-balayage-nachher.jpg",
    afterAlt: "Nachher Bild 1 - Helles Blond Balayage",
    afterHint: "blonde balayage",
    description: "Blond Balayage Fresh-Up.",
  },
  {
    id: "2",
    beforeSrc: "/haar-korrektur-blond-vorher.jpg",
    beforeAlt: "Vorher Bild 2",
    beforeHint: "uneven color",
    afterSrc: "/haar-korrektur-blond-nachher.jpg",
    afterAlt: "Nachher Bild 2 - Farbkorrektur zu kühlem Blond",
    afterHint: "cool blonde correction",
    description: "Farbkorrektur wird zum stahlendem Blond.",
  },
  {
    id: "3",
    beforeSrc: "/farbkorrektur-kuehles-blond-vorher.jpg",
    beforeAlt: "Vorher Bild 3",
    beforeHint: "short hair",
    afterSrc: "/farbkorrektur-kuehles-blond-nachher.jpg",
    afterAlt: "Nachher Bild 3 - Blondierung und Styling",
    afterHint: "blonde highlights styling",
    description: "Natürliche Highlights für einen sonnengeküssten Look.",
  },
  {
    id: "4",
    beforeSrc: "/aufhellung-vorher.jpg",
    beforeAlt: "Vorher Bild 4",
    beforeHint: "grown out roots",
    afterSrc: "/aufhellung-nachher.jpg",
    afterAlt: "Nachher Bild 4 - Scandinavian Hairline",
    afterHint: "scandinavian hairline blonde",
    description: "Sanfte Aufhellung für ein natürliches Finish.",
  },
];

export default function ErgebnissePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedElement animationType="flyInBottom" as="header" className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">ERGEBNISSE</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Hier stehen deine Wünsche im Mittelpunkt. Ob natürliches Blond, weiche Farbverläufe, Aufbau-Treatment wie Haar-Botox oder maximale Haarfülle.
        </p>
      </AnimatedElement>

      <AnimatedElement animationType="fadeIn" delay={200}>
        <ImageGallery items={galleryItems} />
      </AnimatedElement>

      <AnimatedElement animationType="fadeIn" delay={400} className="mt-12 md:mt-16">
        <Alert className="bg-card border-secondary shadow-md">
          <Info className="h-5 w-5 text-secondary" />
          <AlertTitle className="font-semibold text-foreground">Wichtiger Hinweis</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            Bitte beachte, dass bei einigen der gezeigten Ergebnisse zuvor Fremdarbeiten geleistet wurden. 
            Die Nachher-Bilder zeigen die Korrektur und das von uns erzielte Endergebnis. 
            Wir legen größten Wert auf eine typgerechte Beratung und handwerkliche Perfektion.
          </AlertDescription>
        </Alert>
      </AnimatedElement>
    </div>
  );
}
