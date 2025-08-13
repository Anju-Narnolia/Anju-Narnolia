import FloatingDock from "../Components/ui/floating-dock";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return ( 
    <div className="w-full bg-gradient-to-t from-black to-[#24240c]/80 p-10">
      <div className="flex md:p-10 flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col gap-2 lg:w-1/2">
          <div className="flex gap-1 items-center text-2xl md:text-4xl font-playfair uppercase font-bold">
            <p className="text-white">Anju </p>
            <p className="text-yellow-500 "> Narnolia</p>
          </div>
          <p className="text-md text-gray-400">
            {" "}
            Creating beautiful web experiences
          </p>
        </div>
        <div className="flex items-center justify-center  w-full">
          <FloatingDock
            items={Links}
          />
        </div>
      </div>
      <div className=" flex justify-center py-5 md:mx-10 border-t-2 border-gray-400">
        <span className=" md:text-xl  lg:text-xl text-gray-400">
          Code by me, for you! &copy; {currentYear} Anju Narnolia . All rights
          Reserved.
        </span>
      </div>
    </div>
  );
}


const Links = [
  {
    title: "LinkedIn",
    icon: (
      <i className="fa-brands fa-linkedin text-2xl md:text-4xl text-[#0A66C2]"></i>
    ),
    href: "https://www.linkedin.com/in/anju-narnolia-",
  },
  {
    title: "Twitter",
    icon: (
      <i className="fa-brands fa-twitter text-2xl md:text-4xl text-[#1DA1F2]"></i>
    ),
    href: "https://twitter.com/AnjuNarnolia",
  },
  {
    title: "GitHub",
    icon: (
      <i className="fa-brands fa-github text-2xl md:text-4xl text-[#181717]"></i>
    ),
    href: "https://github.com/Anju-Narnolia",
  },
  {
    title: "YouTube",
    icon: (
      <i className="fa-brands fa-youtube text-2xl md:text-4xl text-[#FF0000]"></i>
    ),
    href: "https://www.youtube.com/@anjunarnoli93750",
  },
  {
    title: "Pinterest",
    icon: (
      <i className="fa-brands fa-pinterest text-2xl md:text-4xl text-[#FF0000]"></i>
    ),
    href: "https://in.pinterest.com/Anju_Narnolia/",
  },
  {
    title: "Instagram",
    icon: (
      <i className="fa-brands fa-instagram text-2xl md:text-4xl text-[#000000]"></i>
    ),
    href: "https://www.instagram.com/anju__narnolia/",
  },
  {
    title: "Discord",
    icon: (
      <i className="fa-brands fa-discord text-2xl md:text-4xl text-[#36393F] "></i>
    ),
    href: "https://discordapp.com/users/1122350439489351812",
  },
];
