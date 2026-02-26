// ── Manual de Línea Gráfica — Buono Bikes ────────────────────────────────────
import buonoLogo from "figma:asset/07c8073a8ea62fff23f2bb2da8377c06cf5c2414.png";
import {
  TurboIcon, MTBIcon, RoadIcon, GravelIcon, ServiceIcon,
  GearIcon, RoutesIcon, ShopIcon, TeamIcon, EventsIcon,
  SaleIcon, NewIcon, WheelSpeedIcon,
} from "./SpecializedIcons";

// ── helpers ──────────────────────────────────────────────────────────────────
function ManualSection({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 80 }}>
      {children}
    </section>
  );
}

function SectionTitle({ num, title, subtitle }: { num: string; title: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
        <div
          style={{
            fontSize: 9, fontWeight: 900, color: "#EF4444",
            letterSpacing: "0.3em", fontFamily: "monospace",
          }}
        >
          {num}
        </div>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #EF4444 0%, #1a1a1a 100%)" }} />
      </div>
      <div style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1 }}>
        {title}
      </div>
      <div style={{ fontSize: 12, color: "#444", marginTop: 6, letterSpacing: "0.08em" }}>{subtitle}</div>
    </div>
  );
}

function Pill({ children, red }: { children: React.ReactNode; red?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 9, fontWeight: 700, letterSpacing: "0.18em",
        padding: "4px 12px", borderRadius: 4,
        background: red ? "rgba(239,68,68,0.12)" : "#111",
        color: red ? "#EF4444" : "#444",
        border: red ? "1px solid rgba(239,68,68,0.3)" : "1px solid #1e1e1e",
      }}
    >
      {children}
    </span>
  );
}

// ── SECTION 1 — Portada ───────────────────────────────────────────────────────
function CoverSection() {
  return (
    <div
      style={{
        position: "relative",
        background: "#000",
        border: "1px solid #1a1a1a",
        borderRadius: 20,
        overflow: "hidden",
        padding: "clamp(40px, 8vw, 80px) clamp(28px, 6vw, 64px)",
        marginBottom: 80,
      }}
    >
      {/* Grid lines bg */}
      <div
        style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Red glow top left */}
      <div
        style={{
          position: "absolute", top: -80, left: -80,
          width: 320, height: 320,
          background: "radial-gradient(circle, rgba(239,68,68,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #EF4444 0%, #ff6b6b 40%, transparent 100%)" }} />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 32 }}>
        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72, height: 72, borderRadius: "50%",
              overflow: "hidden", border: "2px solid #EF4444",
              background: "#fff", flexShrink: 0,
            }}
          >
            <img src={buonoLogo} alt="Buono" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.3em", marginBottom: 4 }}>
              MANUAL DE IDENTIDAD VISUAL
            </div>
            <div style={{ fontSize: "clamp(36px, 7vw, 64px)", fontWeight: 900, color: "#fff", letterSpacing: "0.12em", lineHeight: 1 }}>
              BUONO
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, #EF4444 0%, #1a1a1a 80%)" }} />

        {/* Claim */}
        <div>
          <div style={{ fontSize: "clamp(14px, 3vw, 22px)", fontWeight: 300, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em", lineHeight: 1.5, maxWidth: 560 }}>
            Distribuidor oficial <span style={{ color: "#fff", fontWeight: 700 }}>Specialized</span> en Colombia. Donde la precisión mecánica y el diseño premium convergen en cada trazo.
          </div>
        </div>

        {/* Meta pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["v1.0 — 2025", "Uso Interno", "Digital First", "Specialized Official", "Colombia"].map(t => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </div>

      {/* Bottom-right corner decoration */}
      <div style={{ position: "absolute", bottom: 24, right: 24, opacity: 0.15 }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="40" cy="40" r="24" stroke="#EF4444" strokeWidth="0.5" />
          <line x1="40" y1="2" x2="40" y2="78" stroke="#EF4444" strokeWidth="0.5" />
          <line x1="2" y1="40" x2="78" y2="40" stroke="#EF4444" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}

// ── SECTION 2 — Marca ─────────────────────────────────────────────────────────
function BrandSection() {
  const values = [
    { icon: "⚡", title: "RENDIMIENTO", desc: "Cada decisión de diseño responde a la excelencia técnica. Nada es decorativo sin función." },
    { icon: "◆", title: "PRECISIÓN", desc: "Trazos limpios, espaciados exactos, proporciones calculadas. El detalle es la marca." },
    { icon: "▲", title: "PREMIUM", desc: "Alta gama sin exceso. El lujo en Buono es la ausencia de lo superfluo." },
    { icon: "●", title: "COMUNIDAD", desc: "Riders apasionados. El ciclismo como estilo de vida, no solo deporte." },
  ];

  return (
    <ManualSection id="marca">
      <SectionTitle num="01" title="LA MARCA" subtitle="Identidad · Misión · Valores" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {/* Misión */}
        <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px 28px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 12 }}>MISIÓN</div>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.7 }}>
            Conectar a los ciclistas colombianos con la mejor tecnología de bicicletas del mundo a través de una experiencia de compra y servicio que refleja la excelencia de la marca Specialized.
          </p>
        </div>
        {/* Visión */}
        <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px 28px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 12 }}>VISIÓN</div>
          <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.7 }}>
            Ser la referencia premium del ciclismo en Colombia, reconocidos por nuestra comunidad, nuestro servicio técnico de clase mundial y nuestra identidad visual de alto impacto.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {values.map((v) => (
          <div key={v.title} style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "20px" }}>
            <div style={{ fontSize: 20, marginBottom: 10 }}>{v.icon}</div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#fff", letterSpacing: "0.2em", marginBottom: 8 }}>{v.title}</div>
            <p style={{ fontSize: 11, color: "#555", lineHeight: 1.65 }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </ManualSection>
  );
}

// ── SECTION 3 — Logo ──────────────────────────────────────────────────────────
function LogoSection() {
  const variants = [
    { bg: "#000", border: "1px solid #222", label: "FONDO NEGRO — uso principal" },
    { bg: "#EF4444", border: "none", label: "FONDO ROJO — uso secundario" },
    { bg: "#fff", border: "1px solid #eee", label: "FONDO BLANCO — uso limitado" },
    { bg: "#111", border: "1px solid #222", label: "FONDO CARBONO — uso digital" },
  ];

  return (
    <ManualSection id="logo">
      <SectionTitle num="02" title="LOGOTIPO" subtitle="Versiones · Usos correctos · Área de protección" />

      {/* Logo variants */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {variants.map((v) => (
          <div key={v.label} style={{ borderRadius: 12, overflow: "hidden", border: v.border as string }}>
            <div
              style={{
                background: v.bg, display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                padding: "32px 20px", gap: 8,
              }}
            >
              <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", background: "#fff", border: "2px solid rgba(239,68,68,0.4)" }}>
                <img src={buonoLogo} alt="Buono" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 900, color: v.bg === "#fff" ? "#000" : "#fff", letterSpacing: "0.2em" }}>
                BUONO
              </div>
            </div>
            <div style={{ background: "#0a0a0a", padding: "10px 12px" }}>
              <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.1em", lineHeight: 1.5 }}>{v.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacing rules */}
      <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px 28px" }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 16 }}>ÁREA DE PROTECCIÓN</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
          <div
            style={{
              position: "relative",
              width: 100, height: 100,
              border: "1px dashed rgba(239,68,68,0.4)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", border: "2px solid #EF4444", background: "#fff" }}>
              <img src={buonoLogo} alt="Buono" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* Arrows */}
            <div style={{ position: "absolute", top: 2, right: -24, fontSize: 8, color: "#EF4444", fontFamily: "monospace" }}>←18px→</div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ fontSize: 12, color: "#555", lineHeight: 1.7 }}>
              El logotipo debe tener un área mínima de protección equivalente al <span style={{ color: "#EF4444" }}>18% del diámetro</span> del círculo en todos sus lados. No colocar texto ni elementos gráficos dentro de esta zona.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              <Pill>Tamaño mínimo digital: 32px</Pill>
              <Pill>Tamaño mínimo impreso: 10mm</Pill>
            </div>
          </div>
        </div>
      </div>

      {/* Don'ts */}
      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 12 }}>USO INCORRECTO — PROHIBIDO</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            "Distorsionar proporciones",
            "Cambiar colores del logo",
            "Usar sobre fondos complejos",
            "Añadir sombras o efectos",
          ].map((rule) => (
            <div key={rule} style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 8, padding: "12px 14px", display: "flex", gap: 8 }}>
              <span style={{ color: "#EF4444", fontSize: 14, flexShrink: 0, marginTop: 1 }}>✕</span>
              <span style={{ fontSize: 11, color: "#666", lineHeight: 1.5 }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </ManualSection>
  );
}

// ── SECTION 4 — Colores ───────────────────────────────────────────────────────
function ColorsSection() {
  const primary = [
    { name: "BUONO RED", hex: "#EF4444", rgb: "239, 68, 68", cmyk: "0, 71, 71, 6", role: "Color de acento primario · CTA · Énfasis" },
    { name: "BLACK", hex: "#050505", rgb: "5, 5, 5", cmyk: "0, 0, 0, 98", role: "Fondo principal · Base de todos los layouts" },
    { name: "WHITE", hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0", role: "Texto principal · Iconos sobre negro" },
  ];
  const secondary = [
    { name: "CARBON", hex: "#0a0a0a", role: "Fondo de tarjetas" },
    { name: "STEEL", hex: "#111111", role: "Superficies elevadas" },
    { name: "IRON", hex: "#1a1a1a", role: "Bordes y divisores" },
    { name: "SMOKE", hex: "#333333", role: "Elementos inactivos" },
    { name: "ASH", hex: "#555555", role: "Texto secundario" },
    { name: "FOG", hex: "#888888", role: "Labels y metadata" },
  ];

  return (
    <ManualSection id="colores">
      <SectionTitle num="03" title="PALETA DE COLORES" subtitle="Primarios · Secundarios · Aplicación" />

      {/* Primary palette */}
      <div style={{ marginBottom: 8, fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em" }}>COLORES PRIMARIOS</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {primary.map((c) => (
          <div key={c.name} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #1a1a1a" }}>
            <div style={{ background: c.hex, height: 100 }} />
            <div style={{ background: "#0a0a0a", padding: "16px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#fff", letterSpacing: "0.12em", marginBottom: 8 }}>{c.name}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace" }}>HEX: <span style={{ color: "#aaa" }}>{c.hex}</span></div>
                <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace" }}>RGB: <span style={{ color: "#aaa" }}>{c.rgb}</span></div>
                <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace" }}>CMYK: <span style={{ color: "#aaa" }}>{c.cmyk}</span></div>
              </div>
              <div style={{ marginTop: 10, fontSize: 10, color: "#444", lineHeight: 1.5 }}>{c.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary palette */}
      <div style={{ marginBottom: 12, fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em" }}>ESCALA DE GRISES — TONOS NEUTROS</div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
        {secondary.map((c) => (
          <div key={c.name}>
            <div
              style={{
                height: 56, borderRadius: 8,
                background: c.hex,
                border: c.hex === "#050505" || c.hex === "#0a0a0a" || c.hex === "#111111" || c.hex === "#1a1a1a"
                  ? "1px solid #2a2a2a" : "none",
                marginBottom: 8,
              }}
            />
            <div style={{ fontSize: 9, fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>{c.name}</div>
            <div style={{ fontSize: 9, color: "#444", fontFamily: "monospace" }}>{c.hex}</div>
            <div style={{ fontSize: 9, color: "#333", marginTop: 2 }}>{c.role}</div>
          </div>
        ))}
      </div>

      {/* Color combinations */}
      <div style={{ marginBottom: 12, fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em" }}>COMBINACIONES PERMITIDAS</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { bg: "#000", text: "#fff", accent: "#EF4444", label: "Principal", ok: true },
          { bg: "#fff", text: "#000", accent: "#EF4444", label: "Invertido", ok: true },
          { bg: "#EF4444", text: "#fff", accent: "#000", label: "Acento", ok: true },
          { bg: "#0a0a0a", text: "#fff", accent: "#EF4444", label: "Tarjeta", ok: true },
        ].map((combo) => (
          <div key={combo.label} style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #1a1a1a" }}>
            <div style={{ background: combo.bg, padding: "18px 16px" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: combo.text, letterSpacing: "0.1em" }}>BUONO</div>
              <div style={{ fontSize: 9, color: combo.accent, letterSpacing: "0.2em", marginTop: 3 }}>BIKES</div>
            </div>
            <div style={{ background: "#0a0a0a", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9, color: "#555" }}>{combo.label}</span>
              <span style={{ color: "#22C55E", fontSize: 12 }}>✓</span>
            </div>
          </div>
        ))}
      </div>
    </ManualSection>
  );
}

// ── SECTION 5 — Tipografía ────────────────────────────────────────────────────
function TypographySection() {
  const typeScale = [
    { name: "DISPLAY", size: "clamp(36px,6vw,56px)", weight: 900, tracking: "-0.02em", use: "Títulos principales · Heroes", sample: "BUONO" },
    { name: "HEADLINE", size: "clamp(22px,4vw,32px)", weight: 900, tracking: "-0.01em", use: "Encabezados de sección", sample: "Specialized" },
    { name: "TITLE", size: "clamp(16px,2.5vw,20px)", weight: 700, tracking: "0em", use: "Subtítulos · Cards · CTAs", sample: "S-Works Turbo Levo" },
    { name: "LABEL", size: "11px", weight: 800, tracking: "0.25em", use: "Etiquetas · Tags · Badges", sample: "TURBO SERIES" },
    { name: "BODY", size: "13px", weight: 400, tracking: "0.02em", use: "Texto descriptivo · Captions", sample: "La bici más ligera del segmento eléctrico." },
    { name: "CAPTION", size: "10px", weight: 600, tracking: "0.15em", use: "Metadatos · Notas · Coordenadas", sample: "@buono.bikes · Bogotá, Colombia" },
  ];

  return (
    <ManualSection id="tipografia">
      <SectionTitle num="04" title="TIPOGRAFÍA" subtitle="Jerarquía · Pesos · Espaciado" />

      {/* Font family */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 12 }}>FUENTE PRINCIPAL</div>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#fff", fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "-0.01em" }}>Arial Black</div>
          <div style={{ fontSize: 11, color: "#444", marginTop: 8 }}>Sistema sans-serif · Universal · Alta legibilidad</div>
          <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Regular 400", "Bold 700", "Black 900"].map(w => <Pill key={w}>{w}</Pill>)}
          </div>
        </div>
        <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 12 }}>FUENTE MONOSPACE</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", fontFamily: "monospace", letterSpacing: "0.05em" }}>Monospace</div>
          <div style={{ fontSize: 11, color: "#444", marginTop: 8 }}>Datos técnicos · Códigos · Especificaciones</div>
          <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Regular 400", "Bold 700"].map(w => <Pill key={w}>{w}</Pill>)}
          </div>
        </div>
      </div>

      {/* Type scale */}
      <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px", display: "flex", flexDirection: "column", gap: 0 }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 20 }}>ESCALA TIPOGRÁFICA</div>
        {typeScale.map((t, i) => (
          <div
            key={t.name}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 20,
              padding: "14px 0",
              borderBottom: i < typeScale.length - 1 ? "1px solid #111" : "none",
              flexWrap: "wrap",
            }}
          >
            <div style={{ minWidth: 70 }}>
              <div style={{ fontSize: 8, fontWeight: 800, color: "#EF4444", letterSpacing: "0.2em" }}>{t.name}</div>
              <div style={{ fontSize: 8, color: "#333", fontFamily: "monospace", marginTop: 2 }}>{t.size} / W{t.weight}</div>
            </div>
            <div style={{ flex: 1, minWidth: 120 }}>
              <div style={{ fontSize: t.size, fontWeight: t.weight, color: "#fff", letterSpacing: t.tracking, lineHeight: 1.2 }}>
                {t.sample}
              </div>
            </div>
            <div style={{ fontSize: 9, color: "#444", maxWidth: 180 }}>{t.use}</div>
          </div>
        ))}
      </div>
    </ManualSection>
  );
}

// ── SECTION 6 — Iconografía ───────────────────────────────────────────────────
function IconographySection() {
  const icons = [
    { name: "TURBO", subtitle: "E-Bikes", Icon: TurboIcon },
    { name: "MTB", subtitle: "Mountain", Icon: MTBIcon },
    { name: "ROAD", subtitle: "Carretera", Icon: RoadIcon },
    { name: "GRAVEL", subtitle: "Aventura", Icon: GravelIcon },
    { name: "SERVICE", subtitle: "Taller", Icon: ServiceIcon },
    { name: "GEAR", subtitle: "Accesorios", Icon: GearIcon },
    { name: "ROUTES", subtitle: "Rutas", Icon: RoutesIcon },
    { name: "SHOP", subtitle: "Tienda", Icon: ShopIcon },
    { name: "TEAM", subtitle: "Equipo", Icon: TeamIcon },
    { name: "EVENTS", subtitle: "Eventos", Icon: EventsIcon },
    { name: "SALE", subtitle: "Ofertas", Icon: SaleIcon },
    { name: "NEW", subtitle: "Nuevo", Icon: NewIcon },
  ];

  const rules = [
    { label: "ViewBox", value: "0 0 100 100" },
    { label: "Stroke principal", value: "3.5px" },
    { label: "Stroke secundario", value: "2.5px" },
    { label: "Linecap", value: "Round" },
    { label: "Linejoin", value: "Round" },
    { label: "Color", value: "currentColor" },
    { label: "Acento", value: "#EF4444" },
    { label: "Fills", value: "Sin negro duro" },
  ];

  return (
    <ManualSection id="iconografia">
      <SectionTitle num="05" title="SISTEMA DE ICONOS" subtitle="12 iconos SVG · Specialized Premium" />

      {/* Icon grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-4 mb-8">
        {icons.map(({ name, subtitle, Icon }) => (
          <div
            key={name}
            style={{
              background: "#0a0a0a",
              border: "1px solid #1a1a1a",
              borderRadius: 12,
              padding: "20px 12px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
            }}
          >
            <div style={{ color: "#fff" }}>
              <Icon size={44} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 9, fontWeight: 800, color: "#fff", letterSpacing: "0.15em" }}>{name}</div>
              <div style={{ fontSize: 8, color: "#444", letterSpacing: "0.1em", marginTop: 2 }}>{subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Specs + size demos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Technical specs */}
        <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 16 }}>ESPECIFICACIONES TÉCNICAS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {rules.map((r) => (
              <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 8, borderBottom: "1px solid #111" }}>
                <span style={{ fontSize: 10, color: "#555" }}>{r.label}</span>
                <span style={{ fontSize: 10, color: "#fff", fontFamily: "monospace" }}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Size scale */}
        <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 16 }}>ESCALA DE TAMAÑOS</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 20, flexWrap: "wrap" }}>
            {[
              { size: 20, label: "20px", use: "Caption" },
              { size: 32, label: "32px", use: "UI" },
              { size: 48, label: "48px", use: "Card" },
              { size: 72, label: "72px", use: "Story" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", marginBottom: 8 }}>
                  <TurboIcon size={s.size} />
                </div>
                <div style={{ fontSize: 8, color: "#EF4444", fontFamily: "monospace", fontWeight: 700 }}>{s.label}</div>
                <div style={{ fontSize: 8, color: "#333" }}>{s.use}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 10 }}>VARIANTES DE COLOR</div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ background: "#000", border: "1px solid #222", borderRadius: 8, padding: 12, color: "#fff" }}><RoadIcon size={36} /></div>
              <div style={{ background: "#EF4444", borderRadius: 8, padding: 12, color: "#fff" }}><RoadIcon size={36} /></div>
              <div style={{ background: "#fff", borderRadius: 8, padding: 12, color: "#000" }}><RoadIcon size={36} /></div>
              <div style={{ background: "#111", border: "1px solid #EF4444", borderRadius: 8, padding: 12, color: "#EF4444" }}><RoadIcon size={36} /></div>
            </div>
          </div>
        </div>
      </div>
    </ManualSection>
  );
}

// ── SECTION 7 — Formatos digitales ───────────────────────────────────────────
function DigitalSection() {
  const formats = [
    {
      name: "HIGHLIGHT",
      ratio: "1:1",
      size: "160×160 px",
      use: "Instagram Highlights · Menú de historias",
      notes: ["Fondo negro", "Icono SVG blanco", "Anillo de gradiente rojo"],
    },
    {
      name: "HISTORIA",
      ratio: "9:16",
      size: "1080×1920 px",
      use: "Instagram Stories · Contenido vertical",
      notes: ["Línea roja superior", "Icono centrado grande", "Firma inferior"],
    },
    {
      name: "POST FEED",
      ratio: "1:1",
      size: "1080×1080 px",
      use: "Feed de Instagram · Publicaciones fijas",
      notes: ["Marco de estilo (CARBONO/EDGE/PHANTOM)", "Foto con overlay", "Logo en footer"],
    },
    {
      name: "BANNER WEB",
      ratio: "16:9",
      size: "1920×1080 px",
      use: "Web · Newsletter · Campañas",
      notes: ["Máximo contraste", "Claim visible", "CTA en rojo"],
    },
  ];

  return (
    <ManualSection id="digital">
      <SectionTitle num="06" title="FORMATOS DIGITALES" subtitle="Especificaciones · Medidas · Usos" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {formats.map((f) => (
          <div key={f.name} style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, overflow: "hidden" }}>
            {/* Format preview */}
            <div
              style={{
                background: "linear-gradient(135deg, #0d0d0d 0%, #111 100%)",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              {/* Ratio visual */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                {f.ratio === "9:16" ? (
                  <div style={{ width: 28, height: 50, border: "1.5px solid #EF4444", borderRadius: 3, background: "rgba(239,68,68,0.06)" }} />
                ) : f.ratio === "16:9" ? (
                  <div style={{ width: 56, height: 32, border: "1.5px solid #EF4444", borderRadius: 3, background: "rgba(239,68,68,0.06)" }} />
                ) : (
                  <div style={{ width: 40, height: 40, border: "1.5px solid #EF4444", borderRadius: 3, background: "rgba(239,68,68,0.06)" }} />
                )}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: 7, color: "#EF4444", fontWeight: 700, whiteSpace: "nowrap" }}>{f.ratio}</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#fff", letterSpacing: "0.1em" }}>{f.name}</div>
                <div style={{ fontSize: 10, color: "#EF4444", fontFamily: "monospace", marginTop: 2 }}>{f.size}</div>
              </div>
            </div>
            <div style={{ padding: "16px 20px 20px" }}>
              <div style={{ fontSize: 11, color: "#666", marginBottom: 12 }}>{f.use}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {f.notes.map((n) => (
                  <div key={n} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#EF4444", flexShrink: 0 }} />
                    <span style={{ fontSize: 10, color: "#555" }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ManualSection>
  );
}

// ── SECTION 8 — Voz y Tono ───────────────────────────────────────────────────
function VoiceSection() {
  const attrs = [
    { word: "TÉCNICO", desc: "Habla con precisión. Usa terminología correcta del ciclismo.", ex: "\"Geometría de competición con stack optimizado para potencia.\"" },
    { word: "PREMIUM", desc: "Evita lo genérico. Cada frase comunica calidad.", ex: "\"Crafted for those who demand more from every climb.\"" },
    { word: "DIRECTO", desc: "Sin rodeos. Frases cortas y contundentes.", ex: "\"La bici más rápida que hemos tenido. Punto.\"" },
    { word: "APASIONADO", desc: "Emociona al rider. Habla desde adentro del deporte.", ex: "\"Sentirás la diferencia desde el primer pedaleo.\"" },
  ];

  const doWords = ["Ride", "Potencia", "Precision", "Premium", "S-Works", "Craft", "Domina", "Elite", "Trail", "Rendimiento"];
  const dontWords = ["Barato", "Económico", "Básico", "Simple", "Normal", "Corriente", "Estándar", "Genérico"];

  return (
    <ManualSection id="voz">
      <SectionTitle num="07" title="VOZ Y TONO" subtitle="Carácter de marca · Vocabulario · Estilo editorial" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {attrs.map((a) => (
          <div key={a.word} style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "20px 24px" }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#EF4444", letterSpacing: "0.15em", marginBottom: 6 }}>{a.word}</div>
            <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginBottom: 10 }}>{a.desc}</p>
            <div style={{ background: "#111", borderLeft: "2px solid #EF4444", padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
              <p style={{ fontSize: 11, color: "#aaa", fontStyle: "italic", lineHeight: 1.5 }}>{a.ex}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vocabulary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "20px 24px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#22C55E", letterSpacing: "0.25em", marginBottom: 12 }}>PALABRAS BUONO ✓</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {doWords.map(w => (
              <span key={w} style={{ fontSize: 10, fontWeight: 700, color: "#22C55E", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 4, padding: "3px 10px" }}>{w}</span>
            ))}
          </div>
        </div>
        <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "20px 24px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 12 }}>PALABRAS PROHIBIDAS ✕</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {dontWords.map(w => (
              <span key={w} style={{ fontSize: 10, fontWeight: 700, color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 4, padding: "3px 10px" }}>{w}</span>
            ))}
          </div>
        </div>
      </div>
    </ManualSection>
  );
}

// ── SECTION 9 — Fotografía ────────────────────────────────────────────────────
function PhotoSection() {
  const styles = [
    { title: "ACCIÓN Y MOVIMIENTO", desc: "Fotos de riders en movimiento. Motion blur, ángulos bajos, perspectiva dinámica.", tags: ["Bokeh", "Alta velocidad", "Contra luz"] },
    { title: "PRODUCTO PURO", desc: "Bici sola sobre fondo negro o blanco. Iluminación de estudio. Sin props.", tags: ["Fondo neutro", "Detalle técnico", "Reflexos"] },
    { title: "LIFESTYLE PREMIUM", desc: "Rider en entornos urbanos o naturales. Ropa técnica Specialized. Ambiente real.", tags: ["Golden hour", "Urbano", "Natural"] },
    { title: "DETALLE Y TÉCNICA", desc: "Componentes, transmisión, neumáticos, zapatos. Macro. Alta resolución.", tags: ["Macro", "Foco selectivo", "Textura"] },
  ];

  const filters = [
    { name: "Contraste", value: "+15%" },
    { name: "Vibrancia", value: "+10%" },
    { name: "Sombras", value: "-20%" },
    { name: "Luces", value: "+5%" },
    { name: "Temperatura", value: "Fría / Neutra" },
    { name: "Saturación", value: "Moderada" },
  ];

  return (
    <ManualSection id="fotografia">
      <SectionTitle num="08" title="ESTILO FOTOGRÁFICO" subtitle="Dirección · Tratamiento · Post-producción" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {styles.map((s) => (
          <div key={s.title} style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "20px 24px" }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#EF4444", letterSpacing: "0.2em", marginBottom: 8 }}>{s.title}</div>
            <p style={{ fontSize: 12, color: "#666", lineHeight: 1.65, marginBottom: 12 }}>{s.desc}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {s.tags.map(t => <Pill key={t}>{t}</Pill>)}
            </div>
          </div>
        ))}
      </div>

      {/* Post-production */}
      <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 12, padding: "24px" }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 16 }}>AJUSTES DE POST-PRODUCCIÓN</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {filters.map((f) => (
            <div key={f.name} style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 8, padding: "12px" }}>
              <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.1em", marginBottom: 4 }}>{f.name}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", fontFamily: "monospace" }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </ManualSection>
  );
}

// ── SECTION 10 — Do's and Don'ts ─────────────────────────────────────────────
function DosDontsSection() {
  const dos = [
    "Usar el logo sobre fondos oscuros o blancos",
    "Mantener el rojo #EF4444 como único color de acento",
    "Usar tipografía en mayúsculas para labels y títulos",
    "Respetar el área de protección del logotipo",
    "Aplicar los marcos CARBONO/EDGE/PHANTOM para posts",
    "Mantener coherencia entre todas las piezas de la marca",
    "Usar fotos de alta calidad y resolución adecuada",
    "Siempre incluir el claim o firma en piezas digitales",
  ];
  const donts = [
    "Usar colores distintos al rojo como acento principal",
    "Deformar o alterar las proporciones del logo",
    "Mezclar estilos tipográficos sin criterio",
    "Usar fondos de colores distintos al negro/blanco",
    "Colocar el logo sobre fotografías sin overlay",
    "Usar iconos de otras marcas en comunicaciones Buono",
    "Publicar fotos de baja calidad o mal encuadradas",
    "Improvisar marcos o diseños fuera del sistema",
  ];

  return (
    <ManualSection id="reglas">
      <SectionTitle num="09" title="USO CORRECTO" subtitle="Do's and Don'ts · Reglas de aplicación" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div style={{ background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: 12, padding: "24px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#22C55E", letterSpacing: "0.25em", marginBottom: 16 }}>✓ HACER</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {dos.map((d) => (
              <div key={d} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 9, color: "#22C55E" }}>✓</span>
                </div>
                <span style={{ fontSize: 12, color: "#aaa", lineHeight: 1.5 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 12, padding: "24px" }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.25em", marginBottom: 16 }}>✕ NO HACER</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {donts.map((d) => (
              <div key={d} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 9, color: "#EF4444" }}>✕</span>
                </div>
                <span style={{ fontSize: 12, color: "#aaa", lineHeight: 1.5 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ManualSection>
  );
}

// ── SECTION 11 — Contacto / Cierre ───────────────────────────────────────────
function ClosingSection() {
  return (
    <div
      style={{
        position: "relative",
        background: "#000",
        border: "1px solid #1a1a1a",
        borderRadius: 20,
        padding: "clamp(36px, 6vw, 64px) clamp(28px, 5vw, 56px)",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div style={{ position: "absolute", bottom: -60, right: -60, opacity: 0.05 }}>
        <WheelSpeedIcon size={240} />
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, #EF4444, transparent)" }} />

      <div style={{ position: "relative" }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.3em", marginBottom: 16 }}>FIN DEL DOCUMENTO</div>
        <div style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, color: "#fff", letterSpacing: "0.1em", marginBottom: 8 }}>BUONO BIKES</div>
        <div style={{ width: 48, height: 2, background: "#EF4444", margin: "0 auto 20px" }} />
        <p style={{ fontSize: 13, color: "#555", maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.7 }}>
          Distribuidor oficial Specialized. Este manual es un documento vivo — cualquier consulta sobre aplicación de marca, escribir a:
        </p>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>@buono.bikes</div>
        <div style={{ fontSize: 11, color: "#EF4444", marginTop: 4 }}>Instagram · Bogotá, Colombia</div>
        <div style={{ marginTop: 24, fontSize: 9, color: "#333", letterSpacing: "0.2em" }}>
          BUONO BIKES © 2025 · MANUAL DE IDENTIDAD VISUAL v1.0
        </div>
      </div>
    </div>
  );
}

// ── TABLE OF CONTENTS ─────────────────────────────────────────────────────────
function TableOfContents() {
  const sections = [
    { num: "01", title: "LA MARCA", sub: "Misión · Visión · Valores" },
    { num: "02", title: "LOGOTIPO", sub: "Versiones · Área de protección" },
    { num: "03", title: "PALETA DE COLORES", sub: "Primarios · Grises · Combinaciones" },
    { num: "04", title: "TIPOGRAFÍA", sub: "Familia · Escala · Pesos" },
    { num: "05", title: "SISTEMA DE ICONOS", sub: "12 SVGs · Specs técnicas" },
    { num: "06", title: "FORMATOS DIGITALES", sub: "Instagram · Web · Medidas" },
    { num: "07", title: "VOZ Y TONO", sub: "Carácter · Vocabulario · Ejemplos" },
    { num: "08", title: "FOTOGRAFÍA", sub: "Dirección · Estilos · Post-producción" },
    { num: "09", title: "USO CORRECTO", sub: "Do's and Don'ts" },
  ];

  return (
    <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: 16, padding: "28px 32px", marginBottom: 64 }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: "#EF4444", letterSpacing: "0.3em", marginBottom: 20 }}>ÍNDICE DE CONTENIDOS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {sections.map((s, i) => (
          <div
            key={s.num}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "10px 0",
              borderBottom: i < sections.length - 1 ? "1px solid #111" : "none",
            }}
          >
            <div style={{ fontSize: 9, color: "#EF4444", fontFamily: "monospace", fontWeight: 700, minWidth: 20 }}>{s.num}</div>
            <div style={{ flex: 1, height: 1, background: "#111" }} />
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.12em" }}>{s.title}</div>
              <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.08em" }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── EXPORT ────────────────────────────────────────────────────────────────────
export function BrandManual() {
  return (
    <div style={{ width: "100%" }}>
      <CoverSection />
      <TableOfContents />
      <BrandSection />
      <LogoSection />
      <ColorsSection />
      <TypographySection />
      <IconographySection />
      <DigitalSection />
      <VoiceSection />
      <PhotoSection />
      <DosDontsSection />
      <div style={{ marginTop: 80 }}>
        <ClosingSection />
      </div>
    </div>
  );
}
