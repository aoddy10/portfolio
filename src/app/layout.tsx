import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${fontSans.className} text-[var(--secondary-black)] bg-[var(--primary-color)] relative`}
      >
        <div className=" bg-gradient-radial from-transparent to-black/60">
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              {/* <Footer /> */}
              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </div>
      </body>
    </html>
  );
}
