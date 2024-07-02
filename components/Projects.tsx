import SectionBreak from "./util/SectionBreak";
import ProjectCard from "./projects/ProjectCard";
import { projects } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto h-full p-8">
      <SectionBreak header="Projects"></SectionBreak>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
    </section>
  );
}
