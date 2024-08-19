import Timeline from "@/components/experience/Timeline";
import Background from "@/components/experience/Background";
import SectionBreak from "@/components/util/SectionBreak";

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto p-8">
      <SectionBreak header="Experience" />
      <div className="flex lg:justify-center">
        <Timeline /> 
      </div>
    </section>
  );
}
