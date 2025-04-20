
export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title: "Writing Smart UIs with AI: Auto-Suggest with OpenAI & React",
    description: "Learn how to integrate OpenAI's API with React to create intelligent auto-suggestions in forms, search boxes, and beyond. Boost UX with just a few lines of code.",
    image: "https://unsplash.com/photos/5QgIuuBxKwM",
    tags: ["AI", "React", "OpenAI"],
    date: "April 25, 2025",
  },
  {
    id: 2,
    title: "How I Built an AI-Powered Resume Matcher with Node.js & LangChain",
    description: "A behind-the-scenes look at building an AI resume classifier using LangChain, OpenAI, and Node.js. From prompt engineering to response handling.",
    image: "https://unsplash.com/photos/GFrBMipOd_E",
    tags: ["Node.js", "LangChain", "AI", "Backend"],
    date: "May 2, 2025",
  },
  {
    id: 3,
    title: "Component Patterns in Next.js: Clean Architecture for Scale",
    description: "Discover scalable patterns for structuring your Next.js applications. Learn when to use layout components, dynamic routing, and context providers.",
    image: "https://unsplash.com/photos/tE6th1h6Bfk",
    tags: ["Next.js", "Architecture", "React"],
    date: "May 10, 2025",
  },
  {
    id: 4,
    title: "Tailwind CSS × ShadCN UI: Building Modern Dashboards",
    description: "How to combine Tailwind CSS and ShadCN UI to build stunning, responsive admin dashboards. Includes tips on dark mode, layout systems, and accessibility.",
    image: "https://unsplash.com/photos/lp40q07DIe0",
    tags: ["Tailwind CSS", "ShadCN UI", "UI/UX"],
    date: "May 16, 2025",
  },
  {
    id: 5,
    title: "Secure Your Full-Stack App with JWT & Role-Based Routing in Next.js",
    description: "A step-by-step guide on implementing role-based routing, protected pages, and JWT authentication in a Next.js + Node.js app.",
    image: "https://unsplash.com/photos/i8va4bOAoY0",
    tags: ["Security", "Next.js", "JWT", "Backend"],
    date: "May 23, 2025",
  },
  {
    id: 6,
    title: "How to Build an AI Job Description Generator with OpenAI & React",
    description: "Learn how I built an intelligent tool that writes job descriptions using AI. From prompt crafting to integrating results into a form builder.",
    image: "https://unsplash.com/photos/MJ_sI8xLdNM",
    tags: ["AI", "React", "OpenAI", "Productivity"],
    date: "May 30, 2025",
  },
  {
    id: 7,
    title: "API Rate Limiting in Node.js: Protect Your Backend Like a Pro",
    description: "Explore common rate limiting strategies using Express.js middleware. Improve your backend reliability while avoiding abuse.",
    image: "https://unsplash.com/photos/JJPqavJBy_k",
    tags: ["Node.js", "Express", "Backend", "DevOps"],
    date: "June 5, 2025",
  },
];

