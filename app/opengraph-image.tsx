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
          backgroundColor: "#0d0a06",
          backgroundImage:
            "radial-gradient(120% 120% at 50% 0%, #1c160d 0%, #0d0a06 60%)",
          color: "#ece4d6",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 48,
            border: "1px solid #332b1f",
          }}
        />
        <div
          style={{
            fontSize: 22,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#c2a06a",
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
            backgroundColor: "#c2a06a",
          }}
        />
        <div
          style={{
            marginTop: 30,
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a89a86",
          }}
        >
          {`${site.city} · India`}
        </div>
      </div>
    ),
    size,
  );
}
