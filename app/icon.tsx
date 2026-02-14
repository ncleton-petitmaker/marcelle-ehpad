import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "#0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 38,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 600,
            color: "#C8A97E",
            lineHeight: 1,
            marginTop: -2,
          }}
        >
          M
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
