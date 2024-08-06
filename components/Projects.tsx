import SectionBreak from "./util/SectionBreak";
import { featured_projects } from "@/lib/constants";
import FeaturedProjectCard from "./projects/FeaturedProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto h-full p-8">
      <SectionBreak header="Projects"></SectionBreak>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {featured_projects.map((project, index) => (
          <FeaturedProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
