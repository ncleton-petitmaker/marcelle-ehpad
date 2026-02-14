import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Marcelle - L'agent IA pour les hôtels d'exception";
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
          background: "#0A0A0A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial gold glow behind the text */}
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
              "radial-gradient(circle, rgba(200,169,126,0.08) 0%, rgba(200,169,126,0.03) 40%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top decorative line */}
        <div
          style={{
            width: 60,
            height: 1,
            background: "linear-gradient(90deg, transparent, #C8A97E, transparent)",
            marginBottom: 40,
            display: "flex",
          }}
        />

        {/* Marcelle title */}
        <div
          style={{
            fontSize: 80,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 700,
            color: "#C8A97E",
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
            height: 1,
            background: "linear-gradient(90deg, transparent, #C8A97E60, transparent)",
            marginTop: 32,
            marginBottom: 32,
            display: "flex",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.85)",
            letterSpacing: 2,
            display: "flex",
          }}
        >
          {"L'agent IA pour les hôtels d'exception"}
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            width: 60,
            height: 1,
            background: "linear-gradient(90deg, transparent, #C8A97E, transparent)",
            marginTop: 40,
            display: "flex",
          }}
        />

        {/* Subtle corner accents - top left */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 30,
            height: 30,
            borderTop: "1px solid rgba(200,169,126,0.3)",
            borderLeft: "1px solid rgba(200,169,126,0.3)",
            display: "flex",
          }}
        />

        {/* Top right corner */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 30,
            height: 30,
            borderTop: "1px solid rgba(200,169,126,0.3)",
            borderRight: "1px solid rgba(200,169,126,0.3)",
            display: "flex",
          }}
        />

        {/* Bottom left corner */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            width: 30,
            height: 30,
            borderBottom: "1px solid rgba(200,169,126,0.3)",
            borderLeft: "1px solid rgba(200,169,126,0.3)",
            display: "flex",
          }}
        />

        {/* Bottom right corner */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 30,
            height: 30,
            borderBottom: "1px solid rgba(200,169,126,0.3)",
            borderRight: "1px solid rgba(200,169,126,0.3)",
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
