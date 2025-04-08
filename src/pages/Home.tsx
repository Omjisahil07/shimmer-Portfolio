
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';

const Home = () => {
  return (
    <Layout title="Home">
      <div className="max-w-3xl">
        <div className="mb-10 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">👋 Hello there! I'm John</h1>
          <p className="text-xl text-muted-foreground mb-6">
            I'm a full-stack developer that loves building products and web apps that 
            can impact millions of lives.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            I'm a senior software engineer with 7 years of experience building scalable 
            web apps that are performance optimized and good looking.
          </p>
          
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects">
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
          
          <div className="grid md:grid-cols-2 gap-6">
            {recentProjects.map((project) => (
              <div key={project.id} className="project-card">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex gap-2">
                    <span className="badge">React</span>
                    <span className="badge">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/projects">
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

const recentProjects = [
  {
    id: 1,
    title: 'Acclernity',
    description: 'A design and development studio that focuses on building quality apps.',
    image: '/lovable-uploads/f323c7cd-7da3-4dab-bbc1-56b6a7514136.png',
  },
  {
    id: 2,
    title: 'Algochurn',
    description: 'Practice for technical interviews with hands on coding challenges.',
    image: '/lovable-uploads/d67cefad-3e91-4b5a-b8b6-d8f11ea65953.png',
  },
];

export default Home;
