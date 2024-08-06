import {Link, Experience, Project, FeaturedProject} from "@/lib/types";
import experiences_json from "@/database/experiences.json";
import projects_json from "@/database/projects.json";
import featured_json from "@/database/featured_projects.json";

export const links: Link[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export const experiences: Experience[] = experiences_json;

export const projects: Project[] = projects_json; 

export const featured_projects: FeaturedProject[] = featured_json;
