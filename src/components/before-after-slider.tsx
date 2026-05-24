"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/components/image-gallery";

const COUTURE_EASE = (t: number) => {
  const c1 = 0.2, c2 = 0.7, c3 = 0.2, c4 = 1;
  const u = 1 - t;
  return 3 * u * u * t * c2 + 3 * u * t * t * c4 + t * t * t;
};

function tween(durationMs: number, onUpdate: (v: number) => void, onDone?: () => void) {
  const start = performance.now();
  let raf = 0;
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs);
    onUpdate(COUTURE_EASE(t));
    if (t < 1) raf = requestAnimationFrame(step);
    else onDone?.();
  };
  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
}

export function BeforeAfterSlider({ item }: { item: GalleryItem }) {
  const figureRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLButtonElement>(null);
  const draggingRef = useRef(false);
  const interactedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [reveal, setReveal] = useState(50);

  const writeReveal = (next: number) => {
    const clamped = Math.min(100, Math.max(0, next));
    if (figureRef.current) {
      figureRef.current.style.setProperty("--reveal", String(clamped));
    }
    return clamped;
  };

  const updateFromPointer = (clientX: number) => {
    const node = figureRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    if (rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      writeReveal(pct);
      rafRef.current = null;
    });
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    interactedRef.current = true;
    draggingRef.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    // If the press started on the knob (or inside it), don't snap — just
    // engage drag so the divider follows pointer movement without an initial
    // jump. Any click on the image area still snaps to the clicked position.
    const target = e.target as Element | null;
    const startedOnKnob = target ? !!(target.closest('button[role="slider"]')) : false;
    if (!startedOnKnob) {
      updateFromPointer(e.clientX);
    }
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromPointer(e.clientX);
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {}
    const node = figureRef.current;
    const current = node ? Number(getComputedStyle(node).getPropertyValue("--reveal")) || 50 : 50;
    setReveal(Math.round(current));
  };

  const onKnobKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    let next: number | null = null;
    if (e.key === "ArrowLeft") next = reveal - 5;
    else if (e.key === "ArrowRight") next = reveal + 5;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = 100;
    if (next !== null) {
      e.preventDefault();
      interactedRef.current = true;
      const clamped = writeReveal(next);
      setReveal(Math.round(clamped));
    }
  };

  // Initial paint of CSS var (before any pointer interaction).
  useEffect(() => {
    writeReveal(50);
  }, []);

  // Auto-intro: on first scroll-into-view, sweep 0 → 100 → 50 once.
  useEffect(() => {
    const node = figureRef.current;
    if (!node) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      writeReveal(50);
      setReveal(50);
      return;
    }
    if (typeof IntersectionObserver === "undefined") return;

    let cancelTween: (() => void) | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || interactedRef.current) continue;
          observer.unobserve(entry.target);
          interactedRef.current = true;
          // Start hidden (vorher fully shown), sweep to nachher, settle at 50.
          writeReveal(0);
          setReveal(0);
          cancelTween = tween(
            1500,
            (t) => {
              // 0 → 1, peak at 0.6 (fully revealed nachher), then back to 0.5 (handle centered)
              const v = t <= 0.6 ? (t / 0.6) * 100 : 100 - ((t - 0.6) / 0.4) * 50;
              writeReveal(v);
            },
            () => setReveal(50),
          );
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelTween?.();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <Card className="overflow-hidden shadow-[0_2px_24px_-12px_hsl(0_0%_0%/0.25)] rounded-lg bg-card group">
      <CardContent className="p-0">
        <div
          ref={figureRef}
          role="group"
          aria-label={`Vorher-Nachher Vergleich: ${item.description ?? ""}`}
          className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-muted touch-none select-none md:cursor-ew-resize"
          style={{ ['--reveal' as string]: String(reveal) }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {/* Nachher (bottom layer, always full) */}
          <Image
            src={item.afterSrc}
            alt={item.afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            className="object-cover pointer-events-none"
            data-ai-hint={item.afterHint || "blonde hair transformation"}
          />

          {/* Vorher (top layer, clipped from the right by --reveal) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: "inset(0 calc(100% - var(--reveal) * 1%) 0 0)" }}
          >
            <Image
              src={item.beforeSrc}
              alt={item.beforeAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover"
              data-ai-hint={item.beforeHint || "hair portrait"}
            />
          </div>

          {/* Handle line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/90 pointer-events-none"
            style={{
              left: "calc(var(--reveal) * 1%)",
              transform: "translateX(-0.5px)",
              boxShadow: "0 0 10px hsl(0 0% 0% / 0.45)",
            }}
            aria-hidden="true"
          />

          {/* Knob */}
          <button
            ref={knobRef}
            type="button"
            role="slider"
            aria-label="Bild vergleichen — ziehen zum Wechseln zwischen Vorher und Nachher"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={reveal}
            onKeyDown={onKnobKey}
            className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center
                       w-11 h-11 rounded-full
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
                       group/knob"
            style={{ left: "calc(var(--reveal) * 1%)" }}
          >
            <span
              className="block w-9 h-9 rounded-full bg-background border border-gold/70 shadow-md
                         transition-transform duration-200 ease-couture
                         group-hover/knob:scale-110 group-active/knob:scale-95
                         flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-ink"
                aria-hidden="true"
              >
                <path d="M9 6l-6 6 6 6" />
                <path d="M15 6l6 6-6 6" />
              </svg>
            </span>
          </button>

          {/* Vorher label (top-left, fades out as reveal grows) */}
          <span
            className="absolute top-3 left-3 z-10 inline-block px-3 py-1 text-[10px] tracking-[0.32em] uppercase font-sans
                       backdrop-blur-sm bg-black/55 text-white border border-white/20 pointer-events-none
                       transition-opacity duration-300"
            style={{ opacity: 1 - reveal / 100 }}
          >
            Vorher
          </span>

          {/* Nachher label (top-right, fades in as reveal grows) */}
          <span
            className="absolute top-3 right-3 z-10 inline-block px-3 py-1 text-[10px] tracking-[0.32em] uppercase font-sans
                       backdrop-blur-sm bg-gold/85 text-white border border-white/30 pointer-events-none
                       transition-opacity duration-300"
            style={{ opacity: reveal / 100 }}
          >
            Nachher
          </span>

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
