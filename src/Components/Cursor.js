import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const addBubble = (e) => {
            const newBubble = {
                id: Math.random(),
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 20 + 15, 
                opacity: Math.random() * 0.6 + 0.4,
                dx: Math.random()*10+20,
                dy: -(Math.random() * 500 + 200),
            };

            setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

            setTimeout(() => {
                setBubbles((prevBubbles) =>
                    prevBubbles.filter((bubble) => bubble.id !== newBubble.id)
                );
            }, 9000);
        };

        window.addEventListener("mousemove", addBubble);
        return () => window.removeEventListener("mousemove", addBubble);
    }, []);

    return (
        <div className="fixed top-0 left-0 pointer-events-none w-[100vw] h-[100vw]">
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    initial={{ opacity: bubble.opacity, scale: 0.8 }}
                    animate={{
                        opacity: 0,
                        scale: 1.5,
                        x:bubble.dx,
                        y: [0, bubble.dy],
                        // y: [bubble.y-300, bubble.y - Math.abs(bubble.dy)],
                    }}
                    transition={{
                        duration:5,
                        ease: "easeOut",
                        y: {
                            type: "spring",
                            damping: 25,
                            stiffness: 10
                        }
                    }}
                    className="absolute bg-yellow-300 rounded-full shadow-md"
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        left: bubble.x,
                        top: bubble.y,
                    }}
                />
            ))}
        </div>
    );
}

export default Cursor;
