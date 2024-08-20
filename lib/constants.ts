import { Link, Experience, Project, FeaturedProject, SkillCategory, Education } from "@/lib/types";
import experiences_json from "@/database/experiences.json";
import projects_json from "@/database/projects.json";
import featured_json from "@/database/featured_projects.json";
import skills_json from "@/database/skills.json";
import education_json from "@/database/education.json"
import about_json from "@/database/about.json"

export const links: Link[] = [
  { name: "About", href: "/#about" },
  { name: "Education", href: "/#education" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
];
export const name: string = "Kevin Pietruszka";
export const logo: string = "Kevin";
export const main_image: string = "/img/home-me.png";
export const email: string = "kevin.pietruszka@proton.me";
export const github: string = "https://github.com/kevin-pietruszka";
export const linkedin: string = "https://www.linkedin.com/in/kevin-pietruszka/";
export const title: string = "Software Developer";
export const description: string = `
I am a recent college graduate from Georgia Tech with experience in full stack development and cloud development.
I have a passion for learning new technologies and love the networking aspect of building applications.
`;

export const about: string[] = about_json;

export const experiences: Experience[] = experiences_json;

export const projects: Project[] = projects_json;

export const featured_projects: FeaturedProject[] = featured_json;

export const education: Education[] = education_json;

export const skills: SkillCategory[] = skills_json;
