import Header from "@/components/Header";
import Home from "@/components/Home";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Site() {
  return (
    <main>
      <Header />
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
