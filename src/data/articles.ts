
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
    title: 'Writing Clean Code With React',
    description: 'Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.',
    image: '/lovable-uploads/d67cefad-3e91-4b5a-b8b6-d8f11ea65953.png',
    tags: ['React', 'Clean Code'],
    date: 'April 5, 2025',
  },
  {
    id: 2,
    title: 'How to win clients',
    description: 'Learn effective strategies to attract and retain clients as a freelance developer. Build relationships that last and create a sustainable business.',
    image: '/lovable-uploads/06b2535b-f663-4ea6-b230-7ca7df11862c.png',
    tags: ['Freelancing', 'Business'],
    date: 'March 20, 2025',
  },
  {
    id: 3,
    title: 'Tailwind CSS tips and tricks to conquer the world',
    description: 'Master the art of using Tailwind CSS effectively. Learn advanced techniques and best practices to build beautiful user interfaces.',
    image: '/lovable-uploads/f323c7cd-7da3-4dab-bbc1-56b6a7514136.png',
    tags: ['CSS', 'Tailwind'],
    date: 'March 15, 2025',
  },
  {
    id: 4,
    title: 'Creating a Dark Mode Toggle with Next.js and Tailwind CSS',
    description: 'A comprehensive guide on implementing dark mode in your Next.js application using Tailwind CSS. Learn the best practices and pitfalls to avoid.',
    image: '/lovable-uploads/0991307e-857f-4b1f-8a96-330c161bdeae.png',
    tags: ['Next.js', 'Tailwind CSS', 'Dark Mode'],
    date: 'March 8, 2025',
  },
];
