import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-linear-to-b from-blue-400 via-indigo-300 to-orange-300 font-sans dark:bg-black`}
    >
      <main className="flex min-h-screen max-w-7xl flex-col items-center justify-between py-24 lg:py-32 px-8 lg:px-8  dark:bg-black sm:items-start">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
