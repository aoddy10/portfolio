import React from "react";

type SectionHeaderProps = {
  children: React.ReactNode;
};

function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className=" font-bold text-3xl capitalize mb-8 text-center t-gradient">
      {children}
    </h2>
  );
}

export default SectionHeader;
