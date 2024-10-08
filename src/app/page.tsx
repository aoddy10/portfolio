"use client";

import About from "@/components/about";

import Contact from "@/components/contact";
import Divider from "@/components/divider";

import Hero from "@/components/hero";

import Skills from "@/components/skills";
import { useThemeContext } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks/useSectionInView";

export default function Home() {
    const { ref } = useSectionInView("Home", 0.2);
    const { theme } = useThemeContext();

    return (
        <main
            id="home"
            ref={ref}
            className="flex flex-col items-center bg-gradient-radial from-transparent to-black/50 lg:pt-10"
        >
            <Hero />
            <Divider />
            <Skills />
            <About />
            <Contact />
        </main>
    );
}
