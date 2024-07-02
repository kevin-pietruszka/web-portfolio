import Languages from "@/components/skills/Languages";
import SectionBreak from "@/components/util/SectionBreak";
import Frameworks from "./skills/Frameworks";
import Technologies from "./skills/Technologies";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto p-8">
      <SectionBreak header="Skills" />
      <Languages />
      <Frameworks />
      <Technologies />
    </section>
  );
}
