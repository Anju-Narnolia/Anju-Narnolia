import { cn } from "../../lib/utils";
// import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";

export default function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
}) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
}

const FloatingDockMobile = ({ items, className }) => {
  return (
    <div className={cn("block md:hidden p-2", className)}>
      <div className="flex flex-row gap-2 p-4">
        {items.map((item) => (
          <a
            href={item.href}
            key={item.title}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white" // was h-10 w-10
          >
            <div className="">{item.icon}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:flex h-20 items-end gap-4 rounded-2xl  px-4 pb-3 mx-auto  ",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [50, 90, 50]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [50, 90, 50]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-white  p-2"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre  "
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center p-4">
          <div className="text-2xl">{icon}</div> {/* Bigger icon */}
        </div>
      </motion.div>
    </a>
  );
}
