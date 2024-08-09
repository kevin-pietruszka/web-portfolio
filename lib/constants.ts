import { Link, Experience, Project, FeaturedProject } from "@/lib/types";
import experiences_json from "@/database/experiences.json";
import projects_json from "@/database/projects.json";
import featured_json from "@/database/featured_projects.json";

export const links: Link[] = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
];
export const name: string = "Kevin Pietruszka";
export const title: string = "Software Developer";
export const description: string = `
I am a recent college graduate from Georgia Tech with experience in full stack development and cloud development.
I have a passion for learning new technologies and love the networking aspect of building applications.
`;
  
export const about = `
My journey as a Software Engineer began in High School when I first took a programming class where I learned python and fell in love. Since then, I have graduated from Georgia Tech where I got a Bachelor's and Master's in Computer Science. My coursework covered a wide range of topics such as: Data Structures, Algorithms, Object-Oriented Design, Artificial Intelligence, Machine Learning, Networking, Computer Vision, Security, Graphics, Databases, Data Visualization & Analytics, Distributed Systems, and High Performance Computing. I have also done two internships where I tried to expand my knowledge in the field and gain professional experience. They can be seen in this section.
`;

export const experiences: Experience[] = experiences_json;

export const projects: Project[] = projects_json;

export const featured_projects: FeaturedProject[] = featured_json;
