import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionNameType } from "../types";

export const useSectionInView = (
  sectionName: SectionNameType,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold, // if the section display 50%, is true
  }); // use this hook to detect elements in the view
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // set active section when the section display in the view
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
