import { experiences } from "@/lib/constants";
import Tag from "@/components/util/Tag";
import Link from "next/link";

export default function Timeline() {
  return (
    <div>
      {experiences.map((experience, index) => {
        return (
          <div
            className="max-w-4xl grid grid-cols-1 xl:grid-cols-4"
            key={index}
          >
            <div>
              <h1 className="inline-flex italic leading-snug">
                {experience.begin + " - " + experience.end}
              </h1>
            </div>

            <div className="xl:col-span-3">
              <Link
                href={experience.company_link}
                target="_blank"
                className="inline-flex text-lg font-bold leading-tight hover:text-lavender"
              >
                {experience.title + " • " + experience.company}
              </Link>
              <p className="text-sm leading-normal">{experience.description}</p>
              <div className="flex flex-row shrink-0 grow-0 flex-wrap gap-2 my-2">
                {experience.tags.map((tag, index) => {
                  return <Tag key={index} word={tag} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
