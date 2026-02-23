import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Marcelle - Agent IA EHPAD";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF7F2",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial sauge glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(91,140,111,0.08) 0%, rgba(91,140,111,0.03) 40%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top decorative line */}
        <div
          style={{
            width: 60,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #5B8C6F, transparent)",
            marginBottom: 40,
            display: "flex",
          }}
        />

        {/* Marcelle title */}
        <div
          style={{
            fontSize: 80,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            color: "#2A2A35",
            letterSpacing: 6,
            lineHeight: 1,
            display: "flex",
          }}
        >
          Marcelle
        </div>

        {/* Decorative divider */}
        <div
          style={{
            width: 120,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #5B8C6F80, transparent)",
            marginTop: 32,
            marginBottom: 32,
            display: "flex",
          }}
        />

        {/* Agent IA EHPAD badge */}
        <div
          style={{
            fontSize: 20,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
            color: "#5B8C6F",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginTop: 16,
            marginBottom: 8,
            display: "flex",
          }}
        >
          Agent IA EHPAD
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            color: "#555566",
            letterSpacing: 2,
            display: "flex",
          }}
        >
          {
            "L\u2019agent IA EHPAD qui prend soin de vos \u00e9quipes"
          }
        </div>

        {/* 3 pillars */}
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
          }}
        >
          {["Transmissions", "Formation", "Familles"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 999,
                background: "#5B8C6F",
                color: "#FFFFFF",
                fontSize: 16,
                fontFamily: "system-ui, sans-serif",
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            width: 60,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #5B8C6F, transparent)",
            marginTop: 40,
            display: "flex",
          }}
        />

        {/* Domain text */}
        <div
          style={{
            fontSize: 16,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 400,
            color: "#5B8C6F",
            letterSpacing: 2,
            marginTop: 16,
            display: "flex",
          }}
        >
          marcelle.ai
        </div>

        {/* Corner accents */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 30,
            height: 30,
            borderTop: "2px solid rgba(91,140,111,0.3)",
            borderLeft: "2px solid rgba(91,140,111,0.3)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 30,
            height: 30,
            borderTop: "2px solid rgba(91,140,111,0.3)",
            borderRight: "2px solid rgba(91,140,111,0.3)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            width: 30,
            height: 30,
            borderBottom: "2px solid rgba(91,140,111,0.3)",
            borderLeft: "2px solid rgba(91,140,111,0.3)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 30,
            height: 30,
            borderBottom: "2px solid rgba(91,140,111,0.3)",
            borderRight: "2px solid rgba(91,140,111,0.3)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
