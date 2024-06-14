import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Navbar = () => {
  const social = [
    {
      link: "https://www.linkedin.com/in/th%C3%A9o-couvelard-4089111b5/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/Theo02-12",
      label: "Github",
      Icon: SiGithub,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Théo 👨‍💻
      </h1>
      <div className="flex items-center gap-5">
        {social.map((item, index) => {
          const Icon = item.Icon;
          return (
            <Link key={index} href={item.link} aria-label={item.label}>
              <Icon className="w-5 h-5 hover:scale-125 translate-x-0 transition-all"/>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
