import SectionBreak from "./util/SectionBreak";
import { featured_projects } from "@/lib/constants";
import FeaturedProjectCard from "./projects/FeaturedProjectCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-8 pb-8">
      <SectionBreak header="Projects"></SectionBreak>
      <div className="pb-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {featured_projects.map((project, index) => (
          <FeaturedProjectCard key={index} project={project} />
        ))}
      </div>
      <Link href={"/projects"} className="relative group hover:text-lavender transition-colors duration-200">
        <span className="inline-flex items-center gap-2">
          <p> {"View All Projects"} </p>
          <FaArrowRight />
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lavender scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </Link>
    </section>
  );
}
