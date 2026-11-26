import { tr } from "zod/locales";
import aiConciergeImage from "../assets/images/ai-concierge.png";
import chatAppImage from "../assets/images/chat-app.png";
import recommendationTrackerImage from "../assets/images/recommendation-tracker.png";

export type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  github?: string;
  embeddable: boolean
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Recommendation Tracker",
    type: "Full-stack application",
    description:
      "A personal space to collect recommendations, organize them by mood, and revisit movies, books, and shows whenever you need inspiration.",
    image: recommendationTrackerImage,
    tags: ["React", "JavaScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    url: "https://recommendationtracker.grads.hosting.cyf.academy/",
    github: "https://github.com/PratiAmalden/Recommendation-Tracker",
    embeddable: true
  },
  {
    number: "02",
    name: "AI Concierge (pilot)",
    type: "AI-powered assistant",
    description:
      "An AI concierge for people exploring CodeYourFuture, answering questions about programmes, volunteering opportunities, and learning support.",
    image: aiConciergeImage,
    tags: ["AI", "TypeScript", "Node.js", "API design"],
    url: "https://cyfaiconcierge.grads.hosting.cyf.academy/",
    github: "https://github.com/PratiAmalden/AI-Concierge",
    embeddable: false,
  },
  {
    number: "03",
    name: "Chat Application",
    type: "Real-time communication app",
    description:
      "A chat application that compares long polling and WebSockets to explore different approaches to real-time communication.",
    image: chatAppImage,
    tags: ["Node.js", "WebSockets", "Express", "JavaScript"],
    url: "https://pratiamalden-chatapp.grads.hosting.cyf.academy/",
    github: "https://github.com/PratiAmalden/Chat-Application",
    embeddable: true,
  },
];
