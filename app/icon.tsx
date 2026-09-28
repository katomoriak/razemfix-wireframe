import { ImageResponse } from "next/og";

// Tamanho padrão de favicon
export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <img
          src="https://www.razemfix.com.br/simbolo_favicon.png"
          alt="Razemfix"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
