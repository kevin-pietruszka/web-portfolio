import Header from "@/components/Header";
import Home from "@/components/Home";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import About from "@/components/About";

export default function Site() {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
