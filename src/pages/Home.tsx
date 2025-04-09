
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { projects } from '@/data/projects';

const Home = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const recentProjects = projects.slice(0, 2);
  
  const goToProjectDetail = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };
  
  return (
    <Layout>
      <div className="max-w-3xl">
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">👋</span>
            <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold`}>Hello there! I'm John</h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            I'm a full-stack developer that loves building products and web apps that 
            can impact millions of lives.
          </p>
          <p className="text-md md:text-lg text-muted-foreground mb-8">
            I'm a senior software engineer with 7 years of experience building scalable 
            web apps that are performance optimized and good looking.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects" className="inline-flex items-center">
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <section className="animate-fade-in">
          <h2 className="section-title">
            <Briefcase size={24} className="text-primary" />
            What I've been working on
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => goToProjectDetail(project.id)}
                className="project-card hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/projects" className="inline-flex items-center">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
