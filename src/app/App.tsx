import { useState } from "react";
import buonoLogo from "figma:asset/07c8073a8ea62fff23f2bb2da8377c06cf5c2414.png";
import {
  TurboIcon, MTBIcon, RoadIcon, GravelIcon, ServiceIcon,
  GearIcon, RoutesIcon, ShopIcon, TeamIcon, EventsIcon,
  SaleIcon, NewIcon, WheelSpeedIcon,
} from "./components/SpecializedIcons";
import { InstagramFeedMockup } from "./components/InstagramFeedMockup";
import { PostFrames } from "./components/PostFrames";
import { BrandManual } from "./components/BrandManual";

// ── Data ──────────────────────────────────────────────────────────────────────
const highlights = [
  { name: "TURBO",   subtitle: "E-BIKES",       tag: "Electric",    component: TurboIcon,    accent: "red" },
  { name: "MTB",     subtitle: "MOUNTAIN",      tag: "Off-road",    component: MTBIcon,      accent: "white" },
  { name: "ROAD",    subtitle: "CARRETERA",     tag: "Aero",        component: RoadIcon,     accent: "red" },
  { name: "GRAVEL",  subtitle: "AVENTURA",      tag: "All-Road",    component: GravelIcon,   accent: "white" },
  { name: "SERVICE", subtitle: "TALLER",        tag: "Workshop",    component: ServiceIcon,  accent: "red" },
  { name: "GEAR",    subtitle: "ACCESORIOS",    tag: "Accessories", component: GearIcon,     accent: "white" },
  { name: "ROUTES",  subtitle: "RUTAS",         tag: "Explore",     component: RoutesIcon,   accent: "red" },
  { name: "SHOP",    subtitle: "TIENDA",        tag: "Store",       component: ShopIcon,     accent: "white" },
  { name: "TEAM",    subtitle: "EQUIPO",        tag: "Pro",         component: TeamIcon,     accent: "red" },
  { name: "EVENTS",  subtitle: "EVENTOS",       tag: "Racing",      component: EventsIcon,   accent: "white" },
  { name: "SALE",    subtitle: "OFERTAS",       tag: "Up to 40%",   component: SaleIcon,     accent: "red" },
  { name: "NEW",     subtitle: "NUEVO",         tag: "Launch",      component: NewIcon,      accent: "white" },
];

type TabId = "manual" | "highlights" | "stories" | "minimal" | "feed" | "frames";

const tabs: { id: TabId; label: string }[] = [
  { id: "manual",     label: "MANUAL" },
  { id: "highlights", label: "MINIATURAS" },
  { id: "stories",    label: "HISTORIAS 9:16" },
  { id: "minimal",    label: "ESTILO MINIMAL" },
  { id: "feed",       label: "FEED INSTAGRAM" },
  { id: "frames",     label: "MARCOS POST" },
];

// ── Sub-views ──────────────────────────────────────────────────────────────────

/** Circle thumbnail grid — Instagram highlight style */
function HighlightsView() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
      {highlights.map((h, i) => {
        const Icon = h.component;
        const isHovered = hovered === i;
        return (
          <div
            key={h.name}
            className="flex flex-col items-center gap-3 cursor-pointer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Instagram-style gradient ring */}
            <div
              className="relative p-[3px] rounded-full transition-all duration-300"
              style={{
                background: isHovered
                  ? "linear-gradient(135deg, #EF4444, #ff8c00, #EF4444)"
                  : "linear-gradient(135deg, #3a3a3a, #5a5a5a)",
              }}
            >
              {/* Inner circle */}
              <div
                className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300"
                style={{
                  background: isHovered
                    ? "radial-gradient(circle at 30% 30%, #1a1a1a, #000)"
                    : "radial-gradient(circle at 30% 30%, #111, #000)",
                }}
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 rounded-full transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at 40% 30%, rgba(239,68,68,0.15), transparent 70%)",
                    opacity: isHovered ? 1 : 0,
                  }}
                />
                <div
                  className="relative transition-transform duration-300 text-white"
                  style={{ transform: isHovered ? "scale(1.12)" : "scale(1)" }}
                >
                  <Icon size={44} />
                </div>
              </div>
            </div>
            {/* Label */}
            <div className="text-center">
              <div
                className="text-xs tracking-widest transition-colors duration-200"
                style={{
                  color: isHovered ? "#EF4444" : "#ffffff",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
              >
                {h.name}
              </div>
              <div className="text-gray-600 tracking-wider" style={{ fontSize: "10px" }}>
                {h.subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Full 9:16 story cards */
function StoriesView() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {highlights.map((h, i) => {
        const Icon = h.component;
        const isHovered = hovered === i;

        return (
          <div
            key={h.name}
            className="relative cursor-pointer group"
            style={{ aspectRatio: "9/16" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Card */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden transition-all duration-400"
              style={{
                background: "linear-gradient(160deg, #0d0d0d 0%, #000 60%, #0d0d0d 100%)",
                border: isHovered ? "1.5px solid #EF4444" : "1.5px solid #222",
                transform: isHovered ? "scale(1.03)" : "scale(1)",
                boxShadow: isHovered
                  ? "0 0 30px rgba(239,68,68,0.25), 0 20px 40px rgba(0,0,0,0.8)"
                  : "0 8px 32px rgba(0,0,0,0.6)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, #EF4444, transparent)",
                  opacity: isHovered ? 1 : 0.4,
                }}
              />

              {/* Corner mark — top right */}
              <div
                className="absolute top-4 right-4 transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0.3 }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    background: "#EF4444",
                    borderRadius: "50%",
                  }}
                />
              </div>

              {/* Background radial glow */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  background: "radial-gradient(ellipse at 50% 40%, rgba(239,68,68,0.08), transparent 65%)",
                  opacity: isHovered ? 1 : 0,
                }}
              />

              {/* Main content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-0 px-4">
                {/* Eyebrow label */}
                <div
                  className="tracking-widest mb-4"
                  style={{
                    fontSize: "8px",
                    color: "#EF4444",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                  }}
                >
                  BUONO
                </div>

                {/* Icon */}
                <div
                  className="text-white transition-transform duration-300"
                  style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
                >
                  <Icon size={72} />
                </div>

                {/* Divider */}
                <div
                  className="my-4 transition-all duration-300"
                  style={{
                    height: "2px",
                    width: isHovered ? "40px" : "28px",
                    background: "#EF4444",
                    borderRadius: "2px",
                  }}
                />

                {/* Title */}
                <div
                  className="text-white text-center tracking-tighter"
                  style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "-0.02em" }}
                >
                  {h.name}
                </div>
                {/* Subtitle */}
                <div
                  className="text-gray-500 text-center mt-1"
                  style={{ fontSize: "9px", letterSpacing: "0.22em", fontWeight: 500 }}
                >
                  {h.subtitle}
                </div>
              </div>

              {/* Bottom brand bar */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex items-center justify-between">
                <div
                  style={{
                    height: "1px",
                    flex: 1,
                    background: "linear-gradient(90deg, transparent, #333)",
                  }}
                />
                <div
                  style={{
                    fontSize: "7px",
                    color: "#444",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    padding: "0 8px",
                  }}
                >
                  BUONO
                </div>
                <div
                  style={{
                    height: "1px",
                    flex: 1,
                    background: "linear-gradient(90deg, #333, transparent)",
                  }}
                />
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                  background: "linear-gradient(90deg, transparent, #EF4444, transparent)",
                  opacity: 0.3,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Minimal style: white and red on black */
function MinimalView() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
      {highlights.map((h, i) => {
        const Icon = h.component;
        const isHovered = hovered === i;

        return (
          <div
            key={h.name}
            className="flex flex-col items-center gap-3 cursor-pointer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* White circle that goes red on hover */}
            <div
              className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300"
              style={{
                background: isHovered ? "#EF4444" : "#fff",
                transform: isHovered ? "scale(1.08)" : "scale(1)",
                boxShadow: isHovered
                  ? "0 0 24px rgba(239,68,68,0.5)"
                  : "0 4px 16px rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  color: isHovered ? "#fff" : "#000",
                  transition: "color 0.3s",
                }}
              >
                <Icon size={44} />
              </div>
            </div>
            {/* Label */}
            <div className="text-center">
              <div
                className="tracking-widest transition-colors duration-200"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: isHovered ? "#EF4444" : "#888",
                }}
              >
                {h.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Main App ───────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("manual");

  return (
    <div
      className="size-full min-h-screen overflow-auto"
      style={{ background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ── Header ─────────────────────────────────────── */}
        <div className="text-center mb-14">
          <div className="inline-flex flex-col items-center gap-3 mb-6">

            <div
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(48px, 8vw, 80px)",
                fontWeight: 900,
                letterSpacing: "0.18em",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: 1,
              }}
            >
              BUONO
            </div>

            <div
              style={{
                width: "260px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #EF4444 30%, #EF4444 70%, transparent)",
              }}
            />
          </div>
          <p
            className="text-gray-500 tracking-widest"
            style={{ fontSize: "11px", letterSpacing: "0.3em", fontWeight: 600 }}
          >
            INSTAGRAM STORY HIGHLIGHTS • PREMIUM COLLECTION
          </p>
        </div>

        {/* ── Tab Navigation ─────────────────────────────────────── */}
        <div className="mb-12">
          {/* Mobile: 2-row wrapped grid */}
          <div
            className="flex sm:hidden flex-wrap justify-center gap-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: "0 0 calc(33.33% - 6px)",
                  padding: "9px 6px",
                  borderRadius: 9999,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  background: activeTab === tab.id ? "#EF4444" : "#111",
                  color: activeTab === tab.id ? "#fff" : "#555",
                  border: activeTab === tab.id ? "none" : "1px solid #222",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Desktop: centered pill row */}
          <div className="hidden sm:flex items-center justify-center gap-1">
            <div
              className="flex rounded-full p-1"
              style={{ background: "#111", border: "1px solid #222" }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="transition-all duration-250 cursor-pointer"
                  style={{
                    padding: "8px 20px",
                    borderRadius: "9999px",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    background: activeTab === tab.id ? "#EF4444" : "transparent",
                    color: activeTab === tab.id ? "#fff" : "#555",
                    border: "none",
                    outline: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile indicator dots */}
          <div className="flex sm:hidden justify-center gap-1.5 mt-3">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                style={{
                  width: activeTab === tab.id ? 16 : 4,
                  height: 4,
                  borderRadius: 2,
                  background: activeTab === tab.id ? "#EF4444" : "#222",
                  transition: "all 0.25s",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Content ────────────────────────────────────────────── */}
        {activeTab === "manual" && (
          <div>
            <BrandManual />
          </div>
        )}
        {activeTab === "highlights" && (
          <div>
            <SectionLabel label="MINIATURAS DESTACADAS" note="Formato circular · Instagram Profile" />
            <HighlightsView />
          </div>
        )}
        {activeTab === "stories" && (
          <div>
            <SectionLabel label="HISTORIAS COMPLETAS" note="Formato 9:16 · 1080×1920 px" />
            <StoriesView />
          </div>
        )}
        {activeTab === "minimal" && (
          <div>
            <SectionLabel label="ESTILO MINIMAL" note="Blanco sobre negro · versión limpia" />
            <MinimalView />
          </div>
        )}
        {activeTab === "feed" && (
          <div>
            <SectionLabel label="MOCKUP FEED INSTAGRAM" note="Perfil buono.bikes · Simulación interactiva" />
            <InstagramFeedMockup />
          </div>
        )}
        {activeTab === "frames" && (
          <div>
            <SectionLabel label="MARCOS PARA PUBLICACIONES" note="3 variantes · Formato 1:1 · 1080×1080 px" />
            <PostFrames />
          </div>
        )}

        {/* ── Speed Wheel Feature ────────────────────────────────── */}
        <div className="mt-20 mb-14">
          <SectionLabel label="DISEÑO ESPECIAL" note="WheelSpeed · Icono de velocidad" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dark version */}
            <div
              className="relative rounded-2xl flex flex-col items-center justify-center gap-6 py-16"
              style={{
                background: "linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)",
                border: "1.5px solid #2a0000",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent, #EF4444, transparent)" }}
              />
              <div className="text-white">
                <WheelSpeedIcon size={120} />
              </div>
              <div className="text-center">
                <div
                  className="text-white tracking-tighter"
                  style={{ fontSize: "36px", fontWeight: 900 }}
                >
                  SPEED
                </div>
                <div
                  style={{ width: "48px", height: "2px", background: "#EF4444", margin: "8px auto 0" }}
                />
                <div
                  className="text-gray-600 mt-2"
                  style={{ fontSize: "9px", letterSpacing: "0.3em", fontWeight: 600 }}
                >
                  BUONO TURBO
                </div>
              </div>
            </div>

            {/* Light version */}
            <div
              className="relative rounded-2xl flex flex-col items-center justify-center gap-6 py-16 overflow-hidden"
              style={{ background: "#F5F5F5" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "#EF4444" }}
              />
              <div style={{ color: "#111" }}>
                <WheelSpeedIcon size={120} />
              </div>
              <div className="text-center">
                <div
                  className="tracking-tighter"
                  style={{ fontSize: "36px", fontWeight: 900, color: "#111" }}
                >
                  SPEED
                </div>
                <div
                  style={{ width: "48px", height: "2px", background: "#EF4444", margin: "8px auto 0" }}
                />
                <div
                  className="mt-2"
                  style={{ fontSize: "9px", letterSpacing: "0.3em", fontWeight: 600, color: "#999" }}
                >
                  BUONO TURBO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Design System Guide ─────────────────────────────────── */}
        <div
          className="rounded-2xl p-8"
          style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}
        >
          <div
            className="text-white mb-8 tracking-widest"
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em" }}
          >
            SISTEMA DE DISEÑO
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "ICONO",
                desc: "ViewBox 100×100 · Trazo 3.5px · Caps redondas · currentColor adaptable",
              },
              {
                label: "COLORES",
                desc: "#000000 Fondo · #FFFFFF Principal · #EF4444 Acento Buono",
              },
              {
                label: "MINIATURA",
                desc: "Círculo con gradiente de borde · Compatible con Instagram Highlights",
              },
              {
                label: "HISTORIA",
                desc: "Formato 9:16 (1080×1920 px) · Borde rojo en hover · Branding Buono",
              },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="mb-2"
                  style={{ color: "#EF4444", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em" }}
                >
                  {item.label}
                </div>
                <p style={{ color: "#555", fontSize: "12px", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Color swatches */}
          <div className="flex items-center gap-4 mt-8">
            {[
              { color: "#000000", name: "BLACK" },
              { color: "#111111", name: "CARBON" },
              { color: "#EF4444", name: "B-RED" },
              { color: "#FFFFFF", name: "WHITE" },
            ].map((swatch) => (
              <div key={swatch.name} className="flex items-center gap-2">
                <div
                  className="rounded"
                  style={{
                    width: "24px",
                    height: "24px",
                    background: swatch.color,
                    border: swatch.color === "#000000" ? "1px solid #333" : "none",
                  }}
                />
                <span style={{ color: "#444", fontSize: "9px", letterSpacing: "0.15em", fontWeight: 600 }}>
                  {swatch.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function SectionLabel({ label, note }: { label: string; note: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        style={{ width: "3px", height: "20px", background: "#EF4444", borderRadius: "2px", flexShrink: 0 }}
      />
      <div>
        <div
          className="text-white tracking-widest"
          style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em" }}
        >
          {label}
        </div>
        <div style={{ color: "#444", fontSize: "10px", letterSpacing: "0.1em", marginTop: "2px" }}>
          {note}
        </div>
      </div>
    </div>
  );
}