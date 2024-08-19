import SectionBreak from "@/components/util/SectionBreak";
import { skills } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto p-8">
      <SectionBreak header="Skills" />
      {skills.map((category, index) => {
          return (
            <div key={index} className="mb-4">
              <h1 className="text-2xl font-semibold"> {category.category} </h1>
              <div className="flex flex-row shrink-0 grow-0 flex-wrap gap-2 mt-2">
                {category.list.map((skill, index, array) => {
                  return (
                    <span key={index}>
                      {skill}
                      {index < array.length - 1 && " | "}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })
      }
    </section>
  );
}
