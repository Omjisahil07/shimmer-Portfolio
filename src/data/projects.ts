
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
    title: 'CODEPLAY',
    description: 'An EdTech platform built with MERN stack to reshape online education.',
    image: '/lovable-uploads/f323c7cd-7da3-4dab-bbc1-56b6a7514136.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
    longDescription: 'CODEPLAY is a comprehensive EdTech platform built using the MERN stack. It aims to transform online education by providing an interactive and engaging learning environment. The platform features course management, student progress tracking, and interactive learning materials.',
    liveUrl: 'https://codeplay-beige.vercel.app/',
    githubUrl: 'https://github.com/sahil-1610/CODEPLAY',
  },
  {
    id: 2,
    title: 'Blog Website',
    description: 'A full-featured blog platform using Appwrite backend and React.js frontend.',
    image: '/lovable-uploads/d67cefad-3e91-4b5a-b8b6-d8f11ea65953.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Appwrite'],
    longDescription: 'A modern blog platform that combines the power of Appwrite as a backend service with React.js and Vite for the frontend. The website features a clean, responsive design implemented with Tailwind CSS, making it both beautiful and functional.',
    githubUrl: 'https://github.com/sahil-1610/AppwriteBlogWebsite',
  },
  {
    id: 3,
    title: 'Music School',
    description: 'A modern music school website built with Next.js and TypeScript.',
    image: '/lovable-uploads/0991307e-857f-4b1f-8a96-330c161bdeae.png',
    technologies: ['Next.js', 'TypeScript', 'Acertinity UI'],
    longDescription: 'A beautifully designed music school website that showcases courses, instructors, and facilities. Built with Next.js and TypeScript, featuring a modern UI powered by Acertinity UI components.',
    liveUrl: 'https://music-school-nine.vercel.app/',
    githubUrl: 'https://github.com/sahil-1610/MusicSchool',
  },
  {
    id: 4,
    title: 'HealthCare+',
    description: 'A comprehensive healthcare patient management system with appointment booking.',
    image: '/lovable-uploads/06b2535b-f663-4ea6-b230-7ca7df11862c.png',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    longDescription: 'HealthCare+ is a full-featured healthcare management system that streamlines the patient experience. It includes features for appointment booking, management, and SMS notifications. The platform helps both patients and healthcare providers manage their schedules efficiently.',
    liveUrl: 'https://master--healthcareplus12.netlify.app/',
    githubUrl: 'https://github.com/sahil-1610/HealthCarePlus',
  }
];
