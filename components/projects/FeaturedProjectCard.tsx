import { FeaturedProject } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  project: FeaturedProject;
}

const FeaturedProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-card text-card-foreground shadow-lg overflow-hidden rounded max-w-lg w-full h-full flex flex-col">
      <Image
        src={project.img}
        alt={project.name}
        width={512}
        height={256}
        className={"object-cover w-full h-64"}
      />
      <div className="p-6 flex-grow">
          <h2 className="text-xl font-bold text-primary mb-2"> {project.name} </h2>
          <p className="leading-tight text-sm mb-2"> {project.description} </p>
      </div>
      <div className="relative">
        <div className="absolute h-px bg-foreground w-full"> </div>
        <div className="p-6 flex bg-secondary justify-center"> 
            <Link href={project.github_link} target="_blank">
              <FaGithub />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
