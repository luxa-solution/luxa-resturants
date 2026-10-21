import { ImageResponse } from "next/og";
export const alt = "Luxa Web Studio. Websites for restaurants.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#100b08",
        color: "#f7eddf",
        padding: "52px 64px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 42, fontWeight: 700, letterSpacing: -3 }}>
          luxa<span style={{ color: "#ff8a2a" }}>.</span>
        </span>
        <span style={{ fontSize: 17, color: "#cbb9aa" }}>
          WEBSITES FOR RESTAURANTS
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          letterSpacing: -3,
          lineHeight: 1.08,
        }}
      >
        <span>Your menu. Your restaurant.</span>
        <span
          style={{ color: "#ff8a2a", fontFamily: "serif", fontStyle: "italic" }}
        >
          One clear website.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #635044",
          paddingTop: 24,
          fontSize: 18,
          color: "#cbb9aa",
        }}
      >
        <span>Ilorin. Lagos. Abuja.</span>
        <span>eat.luxasolution.com</span>
      </div>
    </div>,
    size,
  );
}
