import { links } from "./data";

export type SectionNameType = (typeof links)[number]["name"];

export type Theme = "light" | "dark";
