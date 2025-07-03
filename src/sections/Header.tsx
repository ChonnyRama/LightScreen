"use client";
import React from "react";

export const Header = () => {
  const [selected, setSelected] = React.useState("home");

  const selectedStyle =
    "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900";

  const handleClick = (section: string) => {
    setSelected(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
        <a
          href="#home"
          className={"nav-item " + (selected === "home" ? selectedStyle : "")}
          onClick={() => handleClick("home")}
        >
          Home
        </a>
        <a
          href="#projects"
          className={
            "nav-item " + (selected === "projects" ? selectedStyle : "")
          }
          onClick={() => handleClick("projects")}
        >
          Projects
        </a>
        <a
          href="#about"
          className={"nav-item " + (selected === "about" ? selectedStyle : "")}
          onClick={() => handleClick("about")}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={() => handleClick("contact")}
          className={
            "nav-item " + (selected === "contact" ? selectedStyle : "")
          }
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
