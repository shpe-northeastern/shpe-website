import "./SectionHeader.css";

type SectionHeaderProps = {
  title: string;
  id?: string;
};

export default function SectionHeader({ title, id }: SectionHeaderProps) {
  return (
    <h2 className="section-header" id={id}>
      {title}
    </h2>
  );
}
