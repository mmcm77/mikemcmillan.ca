import { ImageResponse } from "next/og";

export const alt = "Mike McMillan — product leader and hands-on builder";
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
          alignItems: "stretch",
          background: "#f1eee7",
          color: "#191815",
          display: "flex",
          height: "100%",
          padding: "58px 64px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #191815",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "44px 48px 42px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 24,
              justifyContent: "space-between",
              letterSpacing: "0.02em",
            }}
          >
            <span>Mike McMillan</span>
            <span style={{ color: "#735b2f" }}>Toronto, Canada</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 960,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Georgia, serif",
                fontSize: 72,
                letterSpacing: "-0.045em",
                lineHeight: 1.02,
              }}
            >
              Product leader &amp;
              <br />
              hands-on builder.
            </div>
            <div
              style={{
                borderTop: "2px solid #c8c1b2",
                display: "flex",
                fontSize: 25,
                lineHeight: 1.4,
                marginTop: 34,
                paddingTop: 23,
              }}
            >
              Commerce · Financial infrastructure · Developer platforms · Applied AI
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
