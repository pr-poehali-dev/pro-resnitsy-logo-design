import { useState } from "react";

const LOGO_IMG = "https://cdn.poehali.dev/projects/8b7504d9-5f69-4fdb-aaaa-3d1f7a918a03/files/e2d2e1ac-4ab7-401d-a1d9-93e695378fdc.jpg";

const LashLogo = ({ dark = true, size = 400 }: { dark?: boolean; size?: number }) => {
  const bg = dark ? "#12080e" : "#fdf8f0";
  const gold = "#c9a84c";
  const goldLight = "#e8c96a";
  const textColor = dark ? "#c9a84c" : "#8a5c1a";
  const subColor = dark ? "#9a7a3a" : "#b8882a";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id={`bgGrad${dark}`} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor={dark ? "#1e0d17" : "#fffdf7"} />
          <stop offset="100%" stopColor={dark ? "#0a0508" : "#f0e8d8"} />
        </radialGradient>
        <linearGradient id={`goldGrad${dark}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={goldLight} />
          <stop offset="50%" stopColor={gold} />
          <stop offset="100%" stopColor="#a07830" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="400" height="400" fill={`url(#bgGrad${dark})`} />

      {/* Corner ornaments */}
      <g stroke={gold} strokeWidth="0.5" opacity="0.4">
        <line x1="20" y1="20" x2="50" y2="20" />
        <line x1="20" y1="20" x2="20" y2="50" />
        <line x1="380" y1="20" x2="350" y2="20" />
        <line x1="380" y1="20" x2="380" y2="50" />
        <line x1="20" y1="380" x2="50" y2="380" />
        <line x1="20" y1="380" x2="20" y2="350" />
        <line x1="380" y1="380" x2="350" y2="380" />
        <line x1="380" y1="380" x2="380" y2="350" />
      </g>

      {/* Outer border */}
      <rect x="14" y="14" width="372" height="372" fill="none" stroke={gold} strokeWidth="0.4" opacity="0.25" />

      {/* Lash arc lines — main artistic element */}
      <g filter="url(#glow)">
        {/* Upper lash arcs */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const x = 90 + i * 32;
          const len = [38, 46, 50, 54, 52, 48, 42, 34][i];
          const curve = [12, 18, 22, 26, 24, 20, 16, 10][i];
          const opacity = [0.5, 0.7, 0.85, 1, 1, 0.85, 0.7, 0.5][i];
          return (
            <path
              key={i}
              d={`M ${x} 170 Q ${x + 6} ${170 - curve} ${x + 4} ${170 - len}`}
              stroke={`url(#goldGrad${dark})`}
              strokeWidth={i === 3 || i === 4 ? "1.8" : "1.2"}
              fill="none"
              opacity={opacity}
              strokeLinecap="round"
            />
          );
        })}

        {/* Lower subtle lashes */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const x = 95 + i * 30;
          const len = [12, 16, 18, 20, 19, 17, 14, 10][i];
          const opacity = [0.2, 0.3, 0.4, 0.5, 0.5, 0.4, 0.3, 0.2][i];
          return (
            <path
              key={i}
              d={`M ${x} 175 Q ${x - 3} ${175 + len / 2} ${x - 2} ${175 + len}`}
              stroke={gold}
              strokeWidth="0.8"
              fill="none"
              opacity={opacity}
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Eye base arc */}
      <path
        d="M 80 170 Q 200 140 320 170"
        stroke={`url(#goldGrad${dark})`}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />

      {/* Pupil dot */}
      <circle cx="200" cy="164" r="6" fill={`url(#goldGrad${dark})`} opacity="0.9" />
      <circle cx="200" cy="164" r="3" fill={dark ? "#12080e" : "#fdf8f0"} opacity="0.8" />

      {/* Horizontal divider lines */}
      <line x1="60" y1="196" x2="340" y2="196" stroke={gold} strokeWidth="0.5" opacity="0.3" />

      {/* Main title */}
      <text
        x="200"
        y="240"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="400"
        fontSize="46"
        fill={`url(#goldGrad${dark})`}
        letterSpacing="4"
      >
        ПРО
      </text>

      {/* Subtitle word */}
      <text
        x="200"
        y="278"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="300"
        fontStyle="italic"
        fontSize="28"
        fill={subColor}
        letterSpacing="12"
      >
        РЕСНИЦЫ
      </text>

      {/* Bottom ornament */}
      <g opacity="0.4">
        <line x1="120" y1="308" x2="172" y2="308" stroke={gold} strokeWidth="0.5" />
        <circle cx="200" cy="308" r="2" fill={gold} />
        <line x1="228" y1="308" x2="280" y2="308" stroke={gold} strokeWidth="0.5" />
      </g>

      {/* Tagline */}
      <text
        x="200"
        y="335"
        textAnchor="middle"
        fontFamily="'Montserrat', sans-serif"
        fontWeight="200"
        fontSize="9"
        fill={subColor}
        letterSpacing="5"
        opacity="0.7"
      >
        СТУДИЯ НАРАЩИВАНИЯ
      </text>
    </svg>
  );
};

const Index = () => {
  const [activeVariant, setActiveVariant] = useState<"dark" | "light" | "photo">("dark");

  const variants = [
    { id: "dark", label: "Тёмный" },
    { id: "light", label: "Светлый" },
    { id: "photo", label: "AI-версия" },
  ] as const;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0e0610",
        fontFamily: "'Montserrat', sans-serif",
        color: "#e8d5b0",
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "11px", letterSpacing: "4px", opacity: 0.5, color: "#c9a84c" }}>
          ЛОГОТИП · ПЕРВАЯ ВЕРСИЯ
        </div>
        <div style={{ fontSize: "11px", letterSpacing: "3px", opacity: 0.4 }}>
          ПроРесницы
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "80px 48px 60px", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 300,
            letterSpacing: "8px",
            color: "#c9a84c",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          ЛОГОТИП
        </h1>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "18px",
            opacity: 0.5,
            letterSpacing: "3px",
            marginTop: "12px",
          }}
        >
          ПроРесницы · студия наращивания
        </p>
      </section>

      {/* Variant selector */}
      <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "60px" }}>
        {variants.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveVariant(v.id)}
            style={{
              padding: "10px 28px",
              fontSize: "10px",
              letterSpacing: "3px",
              border: `1px solid ${activeVariant === v.id ? "#c9a84c" : "rgba(201,168,76,0.2)"}`,
              background: activeVariant === v.id ? "rgba(201,168,76,0.1)" : "transparent",
              color: activeVariant === v.id ? "#c9a84c" : "rgba(201,168,76,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {v.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Logo display */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "80px" }}>
        <div
          style={{
            position: "relative",
            animation: "fadeIn 0.5s ease",
          }}
        >
          {activeVariant === "dark" && (
            <div
              style={{
                boxShadow: "0 40px 120px rgba(0,0,0,0.8), 0 0 60px rgba(201,168,76,0.08)",
                borderRadius: "2px",
              }}
            >
              <LashLogo dark size={420} />
            </div>
          )}
          {activeVariant === "light" && (
            <div
              style={{
                boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.05)",
                borderRadius: "2px",
              }}
            >
              <LashLogo dark={false} size={420} />
            </div>
          )}
          {activeVariant === "photo" && (
            <div
              style={{
                width: "420px",
                height: "420px",
                boxShadow: "0 40px 120px rgba(0,0,0,0.8)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <img src={LOGO_IMG} alt="ПроРесницы логотип" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
        </div>
      </div>

      {/* Mockup row */}
      <section style={{ padding: "0 48px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            marginBottom: "60px",
          }}
        >
          {/* Business card mockup */}
          <div
            style={{
              background: "#12080e",
              border: "1px solid rgba(201,168,76,0.1)",
              padding: "40px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ opacity: 0.4, fontSize: "9px", letterSpacing: "3px", color: "#c9a84c" }}>
              ВИЗИТКА
            </div>
            <div
              style={{
                width: "180px",
                height: "100px",
                background: "#0a0508",
                border: "1px solid rgba(201,168,76,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2px",
              }}
            >
              <LashLogo dark size={72} />
            </div>
          </div>

          {/* Sign mockup */}
          <div
            style={{
              background: "#12080e",
              border: "1px solid rgba(201,168,76,0.1)",
              padding: "40px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ opacity: 0.4, fontSize: "9px", letterSpacing: "3px", color: "#c9a84c" }}>
              ВЫВЕСКА
            </div>
            <div
              style={{
                width: "180px",
                height: "100px",
                background: "#fdf8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2px",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <LashLogo dark={false} size={72} />
            </div>
          </div>

          {/* Package mockup */}
          <div
            style={{
              background: "#12080e",
              border: "1px solid rgba(201,168,76,0.1)",
              padding: "40px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ opacity: 0.4, fontSize: "9px", letterSpacing: "3px", color: "#c9a84c" }}>
              УПАКОВКА
            </div>
            <div
              style={{
                width: "100px",
                height: "100px",
                background: "#0a0508",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2px",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <LashLogo dark size={80} />
            </div>
          </div>
        </div>

        {/* Color palette */}
        <div
          style={{
            border: "1px solid rgba(201,168,76,0.1)",
            padding: "40px",
            display: "flex",
            gap: "40px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ opacity: 0.4, fontSize: "9px", letterSpacing: "3px", color: "#c9a84c", minWidth: "80px" }}>
            ПАЛИТРА
          </div>
          {[
            { color: "#12080e", label: "Бархат", hex: "#12080e" },
            { color: "#c9a84c", label: "Золото", hex: "#c9a84c" },
            { color: "#e8c96a", label: "Шампань", hex: "#e8c96a" },
            { color: "#fdf8f0", label: "Крем", hex: "#fdf8f0" },
            { color: "#8a5c1a", label: "Бронза", hex: "#8a5c1a" },
          ].map((c) => (
            <div key={c.hex} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: c.color,
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "2px",
                }}
              />
              <div>
                <div style={{ fontSize: "11px", color: "#e8d5b0", letterSpacing: "1px" }}>{c.label}</div>
                <div style={{ fontSize: "9px", opacity: 0.4, letterSpacing: "1px", marginTop: "2px" }}>{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(201,168,76,0.1)",
          padding: "32px 48px",
          textAlign: "center",
          fontSize: "9px",
          letterSpacing: "4px",
          opacity: 0.3,
          color: "#c9a84c",
        }}
      >
        ПРОРЕСНИЦЫ · СТУДИЯ НАРАЩИВАНИЯ РЕСНИЦ
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Index;
