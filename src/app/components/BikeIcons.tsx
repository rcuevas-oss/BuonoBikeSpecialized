export const BatteryIcon = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Motor central / Batería */}
    <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2" />
    <rect x="30" y="18" width="4" height="28" fill="currentColor" />
    <rect x="18" y="30" width="28" height="4" fill="currentColor" />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
    {/* Terminales */}
    <rect x="28" y="12" width="8" height="3" rx="1" fill="currentColor" />
    <line x1="32" y1="15" x2="32" y2="18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const AggressiveTireIcon = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Rueda con dibujo agresivo (MTB) */}
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Tacos agresivos */}
    <path d="M 32 10 L 32 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 32 48 L 32 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 10 32 L 16 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 48 32 L 54 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Tacos diagonales */}
    <path d="M 18 18 L 22 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 42 42 L 46 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 46 18 L 42 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 22 42 L 18 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Radios */}
    <line x1="32" y1="32" x2="32" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="32" y1="32" x2="46" y2="21" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="32" y1="32" x2="50" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="32" y1="32" x2="46" y2="43" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    
    {/* Centro */}
    <circle cx="32" cy="32" r="3" fill="currentColor" />
  </svg>
);

export const RoadWheelIcon = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Manillar drop */}
    <path
      d="M 12 28 Q 12 22, 18 20 L 28 18 Q 32 17, 32 13"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 52 28 Q 52 22, 46 20 L 36 18 Q 32 17, 32 13"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Curvas drop */}
    <path
      d="M 12 28 Q 10 35, 12 42"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 52 28 Q 54 35, 52 42"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Barra central */}
    <line x1="18" y1="20" x2="46" y2="20" stroke="currentColor" strokeWidth="2" />
    
    {/* Empuñaduras */}
    <circle cx="12" cy="42" r="2" fill="currentColor" />
    <circle cx="52" cy="42" r="2" fill="currentColor" />
  </svg>
);

export const AllenKeyIcon = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Llave Allen cruzada */}
    {/* Llave 1 */}
    <path
      d="M 18 14 L 18 32 L 22 32 L 22 38 L 18 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Llave 2 */}
    <path
      d="M 46 50 L 46 32 L 42 32 L 42 26 L 46 26"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Llave 3 (horizontal) */}
    <path
      d="M 14 46 L 32 46 L 32 42 L 38 42 L 38 46"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Llave 4 (horizontal) */}
    <path
      d="M 50 18 L 32 18 L 32 22 L 26 22 L 26 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Centro */}
    <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const RouteMapIcon = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Ruta tipo mapa */}
    <path
      d="M 12 50 Q 20 45, 25 38 T 35 22 T 52 14"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Puntos de ruta */}
    <circle cx="12" cy="50" r="3" fill="currentColor" />
    <circle cx="25" cy="38" r="2.5" fill="currentColor" />
    <circle cx="35" cy="22" r="2.5" fill="currentColor" />
    <circle cx="52" cy="14" r="3" fill="currentColor" />
    
    {/* Líneas de dirección */}
    <path d="M 52 14 L 48 12 M 52 14 L 50 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Marcadores de distancia */}
    <line x1="18" y1="44" x2="20" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="30" y1="30" x2="32" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="42" y1="18" x2="44" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

export const HelmetIcon = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Casco minimal técnico */}
    <path
      d="M 14 38 Q 14 18, 32 14 Q 50 18, 50 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Base del casco */}
    <path
      d="M 14 38 L 14 42 L 22 42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 50 38 L 50 42 L 42 42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Ventilaciones */}
    <ellipse cx="24" cy="24" rx="4" ry="2" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="32" cy="20" rx="4" ry="2" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="40" cy="24" rx="4" ry="2" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Líneas aerodinámicas */}
    <path d="M 20 32 Q 24 30, 28 32" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" fill="none" />
    <path d="M 36 32 Q 40 30, 44 32" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" fill="none" />
    
    {/* Correa */}
    <path
      d="M 22 42 Q 26 48, 32 48 Q 38 48, 42 42"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      strokeDasharray="2 2"
    />
  </svg>
);
