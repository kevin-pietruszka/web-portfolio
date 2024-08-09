import Link from "next/link";
import { FaArrowLeft, FaGithub } from "react-icons/fa6";
import { projects } from "@/lib/constants";
import Tags from "@/components/util/Tags";

export default function Projects() {
  return (
    <section className="container mx-auto p-8">
      <Link href={"/#projects"} className="relative group hover:text-lavender transition-colors duration-200">
        <span className="inline-flex gap-1 items-center">
          <FaArrowLeft />
          {"Back"}
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lavender scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
      </Link>

      <h1 className="text-4xl tracking-tight"> {"All Projects"} </h1>

      <table className="border-collapse w-full mt-4 ">
        <thead className="text-center sticky top-0 z-10 border-b border-overlay0 text-sm text-secondary-foreground bg-surface0">
          <tr>
            <th className="p-2 font-semibold">
              Name
            </th>
            <th className="p-2 font-semibold">
              Description
            </th>
            <th className="hidden lg:table-cell p-2 font-semibold">
              Technologies
            </th>
            <th className="hidden md:table-cell p-2 font-semibold">
              Repo
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return (
              <tr key={index} className="align-top border-b border-overlay0 last:border-none even:bg-surface0/40">
                <td className="p-2"> {project.name} </td>
                <td className="p-2"> {project.description} </td>
                <td className="hidden lg:table-cell p-2"> <Tags collection={project.technologies} /> </td>
                <td className="hidden md:flex p-2 justify-center">
                  {project.is_public ?
                    <Link href={project.github_link} target="_blank"> <FaGithub /> </Link> : ""
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
