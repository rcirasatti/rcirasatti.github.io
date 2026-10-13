const EIGHTHS = [0, 45, 90, 135, 180, 225, 270, 315];
const QUARTERS = [45, 135, 225, 315];

// A single large rosette built from the kawung petal, used where a portrait would go.
export default function Medallion({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="100" cy="100" r="94" />
        <circle cx="100" cy="100" r="88" strokeWidth="0.8" />
        {EIGHTHS.map((turn) => (
          <g key={turn} transform={`rotate(${turn} 100 100)`}>
            <ellipse cx="100" cy="44" rx="15" ry="30" />
            <circle cx="100" cy="32" r="3" fill="currentColor" stroke="none" />
            <path
              d="M100 17L104 23L100 29L96 23Z"
              fill="currentColor"
              stroke="none"
              transform="rotate(22.5 100 100)"
            />
          </g>
        ))}
        {QUARTERS.map((turn) => (
          <g key={turn} transform={`rotate(${turn} 100 100)`}>
            <ellipse cx="100" cy="80" rx="10" ry="19" />
            <circle cx="100" cy="74" r="2" fill="currentColor" stroke="none" />
          </g>
        ))}
        <circle cx="100" cy="100" r="6" />
        <circle cx="100" cy="100" r="2" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
