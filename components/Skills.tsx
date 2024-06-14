"use client"
import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import { SiDocker, SiGit, SiGithubactions, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from "react-icons/si";

export default function Skills() {
    const skills = [
        {
            text: 'React',
            Icon: SiReact
        },
        {
            text: 'Next.js',
            Icon: SiNextdotjs
        },
        {
            text: 'Tailwind CSS',
            Icon: SiTailwindcss
        },
        {
            text: 'PostgreSQL',
            Icon: SiPostgresql
        },
        {
            text: 'Git',
            Icon: SiGit
        },
        {
            text: 'Node.js',
            Icon: SiNodedotjs
        },
        {
            text: 'JavaScript',
            Icon: SiJavascript
        },
        {
            text: 'Docker',
            Icon: SiDocker
        },
        {
            text: 'Github Actions',
            Icon: SiGithubactions
        },
    ]
  return (
    <div className="max-w-5xl mx-auto">
      <Title
        text="Skills 🔪"
        classname="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills}/>
    </div>
  );
}
