import About from "@/components/about";

import Contact from "@/components/contact";
import Divider from "@/components/divider";
import Experience from "@/components/experience";
import Hero from "@/components/hero";

import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="  bg-[#27437f]">
      <div className="flex flex-col items-center bg-gradient-radial from-transparent to-black/50">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
