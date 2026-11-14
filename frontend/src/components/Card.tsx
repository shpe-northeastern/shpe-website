import type { ReactNode } from "react";
import "./Card.css";

export type BrandColor =
  "navy" | "powder-blue" | "bright-blue" | "orange" | "red" | "grey";

type CardProps = {
  title?: string;
  tone?: BrandColor;
  align?: "left" | "center";
  children: ReactNode;
};

export default function Card({
  title,
  tone = "navy",
  align = "left",
  children,
}: CardProps) {
  return (
    <div
      className={`card card-align-${align}`}
      style={{ borderColor: `var(--${tone})` }}
    >
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
}
