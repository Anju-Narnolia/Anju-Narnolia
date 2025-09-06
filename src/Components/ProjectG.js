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
  {
    category: "React , Redux , Tailwind , Node , Express , Mongodb , OpenAI ",
    title: "Job Assistant",
    src: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1757164010/Screenshot_2025-09-06_at_6.23.02_PM_ltqwcd.png  ",
    heading:
      "A full-stack AI chat application featuring a personalized assistant of Anju Narnolia that aids in job applications, HR screenings, and technical interviews.",
    content:"A full-stack AI chat application built with React, Redux, Tailwind, Node.js, Express, MongoDB, and OpenAI to assist with job applications, HR screenings, and technical interviews. It features a personalized AI assistant of Anju Narnolia, delivering intelligent, context-aware responses based on her profile, experience, and achievements",
    github: "https://github.com/Anju-Narnolia/my-job-assistent",
    live: "https://my-job-assistent.vercel.app/",
  },
];

