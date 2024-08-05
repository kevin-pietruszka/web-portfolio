import { experiences } from "@/lib/constants";
import Tag from "@/components/experience/Tag";
import Link from "next/link";

export default function Timeline() {
  return (
    <div>
      {experiences.map((experience, index) => {
        return (
          <div
            className="grid grid-cols-1 xl:grid-cols-4 mb-8 rounded hover:bg-secondary hover:text-secondary-foreground"
            key={index}
          >
            <div>
              <h1 className="inline-flex text-xs leading-snug">
                {experience.begin + " - " + experience.end}
              </h1>
            </div>

            <div className="xl:col-span-3">
              <Link
                href={experience.company_link}
                target="_blank"
                className="inline-flex text-sm font-bold leading-tight hover:text-primary"
              >
                {experience.title + " • " + experience.company}
              </Link>
              <p className="text-xs leading-normal">{experience.description}</p>
              <div className="flex flex-row shrink-0 grow-0 flex-wrap gap-2 mt-2">
                {experience.tags.map((tag, index) => {
                  return <Tag key={index} skill={tag} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
