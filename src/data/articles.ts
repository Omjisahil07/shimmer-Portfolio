export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  content: {
    paragraphs: string[];
    keyPoints: string[];
  };
};

export const articles: Article[] = [
  {
    id: 1,
    title: "Writing Smart UIs with AI: Auto-Suggest with OpenAI & React",
    description:
      "Learn how to integrate OpenAI's API with React to create intelligent auto-suggestions in forms, search boxes, and beyond. Boost UX with just a few lines of code.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI", "React", "OpenAI"],
    date: "April 25, 2025",
    content: {
      paragraphs: [
        "Building intelligent user interfaces has never been more accessible thanks to OpenAI's powerful language models. In this guide, we'll explore how to create a smart auto-suggest component that leverages the GPT API to provide context-aware suggestions in real-time.",
        "We'll start by setting up a React application with TypeScript and implementing a custom hook that manages the communication with OpenAI's API. This approach ensures clean separation of concerns and makes our code more maintainable.",
        "The integration process involves careful prompt engineering to ensure relevant suggestions and optimal performance. We'll implement debouncing to prevent excessive API calls and add error handling to ensure a smooth user experience.",
      ],
      keyPoints: [
        "Learn to integrate OpenAI's API with React components efficiently",
        "Implement debouncing and error handling for robust performance",
        "Create reusable hooks for AI-powered features",
        "Optimize API usage and manage response caching",
      ],
    },
  },
  {
    id: 2,
    title: "How I Built an AI-Powered Resume Matcher with Node.js & LangChain",
    description:
      "A behind-the-scenes look at building an AI resume classifier using LangChain, OpenAI, and Node.js. From prompt engineering to response handling.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    tags: ["Node.js", "LangChain", "AI", "Backend"],
    date: "April 2, 2025",
    content: {
      paragraphs: [
        "Building an AI-powered resume matcher is a complex task that requires a deep understanding of natural language processing and machine learning. In this guide, we'll explore how to use LangChain and OpenAI to create a robust system that can accurately classify resumes based on their content.",
        "We'll start by setting up a Node.js application and installing the necessary dependencies. Then, we'll use LangChain to define a prompt that can be used to extract relevant information from resumes. Finally, we'll integrate OpenAI's API to generate predictions and evaluate the accuracy of our model.",
      ],
      keyPoints: [
        "Build an AI-powered resume matcher using LangChain and OpenAI",
        "Extract relevant information from resumes using natural language processing",
        "Evaluate the accuracy of your model and make improvements",
        "Deploy your system to production and monitor its performance",
      ],
    },
  },
  {
    id: 3,
    title: "Component Patterns in Next.js: Clean Architecture for Scale",
    description:
      "Discover scalable patterns for structuring your Next.js applications. Learn when to use layout components, dynamic routing, and context providers.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
    tags: ["Next.js", "Architecture", "React"],
    date: "April 10, 2025",
    content: {
      paragraphs: [
        "Next.js is a popular framework for building server-side rendered React applications. In this guide, we'll explore some of the most common patterns for structuring your Next.js applications, including layout components, dynamic routing, and context providers.",
        "Layout components allow you to define reusable UI components that can be used across multiple pages. Dynamic routing enables you to create pages that are generated at runtime based on user input or other criteria. Context providers provide a way to share data between components without having to pass props through multiple levels of the component tree.",
      ],
      keyPoints: [
        "Learn scalable patterns for structuring Next.js applications",
        "Use layout components to create reusable UI components",
        "Implement dynamic routing to generate pages at runtime",
        "Use context providers to share data between components",
      ],
    },
  },
  {
    id: 4,
    title: "Tailwind CSS × ShadCN UI: Building Modern Dashboards",
    description:
      "How to combine Tailwind CSS and ShadCN UI to build stunning, responsive admin dashboards. Includes tips on dark mode, layout systems, and accessibility.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    tags: ["Tailwind CSS", "ShadCN UI", "UI/UX"],
    date: "April 16, 2025",
    content: {
      paragraphs: [
        "Tailwind CSS is a utility-first CSS framework that allows you to build responsive and accessible user interfaces quickly. In this guide, we'll explore how to combine Tailwind CSS with ShadCN UI to create stunning, modern admin dashboards.",
        "ShadCN UI is a set of React components that provide a consistent and modern design language. By combining Tailwind CSS with ShadCN UI, you can create a cohesive and visually appealing dashboard that meets the needs of your users.",
      ],
      keyPoints: [
        "Combine Tailwind CSS and ShadCN UI to build modern admin dashboards",
        "Use Tailwind CSS to create responsive and accessible UI components",
        "Use ShadCN UI to provide a consistent and modern design language",
        "Implement dark mode and layout systems for a better user experience",
      ],
    },
  },
  {
    id: 5,
    title:
      "Secure Your Full-Stack App with JWT & Role-Based Routing in Next.js",
    description:
      "A step-by-step guide on implementing role-based routing, protected pages, and JWT authentication in a Next.js + Node.js app.",
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop",
    tags: ["Security", "Next.js", "JWT", "Backend"],
    date: "April 20, 2025",
    content: {
      paragraphs: [
        "Building a secure full-stack application is a critical aspect of any web development project. In this guide, we'll explore how to implement role-based routing, protected pages, and JWT authentication in a Next.js + Node.js app.",
        "Role-based routing allows you to define different access levels for different users, ensuring that only authorized users can access certain parts of your application. Protected pages prevent unauthorized access to sensitive data, while JWT authentication provides a secure way to authenticate users and manage their sessions.",
      ],
      keyPoints: [
        "Implement role-based routing, protected pages, and JWT authentication in Next.js + Node.js",
        "Ensure secure access to your application using role-based routing",
        "Protect sensitive data using protected pages and JWT authentication",
        "Monitor your application for security vulnerabilities and make improvements",
      ],
    },
  },
  {
    id: 6,
    title: "How to Build an AI Job Description Generator with OpenAI & React",
    description:
      "Learn how I built an intelligent tool that writes job descriptions using AI. From prompt crafting to integrating results into a form builder.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI", "React", "OpenAI", "Productivity"],
    date: "April 30, 2025",
    content: {
      paragraphs: [
        "Building an AI job description generator is a challenging task that requires a deep understanding of natural language processing and machine learning. In this guide, we'll explore how to use OpenAI's API to create a tool that can generate job descriptions based on user input.",
        "We'll start by setting up a React application with TypeScript and implementing a custom hook that manages the communication with OpenAI's API. This approach ensures clean separation of concerns and makes our code more maintainable.",
        "The integration process involves careful prompt engineering to ensure relevant job descriptions and optimal performance. We'll implement debouncing to prevent excessive API calls and add error handling to ensure a smooth user experience.",
      ],
      keyPoints: [
        "Learn to integrate OpenAI's API with React components efficiently",
        "Implement debouncing and error handling for robust performance",
        "Create reusable hooks for AI-powered features",
        "Optimize API usage and manage response caching",
      ],
    },
  },
  {
    id: 7,
    title: "API Rate Limiting in Node.js: Protect Your Backend Like a Pro",
    description:
      "Explore common rate limiting strategies using Express.js middleware. Improve your backend reliability while avoiding abuse.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
    tags: ["Node.js", "Express", "Backend", "DevOps"],
    date: "April 38, 2025",
    content: {
      paragraphs: [
        "Rate limiting is a critical aspect of building a reliable and scalable backend. In this guide, we'll explore some of the most common rate limiting strategies using Express.js middleware.",
        "Rate limiting can be used to prevent abuse of your API, such as denial-of-service attacks or excessive requests from a single user. By implementing rate limiting, you can ensure that your backend can handle a large number of requests without crashing or becoming unresponsive.",
      ],
      keyPoints: [
        "Explore common rate limiting strategies using Express.js middleware",
        "Implement rate limiting to prevent abuse of your API",
        "Ensure your backend can handle a large number of requests",
        "Monitor your application for rate limiting violations and make improvements",
      ],
    },
  },
];
