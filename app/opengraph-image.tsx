import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} - ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          backgroundColor: "#faf6f0",
          backgroundImage:
            "radial-gradient(120% 120% at 50% 0%, #ffffff 0%, #faf6f0 60%)",
          color: "#2b1a1d",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 48,
            border: "1px solid #e6dccf",
          }}
        />
        <div
          style={{
            fontSize: 22,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#7a2233",
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 104,
            fontWeight: 600,
            letterSpacing: -1,
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 38,
            width: 120,
            height: 1,
            backgroundColor: "#7a2233",
          }}
        />
        <div
          style={{
            marginTop: 30,
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8a7a72",
          }}
        >
          {`${site.city} · India`}
        </div>
      </div>
    ),
    size,
  );
}
