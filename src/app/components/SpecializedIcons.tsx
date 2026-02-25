// ============================================================
// SPECIALIZED PREMIUM ICON SYSTEM
// Design Language:
//  - ViewBox: 0 0 100 100 (all icons)
//  - Primary stroke-width: 3.5
//  - Secondary stroke-width: 2.5
//  - strokeLinecap: round | strokeLinejoin: round
//  - currentColor → main elements (white on dark, adaptable)
//  - #EF4444 → accent details only
//  - No hardcoded black fills
// ============================================================

type IconProps = { className?: string; size?: number };

// ── TURBO ── E-Bike / Electric ──────────────────────────────
export const TurboIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Lightning bolt — centered, dynamic */}
    <path
      d="M 58 14 L 32 52 L 50 52 L 38 86 L 74 46 L 55 46 Z"
      fill="currentColor"
    />
    {/* Speed arcs — left */}
    <path d="M 14 36 L 24 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
    <path d="M 10 50 L 22 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
    <path d="M 14 64 L 24 64" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
    {/* Red accent dot at bolt kink */}
    <circle cx="50" cy="52" r="3.5" fill="#EF4444" />
  </svg>
);

// ── MTB ── Mountain Bike ────────────────────────────────────
export const MTBIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Ground line */}
    <line x1="10" y1="78" x2="90" y2="78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
    {/* Mountain silhouette */}
    <path
      d="M 10 78 L 38 30 L 52 50 L 68 18 L 90 78"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Red snow cap on higher peak */}
    <path
      d="M 68 18 L 80 44 L 56 44 Z"
      fill="#EF4444"
      opacity="0.85"
    />
    {/* Peak dot accent */}
    <circle cx="68" cy="18" r="3.5" fill="#EF4444" />
  </svg>
);

// ── ROAD ── Road Bike / Drop Handlebar ──────────────────────
export const RoadIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Stem going up */}
    <line x1="50" y1="24" x2="50" y2="44" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    {/* Horizontal top bar */}
    <line x1="24" y1="44" x2="76" y2="44" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    {/* Left drop handlebar */}
    <path
      d="M 24 44 C 12 44 10 60 18 74"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Right drop handlebar */}
    <path
      d="M 76 44 C 88 44 90 60 82 74"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Red accent on center of top bar */}
    <line x1="42" y1="44" x2="58" y2="44" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
    {/* Brake hood bumps */}
    <circle cx="24" cy="44" r="4" fill="currentColor" />
    <circle cx="76" cy="44" r="4" fill="currentColor" />
  </svg>
);

// ── GRAVEL ── Gravel / Adventure / Compass ──────────────────
export const GravelIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer compass circle */}
    <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="2.5" fill="none" />
    {/* Inner thin circle */}
    <circle cx="50" cy="50" r="26" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.25" />
    {/* North arrow — red, pointing UP */}
    <path d="M 50 16 L 56 36 L 50 32 L 44 36 Z" fill="#EF4444" />
    {/* South arrow */}
    <path d="M 50 84 L 56 64 L 50 68 L 44 64 Z" fill="currentColor" opacity="0.55" />
    {/* East arrow */}
    <path d="M 84 50 L 64 56 L 68 50 L 64 44 Z" fill="currentColor" opacity="0.55" />
    {/* West arrow */}
    <path d="M 16 50 L 36 56 L 32 50 L 36 44 Z" fill="currentColor" opacity="0.55" />
    {/* Cross lines — faint */}
    <line x1="50" y1="36" x2="50" y2="64" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="36" y1="50" x2="64" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    {/* Center dot */}
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

// ── SERVICE ── Workshop / Maintenance ───────────────────────
export const ServiceIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Ring spanner head — outer */}
    <circle cx="34" cy="34" r="18" stroke="currentColor" strokeWidth="3.5" fill="none" />
    {/* Ring spanner head — inner (hexagonal approximation as circle) */}
    <circle cx="34" cy="34" r="9" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* Handle — thick diagonal bar */}
    <line x1="47" y1="47" x2="84" y2="84" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
    {/* Handle cap detail */}
    <circle cx="84" cy="84" r="5" fill="currentColor" />
    {/* Red accent dot in wrench head center */}
    <circle cx="34" cy="34" r="4" fill="#EF4444" />
  </svg>
);

// ── GEAR ── Accessories / Chainring ─────────────────────────
export const GearIcon = ({ className = "", size = 100 }: IconProps) => {
  const outerR = 32;
  const innerR = 13;
  const toothR = 40;
  const center = 50;
  const teeth = 8;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring */}
      <circle cx={center} cy={center} r={outerR} stroke="currentColor" strokeWidth="3.5" fill="none" />
      {/* Inner hub ring */}
      <circle cx={center} cy={center} r={innerR} stroke="currentColor" strokeWidth="3" fill="none" />
      {/* Chainring teeth */}
      {Array.from({ length: teeth }).map((_, i) => {
        const angle = (i * 360) / teeth;
        const rad = (angle * Math.PI) / 180;
        const x1 = center + Math.cos(rad) * outerR;
        const y1 = center + Math.sin(rad) * outerR;
        const x2 = center + Math.cos(rad) * toothR;
        const y2 = center + Math.sin(rad) * toothR;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={i % 4 === 0 ? "#EF4444" : "currentColor"}
            strokeWidth="5.5"
            strokeLinecap="round"
          />
        );
      })}
      {/* 3 spokes */}
      {[0, 120, 240].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = center + Math.cos(rad) * outerR;
        const y = center + Math.sin(rad) * outerR;
        return (
          <line
            key={i}
            x1={center} y1={center} x2={x} y2={y}
            stroke="currentColor"
            strokeWidth="2.5"
            opacity="0.5"
          />
        );
      })}
      {/* Center bolt */}
      <circle cx={center} cy={center} r="5" fill="#EF4444" />
    </svg>
  );
};

// ── ROUTES ── GPS / Location ─────────────────────────────────
export const RoutesIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Map pin teardrop body */}
    <path
      d="M 50 85 C 50 85 22 58 22 42 C 22 27 35 15 50 15 C 65 15 78 27 78 42 C 78 58 50 85 50 85 Z"
      stroke="currentColor"
      strokeWidth="3.5"
      fill="none"
      strokeLinejoin="round"
    />
    {/* Inner filled circle — red */}
    <circle cx="50" cy="42" r="12" fill="#EF4444" />
    {/* Small route dots at bottom */}
    <circle cx="38" cy="90" r="2.5" fill="currentColor" opacity="0.35" />
    <circle cx="50" cy="93" r="2.5" fill="currentColor" opacity="0.55" />
    <circle cx="62" cy="90" r="2.5" fill="currentColor" opacity="0.35" />
  </svg>
);

// ── SHOP ── Store / Shopping Bag ─────────────────────────────
export const ShopIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bag body — trapezoid */}
    <path
      d="M 20 42 L 26 82 L 74 82 L 80 42 Z"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Bag handles — arch */}
    <path
      d="M 36 42 Q 36 22 50 22 Q 64 22 64 42"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Red accent stripe */}
    <line x1="34" y1="60" x2="66" y2="60" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
    {/* Handle attachment dots */}
    <circle cx="36" cy="42" r="3" fill="currentColor" />
    <circle cx="64" cy="42" r="3" fill="currentColor" />
  </svg>
);

// ── TEAM ── Cycling Jersey ───────────────────────────────────
export const TeamIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Jersey body */}
    <path
      d="M 34 48 L 34 82 L 66 82 L 66 48"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Collar */}
    <path
      d="M 34 48 Q 34 35 50 33 Q 66 35 66 48"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Left sleeve */}
    <path
      d="M 34 50 L 14 58 L 16 70 L 30 66 L 34 58"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
    />
    {/* Right sleeve */}
    <path
      d="M 66 50 L 86 58 L 84 70 L 70 66 L 66 58"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
    />
    {/* Red side stripes */}
    <line x1="44" y1="48" x2="44" y2="82" stroke="#EF4444" strokeWidth="3" />
    <line x1="56" y1="48" x2="56" y2="82" stroke="#EF4444" strokeWidth="3" />
    {/* Zipper dash */}
    <line x1="50" y1="40" x2="50" y2="68" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
  </svg>
);

// ── EVENTS ── Calendar / Race Calendar ──────────────────────
export const EventsIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Calendar body */}
    <rect x="15" y="26" width="70" height="62" rx="4" stroke="currentColor" strokeWidth="3.5" fill="none" />
    {/* Header bar — red */}
    <rect x="15" y="26" width="70" height="18" fill="#EF4444" rx="4" />
    {/* Fix bottom corners of header */}
    <rect x="15" y="36" width="70" height="8" fill="#EF4444" />
    {/* Binding rings */}
    <line x1="34" y1="18" x2="34" y2="32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    <line x1="66" y1="18" x2="66" y2="32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    {/* Featured / marked day — filled */}
    <rect x="40" y="52" width="20" height="18" rx="3" fill="currentColor" />
    {/* Day dots grid — top row */}
    <circle cx="27" cy="60" r="2.5" fill="currentColor" opacity="0.4" />
    <circle cx="73" cy="60" r="2.5" fill="currentColor" opacity="0.4" />
    {/* Day dots grid — bottom row */}
    <circle cx="27" cy="76" r="2.5" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="76" r="2.5" fill="currentColor" opacity="0.4" />
    <circle cx="73" cy="76" r="2.5" fill="currentColor" opacity="0.4" />
  </svg>
);

// ── SALE ── Price Tag / Deals ────────────────────────────────
export const SaleIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Price tag shape — pentagon pointing right */}
    <path
      d="M 16 26 L 64 26 L 84 50 L 64 74 L 16 74 Z"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
      fill="none"
    />
    {/* String hole */}
    <circle cx="28" cy="50" r="6" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* % symbol — top circle */}
    <circle cx="52" cy="40" r="5" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* % symbol — bottom circle */}
    <circle cx="68" cy="60" r="5" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* % symbol — diagonal slash */}
    <line x1="49" y1="62" x2="71" y2="38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Red accent on tag tip */}
    <path d="M 68 50 L 84 50" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
  </svg>
);

// ── NEW ── New Arrivals / Launch ─────────────────────────────
export const NewIcon = ({ className = "", size = 100 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* 8-point starburst */}
    <path
      d="M 50 12 L 57.7 31.5 L 76.9 23.1 L 68.5 42.4 L 88 50 L 68.5 57.6 L 76.9 76.9 L 57.7 68.5 L 50 88 L 42.3 68.5 L 23.1 76.9 L 31.5 57.6 L 12 50 L 31.5 42.4 L 23.1 23.1 L 42.3 31.5 Z"
      fill="currentColor"
    />
    {/* Red center circle */}
    <circle cx="50" cy="50" r="16" fill="#EF4444" />
    {/* Center dot */}
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

// ── WHEEL SPEED ── Special Feature Icon ─────────────────────
export const WheelSpeedIcon = ({ className = "", size = 100 }: IconProps) => {
  const r = 30;
  const center = 50;
  const spokeCount = 8;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer tire */}
      <circle cx={center} cy={center} r={r} stroke="currentColor" strokeWidth="4" fill="none" />
      {/* Inner rim */}
      <circle cx={center} cy={center} r={r - 6} stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.35" />
      {/* Spokes */}
      {Array.from({ length: spokeCount }).map((_, i) => {
        const angle = (i * 360) / spokeCount;
        const rad = (angle * Math.PI) / 180;
        const x = center + Math.cos(rad) * r;
        const y = center + Math.sin(rad) * r;
        const isAccent = i % 4 === 1;
        return (
          <line
            key={i}
            x1={center} y1={center} x2={x} y2={y}
            stroke={isAccent ? "#EF4444" : "currentColor"}
            strokeWidth={isAccent ? "2.5" : "1.5"}
            opacity={isAccent ? "1" : "0.5"}
          />
        );
      })}
      {/* Hub */}
      <circle cx={center} cy={center} r="6" fill="currentColor" />
      <circle cx={center} cy={center} r="3" fill="#EF4444" />
      {/* Speed lines — left side */}
      <path d="M 8 40 L 18 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
      <path d="M 4 50 L 16 50" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
      <path d="M 8 60 L 18 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
};
