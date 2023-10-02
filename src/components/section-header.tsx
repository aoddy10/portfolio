import React from "react";
import { useScroll } from "framer-motion";

type SectionHeaderProps = {
  children: React.ReactNode;
};

function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className=" font-medium text-3xl capitalize mb-8 text-center">
      {children}
    </h2>
  );
}

export default SectionHeader;
