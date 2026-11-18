import type { ReactNode } from "react";
import Card, { type BrandColor } from "./Card";
import PhotoPlaceholder from "./PhotoPlaceholder";
import "./PhotoCardRow.css";

type PhotoCardRowProps = {
  title?: string;
  tone?: BrandColor;
  photoSide?: "left" | "right";
  children: ReactNode;
};

/**
 * A photo next to a Card. The photo always comes first in the markup, so on
 * mobile it stacks on top; on wider screens `photoSide` picks its side.
 */
export default function PhotoCardRow({
  title,
  tone,
  photoSide = "left",
  children,
}: PhotoCardRowProps) {
  return (
    <div className={`photo-card-row photo-card-row-photo-${photoSide}`}>
      <div className="photo-card-row-photo">
        <PhotoPlaceholder />
      </div>
      <Card title={title} tone={tone}>
        {children}
      </Card>
    </div>
  );
}
