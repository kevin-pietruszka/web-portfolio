export default function ProjectCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="bg-secondary rounded p-4 ">
      <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
      <p className="text-secondary-foreground">{description}</p>
    </div>
  );
}
