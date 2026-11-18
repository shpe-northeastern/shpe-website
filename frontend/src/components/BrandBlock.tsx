import "./BrandBlock.css";

/**
 * Logo + chapter name block. Self-contained so it can move into App.tsx
 * (e.g. inside a <footer>) if it becomes site-wide.
 */
export default function BrandBlock() {
  return (
    <div className="brand-block">
      <div
        className="brand-block-logo"
        role="img"
        aria-label="SHPE Northeastern logo placeholder"
      />
      <div className="brand-block-text">
        <p className="brand-block-name">SHPE at Northeastern</p>
        <p className="caption">Hispanic leadership in STEM</p>
      </div>
    </div>
  );
}
