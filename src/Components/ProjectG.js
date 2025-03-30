import { motion } from "framer-motion";
import img from "../img/5287326.jpg";
const projects = [
  {
    id: "1",
    title: "DriverRidy",
    Search: "react",
    description:
      "A platform connecting car owners with drivers. Features real-time chat and a booking system.",
    techStack: "React.js, Firebase,TailwindCss",
    img: "https://via.placeholder.com/300",
    githubLink: "https://github.com/username/driverridy",
    viewLink: "https://driverridy-demo.com",
  },
  {
    id: "2",
    title: "Ecommerce Platform",
    Search: "react",
    description:
      "A modern eCommerce website with product listings, search functionality, and a seamless shopping experience.",
    techStack: "React.js, Next.js",
    img: "https://via.placeholder.com/300",
    githubLink: "https://github.com/username/ecommerce-platform",
    viewLink: "https://ecommerce-platform-demo.com",
  },
  {
    id: "3",
    title: "ReadNews",
    Search: "react",
    description:
      "A responsive news platform allowing users to browse the latest news across various categories with real-time updates.",
    techStack: "React.js, Bootstrap, NewsAPI",
    img: "https://via.placeholder.com/300",
    githubLink: "https://github.com/username/readnews",
    viewLink: "https://readnews-demo.com",
  },
  {
    id: "4",
    title: "Podcast Website",
    Search: "wordpress",
    description:
      "A platform showcasing the power of podcasting for businesses with audio streaming and episode listings.",
    techStack: "Wordpress",
    img: "https://via.placeholder.com/300",
    githubLink: "https://github.com/username/podcast-website",
    viewLink: "https://podcast-website-demo.com",
  },
  {
    id: "5",
    title: "Immigration Website",
    Search: "html",
    description:
      "An informative website providing guidance and resources for immigration processes with an intuitive user experience.",
    techStack: "Wordpress",
    img: "https://via.placeholder.com/300",
    githubLink: "https://github.com/username/immigration-website",
    viewLink: "https://immigration-website-demo.com",
  },
];

function ProjectG({ result }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:p-16 py-4 ">
      {projects
        .filter((project) => result === "all" || project.Search === result)
        .map((project) => (
          <motion.div
            key={project.id}
            className="relative w-full h-64 overflow-hidden rounded-lg group"
          >
            <motion.img
              src={img}
              alt={project.title}
              className=" w-full h-full object-cover"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000">
              <div className="p-5 text-center w-full flex-col flex gap-2">
                <h3 className="mb-2 text-2xl font-bold text-yellow-500">
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div className=" flex flex-row gap-3 justify-center">
                  <p>
                    {project.techStack.split(",").map((tech, index) => (
                      <button
                        className="border border-yellow-500/80 px-3 py-2 m-1 hover:bg-yellow-500/30 cursor-default"
                        key={index}
                      >
                        {tech}
                      </button>
                    ))}
                  </p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href={project.viewLink}
                    className="fa-brands fa-github text-yellow-500 py-1 px-3 rounded hover:text-white font-bold"
                  >
                    
                  </a>
                  <a
                    href={project.githubLink}
                    className="fa-solid fa-share text-yellow-500 py-1 px-3 rounded  hover:text-white font-bold"
                  >
                    
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
}
export default ProjectG;
