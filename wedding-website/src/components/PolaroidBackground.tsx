import type { CSSProperties } from "react";
import { assetPath } from "@/lib/paths";

type PolaroidPhoto = Readonly<{
  src: string;
  caption?: string;
  rotation: number;
  position: Readonly<{
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  }>;
  size: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "xxxxl" | "xxxxxl";
  layer?: number;
  opacity?: number;
  blur?: number;
  offsetX?: string;
  offsetY?: string;
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
}>;

type PolaroidBackgroundProps = {
  photos: ReadonlyArray<PolaroidPhoto>;
  density?: "subtle" | "hero";
  className?: string;
};

const sizeClasses: Record<PolaroidPhoto["size"], string> = {
  sm: "w-32 sm:w-40",
  md: "w-36 sm:w-48",
  lg: "w-40 sm:w-56",
  xl: "w-44 sm:w-64",
  xxl: "w-52 sm:w-72",
  xxxl: "w-60 sm:w-80",
  xxxxl: "w-64 sm:w-96",
  xxxxxl: "w-72 sm:w-[28rem]",
};

export function PolaroidBackground({
  photos,
  density = "subtle",
  className = "",
}: PolaroidBackgroundProps) {
  if (!photos.length) {
    return null;
  }

  const defaults =
    density === "hero"
      ? { opacity: 1, blur: 0.2 }
      : { opacity: 1, blur: 0.6 };

  return (
    <div className={`polaroid-background ${className}`} aria-hidden="true">
      {photos.map((photo, index) => {
        const appliedOpacity = photo.opacity ?? defaults.opacity;
        const appliedBlur = photo.blur ?? defaults.blur;
        const style: CSSProperties = {
          ...photo.position,
          transform: `translate(${photo.offsetX ?? "0px"}, ${
            photo.offsetY ?? "0px"
          }) rotate(${photo.rotation}deg)`,
          zIndex: photo.layer ?? index + 1,
          opacity: appliedOpacity,
          ["--polaroid-blur" as any]: `${appliedBlur}px`,
        };

        return (
          <figure
            key={`${photo.src}-${index}`}
            className={`polaroid-card ${sizeClasses[photo.size]} ${
              photo.hideOnMobile ? "hidden sm:block" : ""
            } ${photo.hideOnDesktop ? "lg:hidden" : ""}`}
            style={style}
          >
            <div className="polaroid-photo">
              <img
                src={assetPath(photo.src)}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="polaroid-caption">
              {photo.caption ?? ""}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
