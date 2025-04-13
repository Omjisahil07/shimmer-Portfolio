
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import SoundButton from '@/components/SoundButton';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { projects } from '@/data/projects';
import ProfileImageDialog from '@/components/ProfileImageDialog';
import { motion } from 'framer-motion';
import { useSoundEffect } from '@/hooks/use-sound-effect';
import { playSound } from '@/utils/sounds';

const Home = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const profileImageSrc = "/lovable-uploads/a9add63b-a8cb-4ec4-a055-564ebc2f3a98.png";
  
  const recentProjects = projects.slice(0, 2);
  
  const { handleClick: playClickSound } = useSoundEffect();
  
  const goToProjectDetail = (projectId: number) => {
    playSound('click');
    navigate(`/project/${projectId}`);
  };

  // Play a welcome sound when the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      playSound('success', 0.3);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Layout>
      <div className="max-w-3xl">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.span 
              className="text-3xl cursor-pointer hover:scale-110 transition-transform"
              onClick={() => {
                playClickSound();
                setImageDialogOpen(true);
              }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              👋
            </motion.span>
            <motion.h1 
              className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello there! I'm John
            </motion.h1>
          </div>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I'm a full-stack developer that loves building products and web apps that 
            can impact millions of lives.
          </motion.p>
          <motion.p 
            className="text-md md:text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            I'm a senior software engineer with 7 years of experience building scalable 
            web apps that are performance optimized and good looking.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <SoundButton asChild soundType="success">
              <Link to="/contact">Contact Me</Link>
            </SoundButton>
            <SoundButton variant="outline" asChild>
              <Link to="/projects" className="inline-flex items-center">
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </SoundButton>
          </motion.div>
        </motion.div>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="section-title">
            <Briefcase size={24} className="text-primary" />
            What I've been working on
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                onClick={() => goToProjectDetail(project.id)}
                className="project-card hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                onMouseEnter={() => playSound('hover')}
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
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <SoundButton variant="outline" asChild>
              <Link to="/projects" className="inline-flex items-center">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </SoundButton>
          </div>
        </motion.section>
      </div>

      <ProfileImageDialog 
        open={imageDialogOpen} 
        onOpenChange={setImageDialogOpen} 
        imageSrc={profileImageSrc}
        name="John Doe"
      />
    </Layout>
  );
};

export default Home;
