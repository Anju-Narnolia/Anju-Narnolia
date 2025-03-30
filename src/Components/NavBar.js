import React, { useState } from "react";
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  }

  return (
    <div className="sticky top-0 left-0 right-0 z-20 w-full bg-black">
      <div className="flex justify-between items-center px-5 py-4 text-white">
        <div className="flex gap-1 items-center text-4xl font-playfair uppercase font-bold">
          <p className="text-white">Anju </p>
          <p className="text-yellow-500 "> Narnolia</p>
        </div>
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-5 font-bold items-center">
            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-400 cursor-pointer"
            >
              About Me
            </li>
            <li
              onClick={() => scrollToSection("expertise")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Expertise
            </li>
            <li
              onClick={() => scrollToSection("project")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Project
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Contact
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1bHsTiyddJtZn5a3E2OQ8FykauhJRje69/view"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300"
              >
                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download Resume</span>
                </button>
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-4xl">
            &#8801;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-950 text-white p-4">
          <ul className="flex flex-col gap-4 font-bold">
            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-400 cursor-pointer"
            >
              About Me
            </li>
            <li
              onClick={() => scrollToSection("skill")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Skill
            </li>
            <li
              onClick={() => scrollToSection("expertise")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Expertise
            </li>
            <li
              onClick={() => scrollToSection("project")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Project
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-400 cursor-pointer"
            >
              Contact Me
            </li>
            <li className="pt-2">
              <a
                href="https://drive.google.com/file/d/1pV0g9g6wY0pzIDyNqlzIsruASsaYVNQG/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300"
              >
                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download Resume</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
