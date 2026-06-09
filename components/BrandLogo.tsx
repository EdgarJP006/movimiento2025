export const movementLogoUrl =
  "https://ykcqaxtchjgnyxfrubxd.supabase.co/storage/v1/object/public/media/gallery/5e202227-e5f7-4181-9b7a-efa31b5ae134/7053ba51-1286-48c7-a988-3ec62c08dd85.png";

export function BrandLogo({
  className = "h-12 w-12"
}: {
  className?: string;
}) {
  return (
    <img
      src={movementLogoUrl}
      alt="Logo del Movimiento Universitario 2025"
      className={`${className} object-contain`}
    />
  );
}
