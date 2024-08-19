import Timeline from "@/components/education/Timeline";
import SectionBreak from "@/components/util/SectionBreak";

export default function Education() {
  return (
    <section id="education" className="container mx-auto p-8">
      <SectionBreak header="Education" />
      <div className="flex lg:justify-center">
        <Timeline /> 
      </div>
    </section>
  );
}
