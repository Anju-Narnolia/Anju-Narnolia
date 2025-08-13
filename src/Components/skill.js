import { AnimatedTooltip } from "./ui/animated-tooltip";
import AnimateOnScroll from "./animate-on-scroll";
const skills = [
  { id: "Java", class: "fa-brands fa-java", color: "#007396" },
  { id: "JavaScript", class: "fa-brands fa-js", color: "#F7DF1E" },
  { id: "HTML", class: "fa-brands fa-html5", color: "#E34F26" },
  { id: "CSS", class: "fa-brands fa-css3-alt", color: "#1572B6" },
  { id: "Python", class: "fa-brands fa-python", color: "#3776AB" },
  { id: "PHP", class: "fa-brands fa-php", color: "#777BB4" },
  { id: "React", class: "fa-brands fa-react", color: "#61DAFB" },
  { id: "Bootstrap", class: "fa-brands fa-bootstrap", color: "#7952B3" },
  { id: "Node.js", class: "fa-brands fa-node", color: "#339933" },
  { id: "Git", class: "fa-brands fa-git", color: "#F05032" },
  { id: "GitHub", class: "fa-brands fa-github", color: "#ffffff" },
  { id: "MongoDB", class: "fa-solid fa-leaf", color: "#47A248" },
];
export default function Skills() {
  return (
    <AnimateOnScroll animation="animate-slideUp">
      <p className="text-2xl md:text-4xl font-bold uppercase text-yellow-500  text-center font-playfair py-4  ">
        Skills
      </p>
      <div className="w-full flex-col flex bg-[#24240c]/80 rounded-lg">
        <p className="font-semibold text-center text-xl md:text-2xl p-5 text-white">
          The skill, tools and technology I use:
        </p>
        <div className="flex flex-row items-center justify-center my-10 w-full ">
          <AnimatedTooltip items={skills} />
        </div>
      </div>
    </AnimateOnScroll>
  );
}
