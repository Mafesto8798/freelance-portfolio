import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-linear-to-b dark:from-indigo-950 dark:via-indigo-900 dark:to-stone-900 from-blue-400 via-indigo-300 to-orange-300 font-sans `}
    >
      <main className="flex min-h-screen w-full lg:max-w-3/4 flex-col items-center justify-between py-24 lg:py-24 px-8 lg:px-8   sm:items-start">
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
