
import React from 'react';
import Layout from '@/components/Layout';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';

const Projects = () => {
  const navigate = useNavigate();

  const goToProjectDetail = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Layout>
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
              onClick={() => goToProjectDetail(project.id)}
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
                <div className="text-primary flex items-center gap-1 text-sm group">
                  View Project
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
