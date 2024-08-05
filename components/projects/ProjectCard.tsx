import { Project } from "@/lib/types";

export default function ProjectCard({
  project
}: {
  project: Project;
}) {
  return (
    <div className="bg-secondary rounded p-4 ">
      <h3 className="text-xl font-semibold text-primary mb-2">{project.name}</h3>
      <p className="text-secondary-foreground">{project.description}</p>
    </div>
  );
}
