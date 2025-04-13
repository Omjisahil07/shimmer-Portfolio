
import React from 'react';
import { Heart, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${!isMobile ? 'ml-64' : 'ml-0'} border-t py-6 px-4 md:px-8 mt-auto`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {currentYear} John Doe. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground flex items-center">
            Built with <Heart size={14} className="mx-1 text-red-500" /> using React
          </span>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <span className="hidden md:inline">View Source</span>
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              <span>Resume</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
