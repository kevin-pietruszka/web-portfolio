import Timeline from "@/components/experience/Timeline";
import Background from "@/components/experience/Background";
import SectionBreak from "@/components/util/SectionBreak";

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto h-full p-8">
      <SectionBreak header="Experience" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Background />
        <Timeline /> 
      </div>
    </section>
  );
}
