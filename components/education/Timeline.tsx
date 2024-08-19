import { education } from "@/lib/constants";

export default function Timeline() {
  return (
    <div className="xl:mt-8">
      {education.map((edu, index) => {
        return (
          <div key={index} className="max-w-4xl grid grid-cols-1 xl:grid-cols-4 mb-8">
            <div> 
              <h1 className="inline-flex italic leading-snug">
                {edu.startDate + " - " + edu.endDate}
              </h1>
            </div>

            <div className="xl:col-span-3">
              <h1 className="font-bold text-lg leading-tight"> {edu.university + " • " + edu.degree} </h1>
              <ul className="list-disc text-sm list-inside pl-4">
                <li key={0}> {"GPA: " + edu.gpa} </li>
                {edu.bullets.map((bullet, index) => {
                    return <li key={index + 1}> {bullet} </li>
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
