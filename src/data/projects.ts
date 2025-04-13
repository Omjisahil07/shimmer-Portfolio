
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  longDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Acclernity',
    description: 'A design and development studio that focuses on building quality apps.',
    image: '/lovable-uploads/f323c7cd-7da3-4dab-bbc1-56b6a7514136.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    longDescription: 'Acclernity is a design and development studio that creates high-quality web applications with a focus on performance and user experience. This project involved creating a responsive website with modern animations and a clean design aesthetic. The site features a showcase of our work, detailed case studies, and information about our design and development process. We implemented custom animations using Framer Motion to create a seamless and engaging user experience. The responsive design ensures that the site looks great on devices of all sizes, from mobile phones to large desktop displays.',
    liveUrl: 'https://acclernity.com',
    githubUrl: 'https://github.com/johndoe/acclernity',
  },
  {
    id: 2,
    title: 'Algochurn',
    description: 'Practice for technical interviews with hands on coding challenges.',
    image: '/lovable-uploads/d67cefad-3e91-4b5a-b8b6-d8f11ea65953.png',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    longDescription: 'Algochurn is a platform for developers to practice coding challenges and prepare for technical interviews. The application features interactive coding environments, detailed solutions, and progress tracking. We built Algochurn to help developers master data structures and algorithms through practice. The platform includes hundreds of carefully curated coding challenges across different difficulty levels. Each challenge comes with detailed explanations and multiple solution approaches. The code execution environment allows users to test their solutions in real-time, with support for multiple programming languages.',
    liveUrl: 'https://algochurn.com',
    githubUrl: 'https://github.com/johndoe/algochurn',
  },
  {
    id: 3,
    title: 'Moonbeam',
    description: 'Never write from scratch again with Moonbeam, your AI first writing tool.',
    image: '/lovable-uploads/0991307e-857f-4b1f-8a96-330c161bdeae.png',
    technologies: ['React', 'Node.js', 'OpenAI API'],
    longDescription: 'Moonbeam is an AI-powered writing assistant that helps users create high-quality content faster. It leverages natural language processing to suggest improvements, generate ideas, and enhance writing style. Our team designed and built Moonbeam to transform the writing process for content creators, marketers, and everyday users. The application integrates with modern AI technologies to provide smart suggestions, help with grammar and style, and even generate content outlines based on user prompts. The clean, distraction-free interface makes it easy to focus on writing, while the powerful AI tools work behind the scenes to enhance productivity.',
    liveUrl: 'https://moonbeam.ai',
    githubUrl: 'https://github.com/johndoe/moonbeam',
  },
  {
    id: 4,
    title: 'Tailwind Master Kit',
    description: 'A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.',
    image: '/lovable-uploads/06b2535b-f663-4ea6-b230-7ca7df11862c.png',
    technologies: ['Tailwind CSS', 'JavaScript', 'Vite'],
    longDescription: 'Tailwind Master Kit is a comprehensive library of ready-to-use Tailwind CSS components designed to speed up web development. It includes over 100 components with responsive design, dark mode support, and accessibility features. We created Tailwind Master Kit to simplify the process of building beautiful interfaces with Tailwind CSS. The library provides a wide range of components from basic UI elements to complex layouts, all fully customizable and production-ready. Each component is built with best practices in mind, ensuring proper accessibility, responsive behavior, and performance optimization. The documentation includes code examples and live previews for easy implementation.',
    liveUrl: 'https://tailwindmasterkit.com',
    githubUrl: 'https://github.com/johndoe/tailwind-master-kit',
  },
];
