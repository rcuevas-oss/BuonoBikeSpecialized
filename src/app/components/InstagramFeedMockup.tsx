// ── Instagram Feed Mockup — Buono Bikes ───────────────────────────────────────
import { useState } from "react";
import img1 from "figma:asset/520fea57c8863dd8a3e87762da988b908bf587e6.png";
import img2 from "figma:asset/ff8469cbda09d4e5b42c636257373ca97ce0447c.png";
import img3 from "figma:asset/d554185401bda332fceb8d72dd7413eda326d531.png";
import img4 from "figma:asset/ae4bf103efd564e8a6c8752b65cd2ff4a9185af5.png";
import img5 from "figma:asset/373978f7b446365b9afdd173516180e5b1846bcd.png";
import img6 from "figma:asset/94b6e9d9e97e00982b1374f4faf1c89983e89579.png";
import {
  Heart, MessageCircle, Send, Bookmark, MoreHorizontal,
  Home, Search, Plus, Film, User, Grid3x3, ChevronLeft,
  MapPin, ShoppingBag,
} from "lucide-react";
import {
  TurboIcon, MTBIcon, RoadIcon, GravelIcon,
  ServiceIcon, GearIcon, RoutesIcon, ShopIcon,
  TeamIcon, EventsIcon, SaleIcon, NewIcon,
} from "./SpecializedIcons";

// ── Data ──────────────────────────────────────────────────────────────────────

const POSTS = [
  {
    id: 1,
    img: img1,
    likes: 1_243,
    comments: 34,
    caption: "La nueva S-Works Tarmac SL8 ya está en tienda. Ven a conocerla. 🔴",
    time: "2 h",
    tag: "ROAD",
    isVideo: false,
  },
  {
    id: 2,
    img: img2,
    likes: 2_891,
    comments: 67,
    caption: "Domina cualquier terreno con la nueva Stumpjumper EVO 🏔️ #MTB #Specialized",
    time: "1 d",
    tag: "MTB",
    isVideo: true,
  },
  {
    id: 3,
    img: img3,
    likes: 987,
    comments: 21,
    caption: "Gravel sin límites. Diverge STR — explora más lejos. 🌄",
    time: "2 d",
    tag: "GRAVEL",
    isVideo: false,
  },
  {
    id: 4,
    img: img4,
    likes: 3_412,
    comments: 89,
    caption: "Turbo Levo — potencia eléctrica, espíritu trail. ⚡ #EBike #Turbo",
    time: "3 d",
    tag: "TURBO",
    isVideo: false,
  },
  {
    id: 5,
    img: img5,
    likes: 4_120,
    comments: 112,
    caption: "Nuestro equipo en pista 🏆 Orgullosos de competir con lo mejor.",
    time: "4 d",
    tag: "TEAM",
    isVideo: false,
  },
  {
    id: 6,
    img: img6,
    likes: 756,
    comments: 18,
    caption: "Tu experiencia en tienda merece ser premium 🏪 Visítanos. #BuonoShop",
    time: "5 d",
    tag: "SHOP",
    isVideo: false,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1749087631368-1085d100564c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    likes: 1_567,
    comments: 43,
    caption: "Gear que marca la diferencia. Cascos, zapatillas y más 🪖 #Gear",
    time: "6 d",
    tag: "GEAR",
    isVideo: false,
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1761225155424-d6bfed504284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    likes: 5_234,
    comments: 201,
    caption: "Vuela en cada bajada 🤙 La adrenalina te espera. #MTB #Buono",
    time: "1 sem",
    tag: "MTB",
    isVideo: true,
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1735216220908-3696820d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    likes: 2_109,
    comments: 55,
    caption: "Kilómetros de carretera con el Tarmac al atardecer 🌅 #Road #Ride",
    time: "1 sem",
    tag: "ROAD",
    isVideo: false,
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1636761358757-0a616eb9e17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    likes: 893,
    comments: 27,
    caption: "Tu bici en manos expertas 🔧 Servicio técnico certificado Specialized.",
    time: "2 sem",
    tag: "SERVICE",
    isVideo: false,
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1758300555321-fe727a612b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    likes: 3_788,
    comments: 94,
    caption: "¡Nos vemos en la próxima carrera! 🏁 #Events #CyclingCommunity",
    time: "2 sem",
    tag: "EVENTS",
    isVideo: false,
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1624915436890-2d451eec8ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    likes: 1_422,
    comments: 38,
    caption: "Carbono de alta gama. Cada detalle importa. ✨ #NewArrivals #Buono",
    time: "3 sem",
    tag: "NEW",
    isVideo: false,
  },
];

const HIGHLIGHTS_DATA = [
  { name: "Turbo",   Icon: TurboIcon },
  { name: "MTB",    Icon: MTBIcon },
  { name: "Road",   Icon: RoadIcon },
  { name: "Gravel", Icon: GravelIcon },
  { name: "Service",Icon: ServiceIcon },
  { name: "Gear",   Icon: GearIcon },
  { name: "Routes", Icon: RoutesIcon },
  { name: "Shop",   Icon: ShopIcon },
  { name: "Team",   Icon: TeamIcon },
  { name: "Events", Icon: EventsIcon },
  { name: "Sale",   Icon: SaleIcon },
  { name: "New",    Icon: NewIcon },
];

const TAG_COLORS: Record<string, string> = {
  ROAD: "#3B82F6", MTB: "#22C55E", GRAVEL: "#F59E0B",
  TURBO: "#EF4444", TEAM: "#8B5CF6", SHOP: "#EC4899",
  GEAR: "#06B6D4", SERVICE: "#F97316", EVENTS: "#14B8A6",
  NEW: "#A855F7", SALE: "#EF4444",
};

function formatLikes(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

// ── Post Modal ─────────────────────────────────────────────────────────────────
function PostModal({ post, onClose }: { post: typeof POSTS[0]; onClose: () => void }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const tagColor = TAG_COLORS[post.tag] ?? "#EF4444";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl overflow-hidden flex"
        style={{
          background: "#000",
          maxWidth: 900,
          width: "100%",
          maxHeight: "90vh",
          boxShadow: "0 40px 100px rgba(0,0,0,0.9), 0 0 0 1px #262626",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image side */}
        <div className="flex-1 min-w-0" style={{ background: "#000" }}>
          <img
            src={post.img}
            alt={post.caption}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Info side */}
        <div
          className="flex flex-col"
          style={{ width: 340, flexShrink: 0, height: "560px", background: "#000" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: "1px solid #262626" }}>
            <div
              className="rounded-full overflow-hidden"
              style={{ width: 34, height: 34, flexShrink: 0, border: "1.5px solid #EF4444" }}
            >
              <img
                src="https://thfimacojfyzcewgkzti.supabase.co/storage/v1/object/public/Logo%20Buono%20Bike/ChatGPT%20Image%2025%20feb%202026,%2016_23_36.png"
                alt="Buono"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>buono.bikes</div>
              <div style={{ fontSize: 11, color: "#a8a8a8" }}>Especialistas Specialized</div>
            </div>
            <MoreHorizontal size={18} style={{ marginLeft: "auto", color: "#a8a8a8" }} />
          </div>

          {/* Caption */}
          <div className="flex-1 overflow-auto px-4 py-4">
            <div className="flex gap-2 mb-3">
              <div
                className="rounded-full px-2 py-0.5 text-white"
                style={{ fontSize: 10, fontWeight: 700, background: tagColor, letterSpacing: "0.08em" }}
              >
                {post.tag}
              </div>
            </div>
            <div style={{ fontSize: 13, color: "#fff", lineHeight: 1.6 }}>
              <span style={{ fontWeight: 700 }}>buono.bikes </span>
              {post.caption}
            </div>
            <div className="mt-4" style={{ fontSize: 11, color: "#a8a8a8" }}>
              Ver los {post.comments} comentarios
            </div>
            <div className="mt-1" style={{ fontSize: 11, color: "#737373" }}>
              Hace {post.time}
            </div>
          </div>

          {/* Actions */}
          <div className="px-4 py-3" style={{ borderTop: "1px solid #262626" }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <button onClick={() => setLiked((v) => !v)}>
                  <Heart
                    size={24}
                    fill={liked ? "#EF4444" : "none"}
                    stroke={liked ? "#EF4444" : "#fff"}
                  />
                </button>
                <MessageCircle size={24} stroke="#fff" />
                <Send size={24} stroke="#fff" />
              </div>
              <button onClick={() => setSaved((v) => !v)}>
                <Bookmark
                  size={24}
                  fill={saved ? "#fff" : "none"}
                  stroke="#fff"
                />
              </button>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>
              {formatLikes(post.likes + (liked ? 1 : 0))} Me gusta
            </div>
          </div>

          {/* Comment input */}
          <div className="px-4 py-3 flex items-center gap-2" style={{ borderTop: "1px solid #262626" }}>
            <div
              className="rounded-full overflow-hidden"
              style={{ width: 28, height: 28, flexShrink: 0, border: "1px solid #EF4444" }}
            >
              <img
                src="https://thfimacojfyzcewgkzti.supabase.co/storage/v1/object/public/Logo%20Buono%20Bike/ChatGPT%20Image%2025%20feb%202026,%2016_23_36.png"
                alt="Buono"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <input
              placeholder="Añade un comentario..."
              className="flex-1 outline-none"
              style={{ fontSize: 13, color: "#fff", background: "transparent" }}
            />
          </div>
        </div>

        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full flex items-center justify-center"
          style={{ width: 32, height: 32, background: "rgba(30,30,30,0.9)", color: "#fff", border: "1px solid #333" }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// ── Theme tokens ──────────────────────────────────────────────────────────────
const THEMES = {
  dark: {
    bg:        "#000000",
    bg2:       "#111111",
    border:    "#262626",
    text:      "#ffffff",
    textSub:   "#a8a8a8",
    textMuted: "#737373",
    btnSec:    "#262626",
    btnSecTxt: "#ffffff",
    tabActive: "#ffffff",
    tabInact:  "#555555",
    link:      "#4a9eff",
    indicator: "#ffffff",
    avatarRing:"#000000",
    hlBg:      "#111111",
    gridGap:   "#000000",
    iconFill:  "#ffffff",
  },
  light: {
    bg:        "#ffffff",
    bg2:       "#fafafa",
    border:    "#dbdbdb",
    text:      "#111111",
    textSub:   "#555555",
    textMuted: "#999999",
    btnSec:    "#efefef",
    btnSecTxt: "#111111",
    tabActive: "#111111",
    tabInact:  "#aaaaaa",
    link:      "#3B82F6",
    indicator: "#111111",
    avatarRing:"#ffffff",
    hlBg:      "#111111",
    gridGap:   "#ffffff",
    iconFill:  "#ffffff",
  },
};

// ── Phone Screen: Instagram Content ───────────────────────────────────────────
function InstagramScreen({
  onPostClick,
  theme = "dark",
}: {
  onPostClick: (p: typeof POSTS[0]) => void;
  theme?: "dark" | "light";
}) {
  const [activeTab, setActiveTab] = useState<"grid" | "reels" | "tagged">("grid");
  const t = THEMES[theme];

  return (
    <div className="flex flex-col h-full" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", background: t.bg }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-5" style={{ height: 44, flexShrink: 0, background: t.bg }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: t.text }}>9:41</span>
        <div className="flex items-center gap-1">
          <svg width="17" height="12" viewBox="0 0 17 12" fill={t.text}>
            <rect x="0" y="4" width="3" height="8" rx="0.5" />
            <rect x="4.5" y="2.5" width="3" height="9.5" rx="0.5" />
            <rect x="9" y="0.5" width="3" height="11.5" rx="0.5" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill={t.text}>
            <path d="M8 2.4C5.6 2.4 3.4 3.3 1.7 4.8L0 3C2.2 1.1 5 0 8 0s5.8 1.1 8 3l-1.7 1.8C12.6 3.3 10.4 2.4 8 2.4z"/>
            <path d="M8 6c-1.4 0-2.7.5-3.7 1.4L2.6 5.7C4 4.6 5.9 4 8 4s4 .6 5.4 1.7L11.7 7.4C10.7 6.5 9.4 6 8 6z"/>
            <path d="M8 9.5c-.8 0-1.5.3-2 .8L8 12l2-1.7c-.5-.5-1.2-.8-2-.8z"/>
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={t.text} strokeOpacity="0.35"/>
            <rect x="1.5" y="1.5" width="16" height="9" rx="2.5" fill={t.text}/>
            <path d="M23 4v4a2 2 0 000-4z" fill={t.text} fillOpacity="0.4"/>
          </svg>
        </div>
      </div>

      {/* IG top nav */}
      <div className="flex items-center justify-between px-4" style={{ height: 44, flexShrink: 0, borderBottom: `1px solid ${t.border}` }}>
        <ChevronLeft size={24} style={{ color: t.text }} />
        <span style={{ fontSize: 15, fontWeight: 700, color: t.text }}>buono.bikes</span>
        <MoreHorizontal size={24} style={{ color: t.text }} />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto" style={{ overscrollBehavior: "contain" }}>

        {/* Profile section */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center gap-5 mb-4">
            {/* Avatar */}
            <div
              className="rounded-full relative"
              style={{
                width: 84, height: 84, flexShrink: 0,
                boxShadow: `0 0 0 3px ${t.avatarRing}, 0 0 0 5px #EF4444`,
                overflow: "hidden", background: "#fff",
              }}
            >
              <img
                src="https://thfimacojfyzcewgkzti.supabase.co/storage/v1/object/public/Logo%20Buono%20Bike/ChatGPT%20Image%2025%20feb%202026,%2016_23_36.png"
                alt="Buono"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Stats */}
            {[
              { value: "148",   label: "Publicaciones" },
              { value: "12.4k", label: "Seguidores" },
              { value: "284",   label: "Siguiendo" },
            ].map((s) => (
              <div key={s.label} className="flex-1 text-center">
                <div style={{ fontSize: 17, fontWeight: 700, color: t.text }}>{s.value}</div>
                <div style={{ fontSize: 11, color: t.textSub }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div style={{ fontSize: 13, color: t.text }}>
            <span style={{ fontWeight: 700 }}>🚴‍♂️ Buono Bike Specialized</span>
          </div>
          <div style={{ fontSize: 11, color: t.textSub, lineHeight: 1.65, marginTop: 2, whiteSpace: "pre-line", wordBreak: "break-word", overflowWrap: "break-word", maxWidth: "100%" }}>
            {"🚲 Bicis | 🧤 Gear | 🎒 Accesorios\n🛠️ Taller pro | 🤝 Asesoría"}
          </div>
          <div className="flex items-center gap-1 mt-1" style={{ fontSize: 12, color: t.link }}>
            <MapPin size={11} />
            <span>buono.bikes/tienda</span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 mt-3">
            {["Seguir", "Mensaje", "Contacto"].map((btn, i) => (
              <button
                key={btn}
                className="flex-1 rounded-lg flex items-center justify-center gap-1"
                style={{
                  height: 32, fontSize: 12, fontWeight: 700,
                  background: i === 0 ? "#EF4444" : t.btnSec,
                  color: i === 0 ? "#fff" : t.btnSecTxt,
                  border: "none", cursor: "pointer",
                }}
              >
                {btn === "Contacto" && <ShoppingBag size={12} />}
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="flex gap-4 px-4 pb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {HIGHLIGHTS_DATA.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center gap-1.5" style={{ flexShrink: 0 }}>
              <div
                className="rounded-full flex items-center justify-center"
                style={{ width: 60, height: 60, background: t.hlBg, border: "2.5px solid #EF4444", padding: 2 }}
              >
                <div style={{ color: t.iconFill }}><Icon size={32} /></div>
              </div>
              <span style={{ fontSize: 10, color: t.textSub, letterSpacing: "0.03em" }}>{name}</span>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div
          className="flex"
          style={{ position: "sticky", top: 0, background: t.bg, zIndex: 10, borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}` }}
        >
          {[
            { id: "grid"   as const, Icon: Grid3x3 },
            { id: "reels"  as const, Icon: Film },
            { id: "tagged" as const, Icon: User },
          ].map(({ id, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="flex-1 flex items-center justify-center"
              style={{ height: 42, background: "transparent", border: "none", cursor: "pointer",
                borderBottom: activeTab === id ? `2px solid ${t.tabActive}` : "2px solid transparent" }}
            >
              <Icon size={22} stroke={activeTab === id ? t.tabActive : t.tabInact} strokeWidth={activeTab === id ? 2 : 1.5} />
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: t.gridGap }}>
          {POSTS.map((post) => (
            <div
              key={post.id}
              className="relative cursor-pointer group"
              style={{ aspectRatio: "1" }}
              onClick={() => onPostClick(post)}
            >
              <img src={post.img} alt={post.tag} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              {post.isVideo && (
                <div className="absolute top-2 right-2" style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.8))" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M4 8H2v12a2 2 0 002 2h12v-2H4V8zm16-4H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zm-8 12V8l6 4-6 4z"/>
                  </svg>
                </div>
              )}
              <div
                className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(0,0,0,0.5)" }}
              >
                <div className="flex items-center gap-1.5 text-white">
                  <Heart size={16} fill="white" stroke="none" />
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{formatLikes(post.likes)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <MessageCircle size={16} fill="white" stroke="none" />
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 20, background: t.bg }} />
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around" style={{ height: 50, flexShrink: 0, background: t.bg, borderTop: `1px solid ${t.border}` }}>
        <Home size={24} stroke={t.text} />
        <Search size={24} stroke={t.tabInact} />
        <div className="rounded-lg flex items-center justify-center" style={{ width: 28, height: 28, border: `2px solid ${t.text}` }}>
          <Plus size={16} stroke={t.text} strokeWidth={2.5} />
        </div>
        <Film size={24} stroke={t.tabInact} />
        <div className="rounded-full overflow-hidden" style={{ width: 26, height: 26, border: `2px solid ${t.text}` }}>
          <img
            src="https://thfimacojfyzcewgkzti.supabase.co/storage/v1/object/public/Logo%20Buono%20Bike/ChatGPT%20Image%2025%20feb%202026,%2016_23_36.png"
            alt="Buono"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-2" style={{ background: t.bg }}>
        <div style={{ width: 120, height: 4, borderRadius: 2, background: t.indicator }} />
      </div>
    </div>
  );
}

// ── Phone shell wrapper ────────────────────────────────────────────────────────
function PhoneMockup({
  theme,
  label,
  onPostClick,
}: {
  theme: "dark" | "light";
  label: string;
  onPostClick: (p: typeof POSTS[0]) => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 tracking-widest" style={{ fontSize: 10, color: "#EF4444", fontWeight: 700, letterSpacing: "0.25em" }}>
        {label}
      </div>
      <div
        style={{
          width: 340,
          borderRadius: 52,
          background: "linear-gradient(160deg, #2a2a2a 0%, #111 50%, #1f1f1f 100%)",
          padding: "14px 12px",
          boxShadow: "0 0 0 1px #3a3a3a, inset 0 0 0 1px #444, 0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(239,68,68,0.06)",
          position: "relative",
        }}
      >
        {/* Buttons left */}
        {[100, 148, 216].map((top) => (
          <div key={top} style={{ position: "absolute", left: -4, top, width: 4, height: top === 100 ? 36 : 56, borderRadius: "4px 0 0 4px", background: "#222" }} />
        ))}
        {/* Button right */}
        <div style={{ position: "absolute", right: -4, top: 160, width: 4, height: 72, borderRadius: "0 4px 4px 0", background: "#222" }} />

        {/* Screen */}
        <div style={{ borderRadius: 42, overflow: "hidden", height: 700, position: "relative" }}>
          {/* Dynamic island */}
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 110, height: 32, borderRadius: 20, background: "#000", zIndex: 20 }} />
          <InstagramScreen onPostClick={onPostClick} theme={theme} />
        </div>
      </div>
      {/* Glow */}
      <div style={{ width: 160, height: 14, marginTop: 10, background: "radial-gradient(ellipse, rgba(239,68,68,0.18) 0%, transparent 70%)", filter: "blur(6px)" }} />
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export function InstagramFeedMockup() {
  const [activePost, setActivePost] = useState<typeof POSTS[0] | null>(null);
  const [view, setView] = useState<"both" | "dark" | "light">("both");

  return (
    <div className="w-full">
      {/* View toggle */}
      <div className="flex justify-center mb-10">
        <div
          className="flex rounded-xl overflow-hidden"
          style={{ border: "1px solid #1e1e1e", background: "#0a0a0a" }}
        >
          {(["both", "dark", "light"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: "8px 20px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                background: view === v ? "#EF4444" : "transparent",
                color: view === v ? "#fff" : "#555",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {v === "both" ? "AMBAS" : v === "dark" ? "🌙 DARK" : "☀️ LIGHT"}
            </button>
          ))}
        </div>
      </div>

      {/* Phones */}
      <div className="flex flex-wrap gap-10 items-start justify-center">
        {(view === "both" || view === "dark") && (
          <PhoneMockup theme="dark" label="MODO OSCURO" onPostClick={setActivePost} />
        )}
        {(view === "both" || view === "light") && (
          <PhoneMockup theme="light" label="MODO CLARO" onPostClick={setActivePost} />
        )}
      </div>

      {/* Post modal */}
      {activePost && (
        <PostModal post={activePost} onClose={() => setActivePost(null)} />
      )}
    </div>
  );
}