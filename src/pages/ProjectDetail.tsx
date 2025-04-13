
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  
  useEffect(() => {
    if (id) {
      const projectId = parseInt(id);
      const foundProject = projects.find(p => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate('/projects');
      }
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <Layout>
        <div className="h-[50vh] flex items-center justify-center">
          <div className="animate-pulse">Loading project...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="animate-fade-in max-w-5xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/projects')}
          className="mb-8 -ml-2 inline-flex items-center gap-2 hover:bg-background/80"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech: string) => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
            </div>
            
            <div className="flex gap-4 mt-4">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Github size={16} />
                    View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-border shadow-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
