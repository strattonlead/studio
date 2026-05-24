import { BeforeAfterSlider } from "@/components/before-after-slider";
import { cn } from "@/lib/utils";

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
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10", className)}>
      {items.map((item) => (
        <BeforeAfterSlider key={item.id} item={item} />
      ))}
    </div>
  );
}
