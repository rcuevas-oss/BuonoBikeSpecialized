// ── Buono Logo — SVG nativo, sin fondo, color puro ──────────────────────────
// Recrea el logotipo Buono: alas + círculo con B + texto BUONO
// Totalmente vectorial, sin dependencias de imagen

type BuonoLogoProps = {
  color?: string;
  height?: number;
  className?: string;
};

export const BuonoLogo = ({
  color = "#EF4444",
  height = 80,
  className = "",
}: BuonoLogoProps) => {
  const W = 300;
  const H = 90;
  const aspect = W / H;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      height={height}
      width={height * aspect}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* ══ ALA IZQUIERDA — 3 plumas escalonadas ══ */}

      {/* Pluma superior — ángulo más pronunciado hacia arriba-izquierda */}
      <path
        d="M 127 38
           C 108 32, 82 23, 48 22
           C 65 26, 92 34, 126 44
           Z"
        fill={color}
      />

      {/* Pluma media — más horizontal */}
      <path
        d="M 126 46
           C 102 43, 70 43, 32 52
           C 55 46, 87 46, 126 51
           Z"
        fill={color}
      />

      {/* Pluma inferior — ligero ángulo hacia abajo */}
      <path
        d="M 128 54
           C 102 57, 72 64, 42 74
           C 65 66, 92 60, 128 58
           Z"
        fill={color}
      />

      {/* ══ ALA DERECHA — espejo exacto ══ */}

      {/* Pluma superior */}
      <path
        d="M 173 38
           C 192 32, 218 23, 252 22
           C 235 26, 208 34, 174 44
           Z"
        fill={color}
      />

      {/* Pluma media */}
      <path
        d="M 174 46
           C 198 43, 230 43, 268 52
           C 245 46, 213 46, 174 51
           Z"
        fill={color}
      />

      {/* Pluma inferior */}
      <path
        d="M 172 54
           C 198 57, 228 64, 258 74
           C 235 66, 208 60, 172 58
           Z"
        fill={color}
      />

      {/* ══ CÍRCULO CENTRAL ══ */}
      <circle
        cx="150"
        cy="46"
        r="26"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      {/* Anillo interior fino */}
      <circle
        cx="150"
        cy="46"
        r="20"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />

      {/* ══ MONOGRAMA "B" ══ */}
      <text
        x="150"
        y="59"
        textAnchor="middle"
        fill={color}
        fontSize="30"
        fontWeight="bold"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
      >
        B
      </text>

      {/* ══ TEXTO "BUONO" ══ */}
      <text
        x="150"
        y="86"
        textAnchor="middle"
        fill={color}
        fontSize="13"
        fontWeight="900"
        fontFamily="Arial, Helvetica, sans-serif"
        fontStyle="italic"
        letterSpacing="6"
      >
        BUONO
      </text>
    </svg>
  );
};
