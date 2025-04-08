
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Briefcase, ExternalLink, Github, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  longDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Acclernity',
    description: 'A design and development studio that focuses on building quality apps.',
    image: '/lovable-uploads/f323c7cd-7da3-4dab-bbc1-56b6a7514136.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    longDescription: 'Acclernity is a design and development studio that creates high-quality web applications with a focus on performance and user experience. This project involved creating a responsive website with modern animations and a clean design aesthetic.',
    liveUrl: 'https://acclernity.com',
    githubUrl: 'https://github.com/johndoe/acclernity',
  },
  {
    id: 2,
    title: 'Algochurn',
    description: 'Practice for technical interviews with hands on coding challenges.',
    image: '/lovable-uploads/d67cefad-3e91-4b5a-b8b6-d8f11ea65953.png',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    longDescription: 'Algochurn is a platform for developers to practice coding challenges and prepare for technical interviews. The application features interactive coding environments, detailed solutions, and progress tracking.',
    liveUrl: 'https://algochurn.com',
    githubUrl: 'https://github.com/johndoe/algochurn',
  },
  {
    id: 3,
    title: 'Moonbeam',
    description: 'Never write from scratch again with Moonbeam, your AI first writing tool.',
    image: '/lovable-uploads/0991307e-857f-4b1f-8a96-330c161bdeae.png',
    technologies: ['React', 'Node.js', 'OpenAI API'],
    longDescription: 'Moonbeam is an AI-powered writing assistant that helps users create high-quality content faster. It leverages natural language processing to suggest improvements, generate ideas, and enhance writing style.',
    liveUrl: 'https://moonbeam.ai',
    githubUrl: 'https://github.com/johndoe/moonbeam',
  },
  {
    id: 4,
    title: 'Tailwind Master Kit',
    description: 'A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.',
    image: '/lovable-uploads/06b2535b-f663-4ea6-b230-7ca7df11862c.png',
    technologies: ['Tailwind CSS', 'JavaScript', 'Vite'],
    longDescription: 'Tailwind Master Kit is a comprehensive library of ready-to-use Tailwind CSS components designed to speed up web development. It includes over 100 components with responsive design, dark mode support, and accessibility features.',
    liveUrl: 'https://tailwindmasterkit.com',
    githubUrl: 'https://github.com/johndoe/tailwind-master-kit',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <Layout title="Projects">
      <div>
        <h1 className="section-title">
          <Briefcase size={24} className="text-primary" />
          What I've been working on
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card cursor-pointer hover:scale-[1.02] transition-all duration-300" 
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openProjectDetails(project)}
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription>
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-2">
              <div className="overflow-hidden rounded-md mb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-cover h-[200px]"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {selectedProject.longDescription}
              </p>
            </div>
            
            <DialogFooter className="flex-col sm:flex-row gap-2">
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
              {selectedProject.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Github size={16} />
                    View Code
                  </a>
                </Button>
              )}
              {selectedProject.liveUrl && (
                <Button asChild>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </Layout>
  );
};

export default Projects;
