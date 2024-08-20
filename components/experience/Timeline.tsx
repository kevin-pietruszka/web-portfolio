import { experiences } from "@/lib/constants";
import Tag from "@/components/util/Tag";
import Link from "next/link";

export default function Timeline() {
  return (
    <>
      {experiences.map((experience, index, array) => {
        return (
            <div key={index} className={index !== array.length - 1 ? "mb-8" : "0"}>
              <Link
                href={experience.company_link}
                target="_blank"
                className="text-lg font-bold hover:text-lavender"
              >
                {experience.title + " • " + experience.company}
              </Link>
              <h2 className="italic mb-2"> {experience.begin + " - " + experience.end} </h2>
              <p className="text-sm mb-2"> {experience.description} </p>
              <div className="flex flex-row shrink-0 grow-0 flex-wrap gap-2 my-2">
                {experience.tags.map((tag, index) => {
                  return <Tag key={index} word={tag} />;
                })}
              </div>
          </div>
        );
      })}
    </>
  );
}
