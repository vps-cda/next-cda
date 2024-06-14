import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-[80%] mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-[80%] mx-auto p-5 mt-20">
        <Skills />
      </div>
    </div>
  );
}
