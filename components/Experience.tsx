import Timeline from "@/components/experience/Timeline";
import Background from "@/components/experience/Background";

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto h-full p-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-4xl my-8">
          {"Experience"}
        </h1>
        <div className="h-px bg-foreground w-full"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Background />
        <Timeline /> 
      </div>
    </section>
  );
}
