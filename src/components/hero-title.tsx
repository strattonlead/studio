type HeroTitleProps = {
  /**
   * Each entry renders as its own block span — guaranteed never to share a wrap
   * point with the next line, regardless of viewport width.
   */
  lines: readonly string[];
  /**
   * Override the h1 typography. Default targets a dark hero (white text); pass
   * an override (e.g. `text-ink`) for a light/editorial hero on the cream bg.
   */
  className?: string;
  /** Delay before the first letter starts animating, in ms. Default 250. */
  baseDelay?: number;
  /** Stagger between consecutive letters, in ms. Default 55. */
  letterStep?: number;
};

const DEFAULT_CLASSNAME =
  "font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 tracking-[0.18em] sm:tracking-[0.24em] font-normal leading-[1.05]";

/**
 * Letter-by-letter reveal headline used across the site's hero sections.
 *
 * Splitting the title into discrete `lines` makes the line breaks deterministic:
 * each input line is rendered as a `block` span, so the browser cannot pick its
 * own awkward wrap points (e.g. "HAIR & SKIN COU / TURE" on narrow viewports).
 *
 * The animation index is shared across all lines so the stagger continues
 * unbroken from one line to the next — looks like a single reveal even though
 * the text is split.
 */
export function HeroTitle({
  lines,
  className = DEFAULT_CLASSNAME,
  baseDelay = 250,
  letterStep = 55,
}: HeroTitleProps) {
  let letterIndex = 0;
  return (
    <h1 className={className} aria-label={lines.join(" ")}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} aria-hidden="true" className="block">
          {line.split("").map((char) => {
            const idx = letterIndex++;
            return (
              <span
                key={`${char}-${idx}`}
                className={`hero-letter${char === " " ? " hero-letter--space" : ""}`}
                style={{ animationDelay: `${baseDelay + idx * letterStep}ms` }}
              >
                {char === " " ? " " : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
