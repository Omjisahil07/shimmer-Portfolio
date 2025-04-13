
import React, { useRef, useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { useIsMobile } from '@/hooks/use-mobile';

// Sort projects chronologically (assuming they should be in reverse order by ID for now)
const chronologicalProjects = [...projects].sort((a, b) => a.id - b.id);

const TimelineJourney = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isMobile = useIsMobile();

  const scrollToProject = (index: number) => {
    if (index < 0 || index >= chronologicalProjects.length) return;
    
    setActiveProjectIndex(index);
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const projectElements = container.querySelectorAll('.timeline-project');
    if (projectElements[index]) {
      projectElements[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }

    // Update scroll buttons state
    setCanScrollLeft(index > 0);
    setCanScrollRight(index < chronologicalProjects.length - 1);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const projectElements = container.querySelectorAll('.timeline-project');
    const containerRect = container.getBoundingClientRect();
    
    let closestIndex = 0;
    let closestDistance = Infinity;
    
    projectElements.forEach((element, index) => {
      const elementRect = element.getBoundingClientRect();
      const distance = Math.abs(elementRect.left - containerRect.left);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    
    if (closestIndex !== activeProjectIndex) {
      setActiveProjectIndex(closestIndex);
      setCanScrollLeft(closestIndex > 0);
      setCanScrollRight(closestIndex < chronologicalProjects.length - 1);
    }
  };

  return (
    <div className="w-full mb-16">
      <h2 className="section-title mb-4 flex items-center gap-2">
        <span className="text-primary">⏳</span> My Journey
      </h2>
      
      <div className="relative">
        {/* Timeline navigation buttons */}
        {!isMobile && (
          <>
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
              onClick={() => scrollToProject(activeProjectIndex - 1)}
              disabled={!canScrollLeft}
            >
              <ArrowLeft size={16} />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
              onClick={() => scrollToProject(activeProjectIndex + 1)}
              disabled={!canScrollRight}
            >
              <ArrowRight size={16} />
            </Button>
          </>
        )}
        
        {/* Timeline dots */}
        <div className="flex justify-center mb-4 mt-2">
          {chronologicalProjects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                index === activeProjectIndex 
                  ? 'bg-primary w-4' 
                  : 'bg-muted-foreground/30'
              }`}
              onClick={() => scrollToProject(index)}
              aria-label={`View project ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Scrollable timeline */}
        <div 
          className="overflow-x-auto hide-scrollbar" 
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          <div className="flex gap-4 py-6 px-4 min-w-max">
            {chronologicalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`timeline-project bg-card border border-border rounded-lg flex-shrink-0 ${
                  isMobile ? 'w-[280px]' : 'w-[450px]'
                } overflow-hidden transition-all duration-300 relative`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: index === activeProjectIndex ? 1 : 0.95
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs py-1 px-2 rounded">
                    #{index + 1}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineJourney;
