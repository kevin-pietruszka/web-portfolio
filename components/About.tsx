import { about } from "@/lib/constants";
import Education from "./Education";
import Experience from "./Experience";
import SectionBreak from "./util/SectionBreak";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-8 pb-8">
      <SectionBreak header="About" />
      <div className="lg:flex lg:justify-between lg:gap-16">
        <div className="pb-8 lg:pb-0 lg:w-1/2 lg:sticky lg:top-32 lg:self-start">
          {about.map((paragraph, index, arr) => {
            return (
              <p key={index} className={index !== arr.length - 1 ? "mb-4" : ""}> {paragraph} </p>
            );
          })}
        </div>
        <div className="lg:w-1/2">
          <Education />
          <Experience />
        </div>
      </div>
    </section>
  );
}
