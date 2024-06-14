import Link from "next/link.js";
import React from "react";
import { MovingBorderBtn } from "./ui/moving-border";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex lg:flex-row gap-14 flex-col-reverse justify-between items-center">
      <div className="space-y-10 text-center lg:text-left">
        <h2 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 🖐️
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Théo."}
          </span>
        </h2>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "I'm a web developer from Paris, France. I'm currently working as a freelance web developer. I'm passionate about front-end development and design. I love to create beautiful and functional websites."
          }
        </p>
        <Link
          href={"mailto:theo.couvelard.0212@gmail.com"}
          className="inline-block"
        >
          <div>
            <h3 className="text-3xl font-bold hover:text-green-500 transition-all">
              Contact Me 📫
            </h3>
            <div className="w-40 h-2 bg-green-500 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
          </div>
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute -z-10 top-[40%] right-1/2"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className=" p-3 font-semibold">
            <p>              
            💼 Available for work
            </p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
