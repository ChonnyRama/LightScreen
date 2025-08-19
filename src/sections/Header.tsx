"use client";
import React from "react";
import ContactTrigger from "@/components/contact/ContactTrigger";

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
    <div className="fixed top-3 w-full z-10 px-4">
      <div className="relative md:max-w-5xl mx-auto md:pr-44">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur mx-auto w-fit">
          <a
            href="#home"
            className={"nav-item " + (selected === "home" ? selectedStyle : "")}
            onClick={() => handleClick("home")}
          >
            Home
          </a>
          <a
            href="#services"
            className={
              "nav-item " + (selected === "services" ? selectedStyle : "")
            }
            onClick={() => handleClick("services")}
          >
            Services
          </a>
          <a
            href="#case-study"
            className={
              "nav-item " + (selected === "projects" ? selectedStyle : "")
            }
            onClick={() => handleClick("projects")}
          >
            Projects
          </a>
          <a
            href="#about"
            className={
              "nav-item " + (selected === "about" ? selectedStyle : "")
            }
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

        <ContactTrigger className="absolute right-0 top-1/2 -translate-y-1/2 ml-4 inline-flex items-center justify-start px-6 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-sky-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

          <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Book a Call
          </span>
        </ContactTrigger>
      </div>
    </div>
  );
};
