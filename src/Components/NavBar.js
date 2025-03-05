import { useState } from "react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="sticky top-0 z-20 w-full bg-blue-950">
            <div className="flex justify-between items-center px-5 py-4 text-white">
                <div className="text-2xl font-bold">
                    <a href="/">{"</>"} Anju Narnolia</a>
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6 font-bold">
                        <p onClick={() => scrollToSection("home")} className="hover:text-gray-400">Home</p>
                        <p onClick={() => scrollToSection("about")} className="hover:text-gray-400">About Me</p>
                        <p href="#" onClick={() => scrollToSection("skill")} className="hover:text-gray-400">Skill</p>
                        <p href="#" onClick={() => scrollToSection("expertise")} className="hover:text-gray-400">Expertise</p>
                        <p href="#" onClick={() => scrollToSection("project")} className="hover:text-gray-400">Project</p>
                        <p href="#" onClick={() => scrollToSection("contact")} className="hover:text-gray-400">Contact Me</p>
                        <a href="https://drive.google.com/file/d/1pV0g9g6wY0pzIDyNqlzIsruASsaYVNQG/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                            <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                </svg>
                                <span>Download Resume</span>
                            </button>
                        </a>
                    </ul>
                </nav>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-4xl">
                        &#8801;
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-blue-950 text-white p-4">
                    <ul className="flex flex-col space-y-4 font-bold">
                        <p href="#" onClick={() => scrollToSection("home")}>Home</p>
                        <p href="#" onClick={() => scrollToSection("about")}>About Me</p>
                        <p href="#" onClick={() => scrollToSection("skill")}>Skill</p>
                        <p href="#" onClick={() => scrollToSection("expertise")}>Expertise</p>
                        <p href="#" onClick={() => scrollToSection("project")}>Project</p>
                        <p href="#" onClick={() => scrollToSection("contact")}>Contact Me</p>
                    </ul>
                </div>
            )}
        </div>
    );
}
