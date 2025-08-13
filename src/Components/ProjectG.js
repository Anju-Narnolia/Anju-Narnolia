"use client";
import { Carousel, Card } from "../Components/ui/cards-carousel";

export default function Project() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "React , Tailwind ",
    title: "Health Pal Ai",
    src: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754927752/Screenshot_2025-08-11_at_9.19.54_PM_cn6uhz.png  ",
    heading:
      "Health Pal AI is an AI-driven health assistant that helps users analyze symptoms and get tailored wellness suggestions.",
    content:
      "It offers diet recommendations, mental health support, and a user-friendly interface.Built with React and Tailwind CSS, it ensures speed, accessibility, and an engaging experience.",
    github: "https://github.com/Anju-Narnolia/HealthPal",
    live: "https://healthpal-ai.netlify.app/",
  },
];
