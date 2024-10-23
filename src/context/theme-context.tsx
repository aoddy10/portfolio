"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Theme } from "@/lib/types";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    // if there has theme data in localStorage, set theme as it is
    // check if user has set the on their os as dark theme, set theme to dark theme
    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      // keep theme in local storage
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      // keep theme in local storage
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// handle null for context and thrown an error when use context out of provider
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }

  return context;
};

export default ThemeContextProvider;
