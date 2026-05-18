"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

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

/**
 * As the card travels through the viewport, the "vorher" layer dissolves to
 * reveal the "nachher" beneath it. Tied to scroll position, not a hover.
 */
function CrossfadeCard({ item }: { item: GalleryItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);

  // Map scroll progress 0.25 → 0.75 onto 1 → 0 for the vorher opacity.
  const beforeOpacity = (() => {
    if (progress <= 0.25) return 1;
    if (progress >= 0.75) return 0;
    return 1 - (progress - 0.25) / 0.5;
  })();

  // Label switches over at the midpoint.
  const showAfterLabel = progress > 0.5;

  return (
    <Card className="overflow-hidden shadow-[0_2px_24px_-12px_hsl(0_0%_0%/0.25)] rounded-lg bg-card group">
      <CardContent className="p-0">
        <div
          ref={ref}
          className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-muted"
        >
          {/* Nachher (bottom layer) */}
          <Image
            src={item.afterSrc}
            alt={item.afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            className="object-cover"
            data-ai-hint={item.afterHint || 'blonde hair transformation'}
          />

          {/* Vorher (top layer, fades out on scroll) */}
          <Image
            src={item.beforeSrc}
            alt={item.beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            className="object-cover transition-opacity duration-100 ease-linear"
            style={{ opacity: beforeOpacity }}
            data-ai-hint={item.beforeHint || 'hair portrait'}
          />

          {/* Hairline progress indicator at the bottom */}
          <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-black/15">
            <div
              className="h-full bg-gold transition-[width] duration-100 ease-linear"
              style={{ width: `${Math.min(1, Math.max(0, (progress - 0.15) / 0.7)) * 100}%` }}
            />
          </div>

          {/* Label crossfade — VORHER / NACHHER */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className={cn(
                'inline-block px-3 py-1 text-[10px] tracking-[0.32em] uppercase font-sans backdrop-blur-sm transition-opacity duration-500',
                'bg-black/55 text-white border border-white/20',
                showAfterLabel ? 'opacity-0' : 'opacity-100'
              )}
            >
              Vorher
            </span>
            <span
              className={cn(
                'absolute top-0 left-0 inline-block px-3 py-1 text-[10px] tracking-[0.32em] uppercase font-sans backdrop-blur-sm transition-opacity duration-500',
                'bg-gold/85 text-white border border-white/30',
                showAfterLabel ? 'opacity-100' : 'opacity-0'
              )}
            >
              Nachher
            </span>
          </div>

          {/* Corner ornaments — couture frame */}
          <span className="pointer-events-none absolute top-2 right-2 w-6 h-6 border-t border-r border-white/30" />
          <span className="pointer-events-none absolute bottom-2 left-2 w-6 h-6 border-b border-l border-white/30" />
        </div>

        {item.description && (
          <div className="px-6 py-5 bg-card">
            <CardDescription className="text-center text-sm text-muted-foreground font-serif italic">
              {item.description}
            </CardDescription>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function ImageGallery({ items, className }: ImageGalleryProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10', className)}>
      {items.map((item) => (
        <CrossfadeCard key={item.id} item={item} />
      ))}
    </div>
  );
}
