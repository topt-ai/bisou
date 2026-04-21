import React from 'react';

type StampProps = {
  /** Diameter in pixels (the SVG scales fluidly with className overrides). */
  size?: number;
  /** Text repeated around the rim. */
  text?: string;
  /** Inner color of the curved text + ring. */
  color?: string;
  /** Which isotipo file to place in the center. */
  mark?: 'crema' | 'rojo' | 'negro' | 'celeste';
  /** Extra classes for positioning / opacity. */
  className?: string;
  /** Disable the slow rotation. */
  spin?: boolean;
};

/**
 * Branded circular "quality stamp": curved text around the rim with
 * the BISOU isotipo in the middle. Decorative — not announced to AT.
 */
export function Stamp({
  size = 140,
  text = 'BISOU · MUNCHIES · COFFEE · DESSERTS · ',
  color = 'currentColor',
  mark = 'crema',
  className = '',
  spin = true,
}: StampProps) {
  // Unique ID so multiple stamps on one page don't collide.
  const idRef = React.useRef(`stamp-${Math.random().toString(36).slice(2, 9)}`);
  const id = idRef.current;

  // Repeat text enough times so it always wraps the full circle.
  const ringText = (text + text).slice(0, 110);

  return (
    <div
      aria-hidden="true"
      className={`relative inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className={spin ? 'stamp-spin' : ''}
        style={{ color }}
      >
        <defs>
          {/* Path along which the rim text flows. */}
          <path
            id={id}
            d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
            fill="none"
          />
        </defs>

        {/* Outer + inner thin rings */}
        <circle cx="100" cy="100" r="96" fill="none" stroke={color} strokeWidth="0.6" opacity="0.55" />
        <circle cx="100" cy="100" r="62"  fill="none" stroke={color} strokeWidth="0.6" opacity="0.55" />

        {/* Curved text */}
        <text
          fontFamily="Jost, system-ui, sans-serif"
          fontSize="9.5"
          fontWeight={500}
          letterSpacing="3.2"
          fill={color}
          style={{ textTransform: 'uppercase' }}
        >
          <textPath href={`#${id}`} startOffset="0">
            {ringText}
          </textPath>
        </text>
      </svg>

      {/* Isotipo centered inside the inner ring */}
      <img
        src={`/isotipo-${mark}.webp`}
        alt=""
        decoding="async"
        loading="lazy"
        className="absolute inset-0 m-auto h-[42%] w-auto object-contain"
      />

      <style>{`
        .stamp-spin { animation: stamp-rotate 28s linear infinite; transform-origin: 50% 50%; }
        @keyframes stamp-rotate { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .stamp-spin { animation: none; } }
      `}</style>
    </div>
  );
}
