import About from "@/components/about";
import CarouselPage from "@/components/carousel";
import Contact from "@/components/contact";
import Divider from "@/components/divider";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className=" flex flex-col items-center px4">
      {/* <CarouselPage /> */}

      <Hero />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
