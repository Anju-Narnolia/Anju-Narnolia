// src/components/AnimateOnScroll.jsx
import { useEffect, useRef, useState } from "react";

export default function AnimateOnScroll({ children, animation = "animate-fadeIn" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const element = ref.current; // store in variable

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Only run once
      }
    },
    { threshold: 0.2 }
  );

  if (element) observer.observe(element);

  return () => {
    if (element) observer.unobserve(element);
  };
}, []);


  return (
    <div
      ref={ref}
      className={`${isVisible ? animation : "opacity-0"} transition-all duration-700`}
    >
      {children}
    </div>
  );
}
