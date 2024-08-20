import { education } from "@/lib/constants";

export default function Timeline() {
  return (
    <>
      {education.map((edu, index) => {
        return (
            <div key={index} className="mb-8">
              <h1 className="font-bold text-lg"> {edu.university + " • " + edu.degree} </h1>
              <h2 className="italic"> {edu.startDate + " - " + edu.endDate} </h2>
              <ul className="list-disc list-inside text-sm pl-4">
                <li key={0}> {"GPA: " + edu.gpa} </li>
                {edu.bullets.map((bullet, index) => {
                    return <li key={index + 1}> {bullet} </li>
                })}
              </ul>
            </div>
        );
      })}
    </>
  );
}
