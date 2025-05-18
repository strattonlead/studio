import Image from 'next/image';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type GalleryItem = {
  id: string;
  beforeSrc: string;
  beforeAlt: string;
  beforeHint?: string;
  afterSrc: string;
  afterAlt: string;
  afterHint?: string;
  description?: string;
};

type ImageGalleryProps = {
  items: GalleryItem[];
  className?: string;
};

export function ImageGallery({ items, className }: ImageGalleryProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", className)}>
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden shadow-lg rounded-lg bg-card group">
          <CardContent className="p-0">
            <div className="grid grid-cols-2">
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src={item.beforeSrc}
                  alt={item.beforeAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.beforeHint || "hair portrait"}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-1.5 text-xs font-semibold tracking-wider">VORHER</div>
              </div>
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src={item.afterSrc}
                  alt={item.afterAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.afterHint || "blonde hair transformation"}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 text-secondary-foreground text-center py-1.5 text-xs font-semibold tracking-wider">NACHHER</div>
              </div>
            </div>
            {item.description && (
              <div className="p-4 bg-card">
                <CardDescription className="text-center text-sm text-muted-foreground">{item.description}</CardDescription>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
