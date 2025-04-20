export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  longDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'CareerTrack',
    description: 'AI-powered career assistant platform helping users navigate their professional journey.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    technologies: ['Next.js', 'Node.js', 'AI/ML', 'TypeScript'],
    longDescription: 'Developed a scalable platform using Next.js and Node.js, optimized to handle 1,000+ simulated concurrent requests with a 25% improvement in API response time. Integrated AI-powered Resume Classifier and Job Matching System, tested on 50+ sample resumes, delivering personalized recommendations with 95% accuracy in mock scenarios. Built interactive dashboards and analytics features that reduced user navigation steps by 30% and projected a 40% increase in user engagement based on prototype usability testing.',
    liveUrl: 'https://careertrack.vercel.app/',
    featured: true
  },
  {
    id: 2,
    title: 'CODEPLAY',
    description: 'A comprehensive EdTech LMS platform built with MERN stack.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
    longDescription: 'An advanced Learning Management System that optimized backend performance, achieving a 25% reduction in API response time during stress testing, ensuring seamless operation under high-load conditions. The platform features course management, student progress tracking, and interactive learning materials.',
    liveUrl: 'https://codeplay-beige.vercel.app/',
    githubUrl: 'https://github.com/sahil-1610/CODEPLAY',
    featured: true
  },
  {
    id: 3,
    title: 'HRMS',
    description: 'A comprehensive Human Resource Management System with AI capabilities.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
    longDescription: 'Developed a full-stack HRMS system enabling job recruitment, interviews, employee onboarding, and automated offer letter generation, reducing manual HR tasks by 70%. Integrated AI-powered resume matching and scoring, comparing candidate profiles with job descriptions to improve shortlisting accuracy by 60% during testing. Built an AI-driven Job Description Generator, allowing HR to auto-generate tailored JDs, cutting JD creation time by 80% and enhancing role alignment.',
    liveUrl: 'https://hradminms.netlify.app/'
  },
  {
    id: 4,
    title: 'Blog Website',
    description: 'A full-featured blog platform using Appwrite backend and React.js frontend.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Appwrite'],
    longDescription: 'A modern blog platform that combines the power of Appwrite as a backend service with React.js and Vite for the frontend. The website features a clean, responsive design implemented with Tailwind CSS, making it both beautiful and functional.',
    githubUrl: 'https://github.com/sahil-1610/AppwriteBlogWebsite'
  },
  {
    id: 5,
    title: 'Music School',
    description: 'A modern music school website built with Next.js and TypeScript.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Acertinity UI'],
    longDescription: 'A beautifully designed music school website that showcases courses, instructors, and facilities. Built with Next.js and TypeScript, featuring a modern UI powered by Acertinity UI components.',
    liveUrl: 'https://music-school-nine.vercel.app/',
    githubUrl: 'https://github.com/sahil-1610/MusicSchool'
  },
  {
    id: 6,
    title: 'HealthCare+',
    description: 'A comprehensive healthcare patient management system with appointment booking.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    longDescription: 'HealthCare+ is a full-featured healthcare management system that streamlines the patient experience. It includes features for appointment booking, management, and SMS notifications. The platform helps both patients and healthcare providers manage their schedules efficiently.',
    liveUrl: 'https://master--healthcareplus12.netlify.app/',
    githubUrl: 'https://github.com/sahil-1610/HealthCarePlus'
  }
];
