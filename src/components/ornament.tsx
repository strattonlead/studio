import { cn } from '@/lib/utils';

type OrnamentProps = {
  className?: string;
  width?: number;
  variant?: 'diamond' | 'dot';
};

export function Ornament({ className, width = 240, variant = 'diamond' }: OrnamentProps) {
  const half = width / 2;
  return (
    <div
      className={cn('flex justify-center items-center my-10 md:my-14 select-none', className)}
      aria-hidden="true"
    >
      <svg
        width={width}
        height="14"
        viewBox={`0 0 ${width} 14`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80"
      >
        <defs>
          <linearGradient id="ornamentLeft" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="hsl(var(--gold))" stopOpacity="0" />
            <stop offset="1" stopColor="hsl(var(--gold))" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="ornamentRight" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="hsl(var(--gold))" stopOpacity="0.9" />
            <stop offset="1" stopColor="hsl(var(--gold))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="7"
          x2={half - 12}
          y2="7"
          stroke="url(#ornamentLeft)"
          strokeWidth="1"
        />
        <line
          x1={half + 12}
          y1="7"
          x2={width}
          y2="7"
          stroke="url(#ornamentRight)"
          strokeWidth="1"
        />
        {variant === 'diamond' ? (
          <g transform={`translate(${half} 7) rotate(45)`}>
            <rect
              x="-3.5"
              y="-3.5"
              width="7"
              height="7"
              fill="none"
              stroke="hsl(var(--gold))"
              strokeWidth="1"
            />
            <rect x="-1" y="-1" width="2" height="2" fill="hsl(var(--gold))" />
          </g>
        ) : (
          <circle cx={half} cy="7" r="2.5" fill="hsl(var(--gold))" />
        )}
      </svg>
    </div>
  );
}
