import "./PhotoPlaceholder.css";

type PhotoPlaceholderProps = {
  label?: string;
};

export default function PhotoPlaceholder({
  label = "Photo placeholder",
}: PhotoPlaceholderProps) {
  return <div className="photo-placeholder" role="img" aria-label={label} />;
}
