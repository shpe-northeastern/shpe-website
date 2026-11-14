import "./SectionHeader.css";

type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return <h2 className="section-header">{title}</h2>;
}
