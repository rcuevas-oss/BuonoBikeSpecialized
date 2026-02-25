// ── Post Frames — Buono Bikes ─────────────────────────────────────────────────
import { useState } from "react";
import bikeImg from "figma:asset/fd3f8cdb85efd3bd88b5413d78c91ca3b8cf7701.png";
import shoeImg from "figma:asset/b3a3393b1477c916709f3c6731b76f2e3bfcdef5.png";

const LOGO_URL =
  "https://thfimacojfyzcewgkzti.supabase.co/storage/v1/object/public/Logo%20Buono%20Bike/ChatGPT%20Image%2025%20feb%202026,%2016_23_36.png";

const PHOTOS = [
  {
    url: bikeImg,
    tag: "TURBO",
    caption: "S-Works Turbo Levo SL — potencia eléctrica pura.",
    tagColor: "#EF4444",
  },
  {
    url: shoeImg,
    tag: "GEAR",
    caption: "S-Works Ares — zapatillas de competición.",
    tagColor: "#06B6D4",
  },
  {
    url: "https://images.unsplash.com/photo-1531727950572-d380a3ae193d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
    tag: "ROAD",
    caption: "S-Works Tarmac SL8 — pura velocidad.",
    tagColor: "#3B82F6",
  },
  {
    url: "https://images.unsplash.com/photo-1760462568686-f16dfaf44678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
    tag: "MTB",
    caption: "Domina el trail con la Stumpjumper EVO.",
    tagColor: "#22C55E",
  },
  {
    url: "https://images.unsplash.com/photo-1761227130788-4566968aada7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
    tag: "GRAVEL",
    caption: "Diverge STR — sin límites en el camino.",
    tagColor: "#F59E0B",
  },
];

// ── Shared nav dots ─────────────────────────────────────────────────────────
function NavDots({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex gap-2 justify-center mt-4">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          style={{
            width: i === active ? 18 : 6,
            height: 6,
            borderRadius: 3,
            background: i === active ? "#EF4444" : "#333",
            border: "none",
            cursor: "pointer",
            transition: "all 0.25s",
            padding: 0,
          }}
        />
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANTE 1 — CARBONO
// Marco técnico con esquinas anguladas, líneas de corte, badge de categoría
// y firma de marca en overlay inferior.
// ══════════════════════════════════════════════════════════════════════════════
function FrameCarbono({ photo }: { photo: typeof PHOTOS[0] }) {
  const CLIP = "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)";

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
      {/* Outer glow ring */}
      <div
        style={{
          position: "absolute",
          inset: -2,
          background: "linear-gradient(135deg, #EF4444 0%, #000 45%, #EF4444 100%)",
          clipPath: CLIP,
          opacity: 0.6,
        }}
      />

      {/* Main frame */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1/1",
          clipPath: CLIP,
          overflow: "hidden",
        }}
      >
        {/* Photo */}
        <img
          src={photo.url}
          alt={photo.tag}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        {/* Bottom overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "45%",
            background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)",
          }}
        />

        {/* Top-left badge */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              background: photo.tagColor,
              color: "#fff",
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: "0.2em",
              padding: "4px 10px",
              clipPath: "polygon(0 0, 100% 0, calc(100% - 6px) 100%, 0 100%)",
            }}
          >
            {photo.tag}
          </div>
        </div>

        {/* Top-right corner bracket */}
        <div style={{ position: "absolute", top: 12, right: 12 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M20 0 L20 8 M20 0 L12 0" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Bottom-left corner bracket */}
        <div style={{ position: "absolute", bottom: 38, left: 12 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M0 20 L0 12 M0 20 L8 20" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          </svg>
        </div>

        {/* Bottom brand bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px 14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                overflow: "hidden",
                border: "1.5px solid #EF4444",
                background: "#fff",
                flexShrink: 0,
              }}
            >
              <img src={LOGO_URL} alt="Buono" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: "0.05em" }}>buono.bikes</div>
              <div style={{ fontSize: 9, color: "#a8a8a8", letterSpacing: "0.08em", marginTop: 1 }}>
                {photo.caption}
              </div>
            </div>
          </div>
          {/* Scan dots */}
          <div style={{ display: "flex", flexDirection: "column", gap: 3, opacity: 0.5 }}>
            {[0, 1, 2].map((r) => (
              <div key={r} style={{ display: "flex", gap: 3 }}>
                {[0, 1, 2].map((c) => (
                  <div key={c} style={{ width: 3, height: 3, borderRadius: "50%", background: "#EF4444" }} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, #EF4444 0%, #ff6b6b 50%, #EF4444 100%)",
          }}
        />
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANTE 2 — EDGE LATERAL
// Franja editorial roja a la izquierda con texto vertical, borde exterior
// blanco delgado y caption en overlay inferior derecho.
// ══════════════════════════════════════════════════════════════════════════════
function FrameEdge({ photo }: { photo: typeof PHOTOS[0] }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1/1",
        border: "2px solid rgba(255,255,255,0.12)",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 0 0 1px #EF4444, 0 30px 60px rgba(0,0,0,0.7)",
      }}
    >
      {/* Photo */}
      <img
        src={photo.url}
        alt={photo.tag}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* Red vertical stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 36,
          background: "#EF4444",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Vertical text */}
        <div
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            color: "#fff",
            fontSize: 9,
            fontWeight: 900,
            letterSpacing: "0.28em",
            userSelect: "none",
          }}
        >
          BUONO BIKES
        </div>
        {/* Small logo inside stripe */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 22,
            height: 22,
            borderRadius: "50%",
            overflow: "hidden",
            border: "1.5px solid rgba(255,255,255,0.5)",
            background: "#fff",
          }}
        >
          <img src={LOGO_URL} alt="B" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 36,
          right: 0,
          height: "50%",
          background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)",
        }}
      />

      {/* Tag badge top right */}
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "rgba(0,0,0,0.75)",
          border: `1px solid ${photo.tagColor}`,
          color: photo.tagColor,
          fontSize: 9,
          fontWeight: 800,
          letterSpacing: "0.2em",
          padding: "3px 9px",
          borderRadius: 2,
        }}
      >
        {photo.tag}
      </div>

      {/* Bottom right caption */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 36,
          right: 0,
          padding: "0 14px 14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 10, color: "#a8a8a8", letterSpacing: "0.12em", marginBottom: 4 }}>
              @buono.bikes
            </div>
            <div style={{ fontSize: 12, color: "#fff", fontWeight: 700, lineHeight: 1.35, maxWidth: 180 }}>
              {photo.caption}
            </div>
          </div>
          {/* Diagonal accent */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ opacity: 0.5 }}>
            <line x1="0" y1="28" x2="28" y2="0" stroke="#EF4444" strokeWidth="1.5" />
            <circle cx="28" cy="0" r="3" fill="#EF4444" />
          </svg>
        </div>
      </div>

      {/* Top horizontal line accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 36,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #EF4444, transparent)",
        }}
      />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANTE 3 — PHANTOM
// Ultra-minimal: solo un borde exterior blanco de 1px, punto rojo en
// esquina superior derecha, línea roja inferior y firma discreta.
// ══════════════════════════════════════════════════════════════════════════════
function FramePhantom({ photo, index }: { photo: typeof PHOTOS[0]; index: number }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
      {/* Outer white frame with gap */}
      <div
        style={{
          position: "absolute",
          inset: -8,
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 2,
          pointerEvents: "none",
        }}
      />

      {/* Inner photo */}
      <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: 2 }}>
        <img
          src={photo.url}
          alt={photo.tag}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        {/* Very subtle bottom vignette */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
          }}
        />

        {/* Red dot top-right */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#EF4444",
            boxShadow: "0 0 10px rgba(239,68,68,0.7)",
          }}
        />

        {/* Post number top-left */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 14,
            fontSize: 9,
            fontWeight: 700,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.15em",
            fontFamily: "monospace",
          }}
        >
          #{String(index + 1).padStart(2, "0")}
        </div>

        {/* Bottom-left signature */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 14,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "#fff",
            }}
          >
            <img src={LOGO_URL} alt="B" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.18em",
            }}
          >
            BUONO
          </span>
        </div>

        {/* Bottom-right tag */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 14,
            fontSize: 9,
            fontWeight: 700,
            color: photo.tagColor,
            letterSpacing: "0.12em",
          }}
        >
          {photo.tag}
        </div>

        {/* Bottom red line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "#EF4444",
          }}
        />
      </div>
    </div>
  );
}

// ── Variant card wrapper ────────────────────────────────────────────────────
function VariantCard({
  label,
  sublabel,
  description,
  details,
  children,
}: {
  label: string;
  sublabel: string;
  description: string;
  details: string[];
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#0a0a0a",
        border: "1px solid #1a1a1a",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 24px 0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 9,
              fontWeight: 800,
              color: "#EF4444",
              letterSpacing: "0.25em",
              marginBottom: 4,
            }}
          >
            {sublabel}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            {label}
          </div>
          <div style={{ fontSize: 11, color: "#555", marginTop: 4, lineHeight: 1.55 }}>
            {description}
          </div>
        </div>
      </div>

      {/* Preview area */}
      <div style={{ padding: "20px 24px" }}>{children}</div>

      {/* Detail pills */}
      <div
        style={{
          padding: "0 24px 20px",
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
        }}
      >
        {details.map((d) => (
          <div
            key={d}
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: "#444",
              background: "#111",
              border: "1px solid #1e1e1e",
              borderRadius: 4,
              padding: "3px 8px",
              letterSpacing: "0.1em",
            }}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Export ─────────────────────────────────────────────────────────────────
export function PostFrames() {
  const [activeC, setActiveC] = useState(0);
  const [activeE, setActiveE] = useState(0);
  const [activeP, setActiveP] = useState(0);

  const bikePhoto = PHOTOS[0];

  return (
    <div style={{ width: "100%" }}>
      {/* Section intro */}
      <div
        style={{
          background: "linear-gradient(90deg, rgba(239,68,68,0.08) 0%, transparent 60%)",
          border: "1px solid #1a1a1a",
          borderLeft: "3px solid #EF4444",
          borderRadius: 8,
          padding: "16px 20px",
          marginBottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div>
          <div style={{ fontSize: 10, fontWeight: 800, color: "#EF4444", letterSpacing: "0.22em", marginBottom: 4 }}>
            MARCOS PARA PUBLICACIONES
          </div>
          <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6 }}>
            3 variantes de marco / overlay para acompañar fotos en el feed de Instagram. Ratio 1:1 (1080×1080 px).
            Usa las flechas para ver distintas fotos en cada estilo.
          </div>
        </div>
      </div>

      {/* ── FEATURED: bike image in all 3 frames ── */}
      <div
        style={{
          background: "#0a0a0a",
          border: "1px solid #1a1a1a",
          borderRadius: 16,
          padding: "28px 28px 24px",
          marginBottom: 32,
        }}
      >
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 3, height: 18, background: "#EF4444", borderRadius: 2 }} />
          <div>
            <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em" }}>
              PRUEBA DE IMAGEN — grid responsive
            </div>
            <div style={{ fontSize: 10, color: "#444", marginTop: 3, letterSpacing: "0.08em" }}>
              La misma foto con los 3 estilos de marco
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <FrameCarbono photo={bikePhoto} />
            <div style={{ textAlign: "center", marginTop: 10, fontSize: 9, color: "#EF4444", letterSpacing: "0.18em", fontWeight: 800 }}>CARBONO</div>
          </div>
          <div>
            <FrameEdge photo={bikePhoto} />
            <div style={{ textAlign: "center", marginTop: 10, fontSize: 9, color: "#EF4444", letterSpacing: "0.18em", fontWeight: 800 }}>EDGE</div>
          </div>
          <div>
            <FramePhantom photo={bikePhoto} index={0} />
            <div style={{ textAlign: "center", marginTop: 10, fontSize: 9, color: "#EF4444", letterSpacing: "0.18em", fontWeight: 800 }}>PHANTOM</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
        <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
        <div style={{ fontSize: 9, color: "#333", letterSpacing: "0.2em", fontWeight: 700 }}>EXPLORAR CON OTRAS FOTOS</div>
        <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
      </div>

      {/* Three frames grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {/* ── Variante 1: CARBONO ── */}
        <VariantCard
          label="CARBONO"
          sublabel="VARIANTE 01"
          description="Marco técnico con esquinas anguladas, badge de categoría y firma de marca. Estilo aerodinámico premium."
          details={["Esquinas anguladas", "Badge de categoría", "Puntos de marca", "Overlay gradiente", "Línea de acento"]}
        >
          <FrameCarbono photo={PHOTOS[activeC]} />
          <NavDots count={PHOTOS.length} active={activeC} onSelect={setActiveC} />
        </VariantCard>

        {/* ── Variante 2: EDGE ── */}
        <VariantCard
          label="EDGE"
          sublabel="VARIANTE 02"
          description="Franja editorial lateral roja con texto vertical. Borde exterior delgado y caption en overlay inferior."
          details={["Franja lateral", "Texto vertical", "Borde exterior", "Tag de categoría", "Acento diagonal"]}
        >
          <FrameEdge photo={PHOTOS[activeE]} />
          <NavDots count={PHOTOS.length} active={activeE} onSelect={setActiveE} />
        </VariantCard>

        {/* ── Variante 3: PHANTOM ── */}
        <VariantCard
          label="PHANTOM"
          sublabel="VARIANTE 03"
          description="Ultra-minimal. Solo un punto rojo, número de post y línea inferior. La foto es el protagonista."
          details={["Marco flotante", "Punto de acento", "Número de secuencia", "Firma discreta", "Línea inferior roja"]}
        >
          <FramePhantom photo={PHOTOS[activeP]} index={activeP} />
          <NavDots count={PHOTOS.length} active={activeP} onSelect={setActiveP} />
        </VariantCard>
      </div>

      {/* Comparison strip */}
      <div
        style={{
          marginTop: 40,
          background: "#0a0a0a",
          border: "1px solid #1a1a1a",
          borderRadius: 12,
          padding: "24px",
        }}
      >
        <div
          style={{
            fontSize: 9,
            fontWeight: 800,
            color: "#EF4444",
            letterSpacing: "0.25em",
            marginBottom: 16,
          }}
        >
          COMPARATIVA — grid responsive
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <FrameCarbono photo={PHOTOS[1]} />
            <div style={{ textAlign: "center", marginTop: 8, fontSize: 9, color: "#444", letterSpacing: "0.15em", fontWeight: 700 }}>CARBONO</div>
          </div>
          <div>
            <FrameEdge photo={PHOTOS[1]} />
            <div style={{ textAlign: "center", marginTop: 8, fontSize: 9, color: "#444", letterSpacing: "0.15em", fontWeight: 700 }}>EDGE</div>
          </div>
          <div>
            <FramePhantom photo={PHOTOS[1]} index={1} />
            <div style={{ textAlign: "center", marginTop: 8, fontSize: 9, color: "#444", letterSpacing: "0.15em", fontWeight: 700 }}>PHANTOM</div>
          </div>
        </div>
      </div>
    </div>
  );
}