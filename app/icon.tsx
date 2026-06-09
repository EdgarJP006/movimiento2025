import { ImageResponse } from "next/og";
import { movementLogoUrl } from "@/components/BrandLogo";

export const size = {
  width: 32,
  height: 32
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <img
          alt="Movimiento Universitario 2025"
          src={movementLogoUrl}
          style={{
            height: 30,
            objectFit: "contain",
            width: 30
          }}
        />
      </div>
    ),
    size
  );
}
