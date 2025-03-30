export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-black p-10">
      <div className="flex justify-between p-10">
        <div className="flex  flex-col w-full gap-2">
          <div className="flex gap-1 items-center text-4xl font-playfair uppercase font-bold">
            <p className="text-white">Anju </p>
            <p className="text-yellow-500 "> Narnolia</p>
          </div>
          <p className="text-md text-gray-400">
            {" "}
            Creating beautiful web experiences
          </p>
        </div>
        <div className="flex text-center gap-2 justify-center items-center text-white text-3xl">
          <a
            className="px-3 py-2 rounded-full"
            href="https://www.linkedin.com/in/anju-narnolia-"
            style={{ backgroundColor: "#0A66C2" }}
          >
            <i className="fa-brands fa-linkedin text-3xl  "></i>
          </a>
          <a
            className="px-3 py-2 rounded-full"
            href="https://github.com/Anju-Narnolia"
            style={{ backgroundColor: "#181717" }}
          >
            <i className="fa-brands fa-github text-3xl  "></i>
          </a>
          <a
            className="px-3 py-2 rounded-full"
            href="https://in.pinterest.com/Anju_Narnolia/"
            style={{ backgroundColor: "#FF0000" }}
          >
            <i className="fa-brands fa-pinterest text-3xl   "></i>
          </a>
          <a
            className="px-3 py-2 rounded-full"
            href="https://www.instagram.com/anju__narnolia/"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            <i className="fa-brands fa-instagram text-3xl  "></i>
          </a>
          <a
            className="px-3 py-2 rounded-full"
            href="https://twitter.com/AnjuNarnolia"
            style={{ backgroundColor: "#000000" }}
          >
            <i className="fa-brands fa-twitter text-3xl  "></i>
          </a>
          <a
            className="px-3 py-2 rounded-full"
            href="https://www.youtube.com/@anjunarnoli93750"
            style={{ backgroundColor: "#FF0000" }}
          >
            <i className="fa-brands fa-youtube text-3xl   "></i>
          </a>
          <a
            className="px-3 py-2 rounded-full"
            href="https://discordapp.com/users/1122350439489351812"
            style={{ backgroundColor: "#36393F" }}
          >
            <i className="fa-brands fa-discord text-3xl   "></i>
          </a>
        </div>
      </div>
      <div className=" flex justify-center py-5 mx-10 border-t-2 border-gray-400">
        <span className=" md:text-xl  lg:text-xl text-gray-400">
          Code by me, for you! &copy; {currentYear} Anju Narnolia . All rights
          preserved.
        </span>
      </div>
    </div>
  );
}
