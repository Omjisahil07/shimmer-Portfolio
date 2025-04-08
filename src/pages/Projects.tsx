
import React from 'react';
import Layout from '@/components/Layout';
import { Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Acclernity',
    description: 'A design and development studio that focuses on building quality apps.',
    image: '/lovable-uploads/f323c7cd-7da3-4dab-bbc1-56b6a7514136.png',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Algochurn',
    description: 'Practice for technical interviews with hands on coding challenges.',
    image: '/lovable-uploads/d67cefad-3e91-4b5a-b8b6-d8f11ea65953.png',
    technologies: ['Next.js', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Moonbeam',
    description: 'Never write from scratch again with Moonbeam, your AI first writing tool.',
    image: '/lovable-uploads/0991307e-857f-4b1f-8a96-330c161bdeae.png',
    technologies: ['React', 'Node.js'],
  },
  {
    id: 4,
    title: 'Tailwind Master Kit',
    description: 'A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.',
    image: '/lovable-uploads/06b2535b-f663-4ea6-b230-7ca7df11862c.png',
    technologies: ['Tailwind CSS', 'JavaScript'],
  },
];

const Projects = () => {
  return (
    <Layout title="Projects">
      <div>
        <h1 className="section-title">
          <Briefcase size={24} className="text-primary" />
          What I've been working on
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card" 
              style={{ animationDelay: `${index * 100}ms` }}
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
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">React</Button>
                  <Button size="sm" variant="outline">Tailwind CSS</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
