
import React, { useEffect, useState } from 'react';
import { useAudio } from '@/hooks/use-audio';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { speakText } from '@/utils/sounds';

// Map routes to narration text content
const narrations: Record<string, {text: string, title: string}> = {
  '/': {
    text: 'Welcome to my portfolio website. Here you can explore my projects, read my articles, and learn more about my background and skills. Feel free to navigate around using the menu or contact me directly through the contact page.',
    title: 'Welcome to My Portfolio'
  },
  '/about': {
    text: 'I\'m a passionate developer with extensive experience in web and mobile development. I enjoy creating intuitive user interfaces and solving complex problems with elegant solutions. My background includes work with various technologies and frameworks across multiple industries.',
    title: 'About Me'
  },
  '/projects': {
    text: 'Here are some of the projects I\'ve worked on. Each one showcases different skills and technologies I\'ve mastered throughout my career. Click on any project to view more details about its implementation and the challenges I overcame.',
    title: 'My Projects'
  },
  '/articles': {
    text: 'These are articles I\'ve written on various technical topics. I enjoy sharing my knowledge and insights with the community, covering subjects from beginner tutorials to advanced implementation strategies.',
    title: 'My Articles'
  },
  '/contact': {
    text: 'Feel free to reach out to me using the contact form below. I\'m open to freelance opportunities, collaborations, or just connecting with other professionals in the industry.',
    title: 'Get in Touch'
  }
};

const PortfolioNarration = () => {
  const location = useLocation();
  const { narrationEnabled, volume } = useAudio();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressInterval, setProgressInterval] = useState<number | null>(null);
  const [duration, setDuration] = useState(15); // Approximate duration in seconds
  const [currentNarration, setCurrentNarration] = useState<{text: string, title: string} | null>(null);
  const [speechController, setSpeechController] = useState<{stop: () => void} | null>(null);
  
  // Update current narration when route changes
  useEffect(() => {
    const newNarration = narrations[location.pathname];
    setCurrentNarration(newNarration || null);
    
    // Reset progress
    setProgress(0);
    setIsPlaying(false);
    
    // Stop any previous narration
    if (speechController) {
      speechController.stop();
      setSpeechController(null);
    }
    
    // Clear previous interval
    if (progressInterval) {
      clearInterval(progressInterval);
      setProgressInterval(null);
    }
    
    // Estimate duration based on text length (approx 100 chars per 5 seconds)
    if (newNarration) {
      const estimatedDuration = Math.max(5, Math.ceil(newNarration.text.length / 20));
      setDuration(estimatedDuration);
    }
  }, [location.pathname]);
  
  // Start narration when enabled or route changes
  useEffect(() => {
    if (narrationEnabled && currentNarration && !isPlaying) {
      startNarration();
    }
    
    return () => {
      // Clean up on unmount
      if (speechController) {
        speechController.stop();
      }
      
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [narrationEnabled, currentNarration]);
  
  // Update volume when it changes
  useEffect(() => {
    // Web Speech API will use the new volume on next narration
  }, [volume]);
  
  const startNarration = () => {
    if (!currentNarration || !narrationEnabled) return;
    
    // Stop previous narration and interval
    if (speechController) {
      speechController.stop();
    }
    
    if (progressInterval) {
      clearInterval(progressInterval);
    }
    
    // Reset progress if completed
    if (progress >= 100) {
      setProgress(0);
    }
    
    // Start new narration
    const controller = speakText(
      currentNarration.text,
      volume,
      () => {
        setIsPlaying(true);
        
        // Start progress interval
        const interval = window.setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + (100 / duration / 10); // Update every 100ms
          });
        }, 100);
        
        setProgressInterval(interval);
      },
      () => {
        setIsPlaying(false);
        setProgress(100);
        if (progressInterval) {
          clearInterval(progressInterval);
          setProgressInterval(null);
        }
      }
    );
    
    setSpeechController(controller);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      // Pause narration
      if (speechController) {
        speechController.stop();
        setSpeechController(null);
      }
      
      if (progressInterval) {
        clearInterval(progressInterval);
        setProgressInterval(null);
      }
      
      setIsPlaying(false);
    } else {
      // Resume/start narration
      startNarration();
    }
  };

  const skipNarration = () => {
    if (speechController) {
      speechController.stop();
      setSpeechController(null);
    }
    
    if (progressInterval) {
      clearInterval(progressInterval);
      setProgressInterval(null);
    }
    
    setIsPlaying(false);
    setProgress(100);
  };

  if (!narrationEnabled || !currentNarration) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed bottom-4 left-4 z-50 w-64 bg-background/80 backdrop-blur-sm border rounded-lg shadow-lg p-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium truncate">{currentNarration.title}</h4>
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6" 
              onClick={togglePlayback}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6" 
              onClick={skipNarration}
            >
              <SkipForward size={14} />
            </Button>
          </div>
        </div>
        <Progress value={progress} className="h-1.5" />
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioNarration;
