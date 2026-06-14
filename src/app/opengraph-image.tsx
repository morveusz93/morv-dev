import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Morv | Strony internetowe dla firm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "hsl(222, 47%, 6%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(184,77,255,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,179,255,0.14) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* logo */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "0.2em",
            background: "linear-gradient(90deg, #ff1a8c, #b84dff, #00b3ff)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          MORV
        </div>

        {/* divider */}
        <div
          style={{
            width: "120px",
            height: "2px",
            margin: "20px 0",
            background: "linear-gradient(90deg, #ff1a8c, #b84dff, #00b3ff)",
            borderRadius: "2px",
          }}
        />

        {/* tagline */}
        <div
          style={{
            fontSize: 28,
            color: "hsl(215, 20%, 65%)",
            letterSpacing: "0.02em",
          }}
        >
          Strony internetowe · Backend · Automatyzacje
        </div>

        {/* url */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 18,
            color: "hsl(215, 20%, 40%)",
            letterSpacing: "0.06em",
          }}
        >
          morv.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
