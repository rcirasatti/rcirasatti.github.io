import { useId, useState } from 'react';
import { batikSeed } from './data/content';

// The seed nudges scale and angle, so the cloth is tied to a name.
const SEED = batikSeed;
const seedValue = [...SEED].reduce((sum, char) => sum + char.charCodeAt(0), 0);
const scale = 0.9 + (seedValue % 7) / 20;
const angle = -35 - (seedValue % 10);

const QUARTERS = [45, 135, 225, 315];
const EIGHTHS = [0, 45, 90, 135, 180, 225, 270, 315];

function Diamond({ x, y, r }) {
  return <path d={`M${x} ${y - r}L${x + r} ${y}L${x} ${y + r}L${x - r} ${y}Z`} fill="currentColor" />;
}

function Kawung() {
  return (
    <>
      {QUARTERS.map((turn) => (
        <g key={turn} transform={`rotate(${turn} 24 24)`}>
          <ellipse cx="24" cy="11" rx="7" ry="12" />
          <circle cx="24" cy="9" r="1.6" fill="currentColor" stroke="none" />
        </g>
      ))}
      <circle cx="24" cy="24" r="2" />
      <Diamond x={24} y={0} r={3} />
      <Diamond x={24} y={48} r={3} />
      <Diamond x={0} y={24} r={3} />
      <Diamond x={48} y={24} r={3} />
    </>
  );
}

function Parang() {
  return (
    <>
      <path d="M0 8C10 -2 18 18 28 8S46 18 56 8" strokeWidth="2.4" />
      <path d="M0 15C10 5 18 25 28 15S46 25 56 15" />
      <Diamond x={14} y={23} r={2.4} />
      <Diamond x={42} y={23} r={2.4} />
      <path d="M0 27.5H56" strokeWidth="0.6" />
    </>
  );
}

function Truntum() {
  return (
    <>
      {EIGHTHS.map((turn) => (
        <path key={turn} d="M18 15V9" transform={`rotate(${turn} 18 18)`} />
      ))}
      <circle cx="18" cy="18" r="1.8" fill="currentColor" stroke="none" />
      {[
        [0, 0],
        [36, 0],
        [0, 36],
        [36, 36],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="1.5" fill="currentColor" stroke="none" />
          <path d={`M${x - 5} ${y}H${x + 5}M${x} ${y - 5}V${y + 5}`} strokeWidth="0.7" />
        </g>
      ))}
    </>
  );
}

const TILES = {
  kawung: { width: 48, height: 48, turn: 0, Tile: Kawung },
  parang: { width: 56, height: 28, turn: angle, Tile: Parang },
  truntum: { width: 36, height: 36, turn: 0, Tile: Truntum },
};

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Decorative cloth: an SVG pattern that fills whatever box it is given.
// `rowHeight` sizes the tile so one full row of the motif fits a strip of that height.
// `drift` slides the cloth slowly sideways.
export default function Batik({ motif, className, rowHeight, drift }) {
  const id = useId();
  const [still] = useState(prefersReducedMotion);
  const { width, height, turn, Tile } = TILES[motif];
  const size = rowHeight ? rowHeight / height : scale;

  return (
    <svg className={`batik ${className || ''}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternTransform={`scale(${size}) rotate(${turn})`}
        >
          {drift && !still && (
            <animateTransform
              attributeName="patternTransform"
              type="translate"
              additive="sum"
              from="0 0"
              to={`${width} 0`}
              dur="36s"
              repeatCount="indefinite"
            />
          )}
          {/* keep lines readable when the tile is scaled down */}
          <g fill="none" stroke="currentColor" strokeWidth={Math.min(2, 1.1 / Math.sqrt(size))}>
            <Tile />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
