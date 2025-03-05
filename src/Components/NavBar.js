
export default function NavBar() {
    function scrollToSection(id){
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="sticky top-0 z-[20] w-full bg-blue-950">
            <div className="flex justify-between items-center px-5 py-4 text-white">
                <div className="flex items-center text-2xl font-bold font-sans text-white ">
                    <a href="/"> <span className="">{"</>"}</span> Anju Narnolia</a>
                </div>
                <nav>
                    <ul className="flex space-x-6  justify-center font-bold " >
                        <li>
                            <a href="" onClick={() => scrollToSection("home")} className={`border-b-2 border-gray-200
                                   hover:text-gray-400  transition-colors duration-200`} >Home</a> 
                        </li>
                        <li>
                            <a href="" onClick={() => scrollToSection("about")} className={`hover:text-gray-400  transition-colors duration-200`} >About Me</a> 
                        </li>
                        <li>
                            <a href="" onClick={() => scrollToSection("skill")} className={`hover:text-gray-400 transition-colors duration-200`} >Skill</a> 
                        </li>
                        <li>
                            <a href="" onClick={() => scrollToSection("expertise")}  className={` hover:text-gray-400 transition-colors duration-200`} >Expertise</a> 
                        </li>
                        <li>
                            <a href="" onClick={() => scrollToSection("project")}   className={` hover:text-gray-400  transition-colors duration-200`} >Project</a> 
                        </li>
                        <li>
                            <a  href=""onClick={() => scrollToSection("contact")} className={`  hover:text-gray-400 transition-colors duration-200`} >Contact me</a> 
                        </li>            
                        <li>
                            <a href="https://drive.google.com/file/d/1pV0g9g6wY0pzIDyNqlzIsruASsaYVNQG/view?usp=sharing" className="hover:text-gray-300" target="blank">
                                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                    </svg>
                                    <span>Download Resume</span>
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="md:hidden">
                    <a className="font-bold text-4xl text-white" href="www.google.com">
                        &#8801;
                    </a>
                </div>
            </div>
        </div>
    );
}
