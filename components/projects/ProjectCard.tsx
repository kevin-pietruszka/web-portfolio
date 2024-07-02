export default function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-secondary rounded p-4 ">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-secondary-foreground">{description}</p>
    </div>
  );
}
