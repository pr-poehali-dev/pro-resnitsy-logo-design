import { useState } from "react";

const ACCENT = "#7B2D8B";
const ACCENT_PINK = "#D63384";
const BLACK = "#1a1a1a";
const WHITE = "#ffffff";
const GRAY = "#f5f5f5";

const LogoSVG = ({
  size = 400,
  variant = "violet",
  darkBg = false,
}: {
  size?: number;
  variant?: "violet" | "pink" | "black";
  darkBg?: boolean;
}) => {
  const accent =
    variant === "violet" ? ACCENT : variant === "pink" ? ACCENT_PINK : (darkBg ? "#aaa" : BLACK);
  const fg = darkBg ? WHITE : BLACK;
  const bg = darkBg ? BLACK : WHITE;
  const sw = size / 200;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <rect width="400" height="400" fill={bg} />

      {/* BROW ARC */}
      <path
        d="M 110 148 Q 200 108 290 148"
        fill="none"
        stroke={accent}
        strokeWidth={sw * 2.2}
        strokeLinecap="round"
      />

      {/* EYE upper lid */}
      <path
        d="M 110 195 Q 155 165 200 162 Q 245 165 290 195"
        fill="none"
        stroke={fg}
        strokeWidth={sw * 2.8}
        strokeLinecap="round"
      />
      {/* EYE lower lid */}
      <path
        d="M 110 195 Q 155 218 200 221 Q 245 218 290 195"
        fill="none"
        stroke={fg}
        strokeWidth={sw * 1.4}
        strokeLinecap="round"
      />

      {/* IRIS */}
      <circle cx="200" cy="191" r="22" fill="none" stroke={fg} strokeWidth={sw * 1.8} />
      {/* PUPIL */}
      <circle cx="200" cy="191" r="10" fill={accent} />
      {/* Highlight */}
      <circle cx="205" cy="186" r="3.5" fill={bg} />

      {/* UPPER LASHES */}
      {[
        { cx: 120, cy: 190, ex: 112, ey: 158, qx: 110, qy: 172 },
        { cx: 138, cy: 181, ex: 132, ey: 148, qx: 128, qy: 163 },
        { cx: 158, cy: 173, ex: 154, ey: 140, qx: 149, qy: 155 },
        { cx: 178, cy: 168, ex: 176, ey: 133, qx: 171, qy: 149 },
        { cx: 200, cy: 165, ex: 199, ey: 128, qx: 194, qy: 145 },
        { cx: 222, cy: 168, ex: 223, ey: 132, qx: 228, qy: 149 },
        { cx: 242, cy: 173, ex: 246, ey: 138, qx: 251, qy: 154 },
        { cx: 262, cy: 181, ex: 268, ey: 147, qx: 272, qy: 163 },
        { cx: 280, cy: 190, ex: 289, ey: 158, qx: 291, qy: 173 },
      ].map((l, i) => (
        <path
          key={i}
          d={`M ${l.cx} ${l.cy} Q ${l.qx} ${l.qy} ${l.ex} ${l.ey}`}
          fill="none"
          stroke={fg}
          strokeWidth={sw * (i === 4 ? 2 : 1.5)}
          strokeLinecap="round"
        />
      ))}

      {/* LOWER LASHES subtle */}
      {[
        { x1: 135, y1: 210, x2: 128, y2: 226 },
        { x1: 163, y1: 218, x2: 159, y2: 232 },
        { x1: 200, y1: 221, x2: 199, y2: 236 },
        { x1: 237, y1: 218, x2: 241, y2: 232 },
        { x1: 265, y1: 210, x2: 272, y2: 226 },
      ].map((l, i) => (
        <line
          key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={fg}
          strokeWidth={sw * 1}
          strokeLinecap="round"
          opacity="0.45"
        />
      ))}

      {/* NAME — ПРО */}
      <text
        x="200" y="290"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond','Georgia',serif"
        fontWeight="600"
        fontSize="44"
        fill={fg}
        letterSpacing="10"
      >
        ПРО
      </text>

      {/* Dividers */}
      <line x1="130" y1="300" x2="170" y2="300" stroke={fg} strokeWidth="0.6" opacity="0.2" />
      <line x1="230" y1="300" x2="270" y2="300" stroke={fg} strokeWidth="0.6" opacity="0.2" />

      {/* NAME — РЕСНИЦЫ */}
      <text
        x="200" y="327"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond','Georgia',serif"
        fontWeight="300"
        fontStyle="italic"
        fontSize="27"
        fill={accent}
        letterSpacing="8"
      >
        РЕСНИЦЫ
      </text>

      {/* TAGLINE */}
      <text
        x="200" y="357"
        textAnchor="middle"
        fontFamily="'Montserrat',sans-serif"
        fontWeight="300"
        fontSize="8.5"
        fill={fg}
        letterSpacing="4.5"
        opacity="0.4"
      >
        ЛАМИНИРОВАНИЕ · БРОВИ
      </text>
    </svg>
  );
};

const COLOR_VARIANTS = [
  { id: "violet", label: "Фиолетовый", color: ACCENT },
  { id: "pink",   label: "Розовый",    color: ACCENT_PINK },
  { id: "black",  label: "Монохром",   color: BLACK },
] as const;

export default function Index() {
  const [active, setActive] = useState<"violet" | "pink" | "black">("violet");

  return (
    <div style={{ minHeight: "100vh", background: GRAY, fontFamily: "'Montserrat',sans-serif", color: BLACK }}>

      {/* Header */}
      <header style={{ background: WHITE, borderBottom: "1px solid #ebebeb", padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "9px", letterSpacing: "4px", opacity: 0.35 }}>ЛОГОТИП · ВЕРСИЯ 2</span>
        <span style={{ fontSize: "9px", letterSpacing: "3px", color: active === "violet" ? ACCENT : active === "pink" ? ACCENT_PINK : BLACK, opacity: 0.7 }}>ПроРесницы</span>
      </header>

      {/* Hero */}
      <section style={{ background: WHITE, padding: "64px 48px 48px", textAlign: "center", borderBottom: "1px solid #ebebeb" }}>
        <p style={{ fontSize: "9px", letterSpacing: "5px", opacity: 0.3, marginBottom: "14px" }}>СТУДИЯ КРАСОТЫ</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,5vw,52px)", fontWeight: 300, letterSpacing: "6px", color: BLACK, margin: "0 0 10px" }}>
          ПроРесницы
        </h1>
        <p style={{ fontSize: "10px", letterSpacing: "3px", color: active === "violet" ? ACCENT : active === "pink" ? ACCENT_PINK : BLACK, opacity: 0.65 }}>
          Ламинирование · Коррекция бровей
        </p>
      </section>

      {/* Variant selector */}
      <div style={{ display: "flex", justifyContent: "center", gap: 0, padding: "40px 0 0" }}>
        {COLOR_VARIANTS.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v.id)}
            style={{
              padding: "10px 28px",
              fontSize: "9px",
              letterSpacing: "3px",
              border: `1px solid ${active === v.id ? v.color : "#e0e0e0"}`,
              borderRadius: 0,
              background: active === v.id ? v.color : WHITE,
              color: active === v.id ? WHITE : "#999",
              cursor: "pointer",
              transition: "all 0.25s ease",
              fontFamily: "'Montserrat',sans-serif",
            }}
          >
            {v.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main logo */}
      <div style={{ display: "flex", justifyContent: "center", padding: "48px 24px" }}>
        <div style={{ background: WHITE, boxShadow: "0 8px 60px rgba(0,0,0,0.09)", borderRadius: "2px" }}>
          <LogoSVG size={420} variant={active} />
        </div>
      </div>

      {/* Mockups */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 32px 80px" }}>
        <p style={{ textAlign: "center", fontSize: "9px", letterSpacing: "5px", opacity: 0.3, marginBottom: "28px" }}>
          КАК ВЫГЛЯДИТ НА НОСИТЕЛЯХ
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>

          {/* Визитка */}
          <div style={{ background: WHITE, padding: "32px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
            <span style={{ fontSize: "8px", letterSpacing: "3px", opacity: 0.35 }}>ВИЗИТКА</span>
            <div style={{ width: "190px", height: "110px", background: WHITE, border: "1px solid #ebebeb", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
              <LogoSVG size={88} variant={active} />
            </div>
          </div>

          {/* Вывеска тёмная */}
          <div style={{ background: WHITE, padding: "32px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
            <span style={{ fontSize: "8px", letterSpacing: "3px", opacity: 0.35 }}>ВЫВЕСКА</span>
            <div style={{ width: "190px", height: "110px", background: BLACK, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <LogoSVG size={88} variant={active} darkBg />
            </div>
          </div>

          {/* Упаковка */}
          <div style={{ background: WHITE, padding: "32px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
            <span style={{ fontSize: "8px", letterSpacing: "3px", opacity: 0.35 }}>УПАКОВКА</span>
            <div style={{
              width: "110px", height: "110px",
              background: active === "violet" ? "#f5eefa" : active === "pink" ? "#fdf0f6" : "#f5f5f5",
              border: `1px solid ${active === "violet" ? "#e0c6ee" : active === "pink" ? "#f2b8d2" : "#ddd"}`,
              borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"
            }}>
              <LogoSVG size={88} variant={active} />
            </div>
          </div>
        </div>

        {/* Palette */}
        <div style={{ marginTop: "24px", background: WHITE, padding: "28px 40px", display: "flex", gap: "28px", alignItems: "center", flexWrap: "wrap", boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          <span style={{ fontSize: "8px", letterSpacing: "4px", opacity: 0.35, minWidth: "70px" }}>ПАЛИТРА</span>
          {[
            { color: BLACK,       label: "Графит",  hex: "#1a1a1a" },
            { color: ACCENT,      label: "Фиолет",  hex: "#7B2D8B" },
            { color: ACCENT_PINK, label: "Роза",    hex: "#D63384" },
            { color: WHITE,       label: "Белый",   hex: "#ffffff", border: true },
          ].map((c) => (
            <div key={c.hex} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "34px", height: "34px", background: c.color, border: c.border ? "1px solid #ddd" : "none", borderRadius: "50%", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "1px" }}>{c.label}</div>
                <div style={{ fontSize: "9px", opacity: 0.35, marginTop: "2px" }}>{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #ebebeb", padding: "24px 48px", textAlign: "center", fontSize: "8px", letterSpacing: "5px", opacity: 0.3, background: WHITE }}>
        ПРОРЕСНИЦЫ · СТУДИЯ ЛАМИНИРОВАНИЯ И КОРРЕКЦИИ БРОВЕЙ
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Montserrat:wght@200;300;400&display=swap');
      `}</style>
    </div>
  );
}
