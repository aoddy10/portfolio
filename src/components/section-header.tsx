import React from "react";

type SectionHeaderProps = {
  children: React.ReactNode;
};

function SectionHeader({ children }: SectionHeaderProps) {
  return <h2 className=" font-medium text-3xl capitalize mb-8">{children}</h2>;
}

export default SectionHeader;
