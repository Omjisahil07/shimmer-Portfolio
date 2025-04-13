
import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { useAudio } from '@/hooks/use-audio';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// Map routes to narration audio files
const narrations: Record<string, {src: string, title: string}> = {
  '/': {
    src: '/narrations/home.mp3',
    title: 'Welcome to My Portfolio'
  },
  '/about': {
    src: '/narrations/about.mp3',
    title: 'About Me'
  },
  '/projects': {
    src: '/narrations/projects.mp3',
    title: 'My Projects'
  },
  '/articles': {
    src: '/narrations/articles.mp3',
    title: 'My Articles'
  },
  '/contact': {
    src: '/narrations/contact.mp3',
    title: 'Get in Touch'
  }
};

const PortfolioNarration = () => {
  const location = useLocation();
  const { narrationEnabled, volume } = useAudio();
  const [sound, setSound] = useState<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  // Set up and clean up audio on route change or when narration is toggled
  useEffect(() => {
    if (!narrationEnabled) {
      if (sound) {
        sound.stop();
        setSound(null);
        setIsPlaying(false);
      }
      return;
    }

    const currentNarration = narrations[location.pathname];
    if (!currentNarration) return;

    // Clean up previous audio
    if (sound) {
      sound.stop();
      setSound(null);
    }

    // Create new audio for current page
    const newSound = new Howl({
      src: [currentNarration.src],
      volume: volume,
      html5: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onend: () => {
        setIsPlaying(false);
        setProgress(100);
      },
      onload: () => {
        setDuration(newSound.duration());
      }
    });

    setSound(newSound);
    setProgress(0);

    return () => {
      newSound.stop();
    };
  }, [location.pathname, narrationEnabled]);

  // Update volume when it changes
  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [volume, sound]);

  // Update progress bar during playback
  useEffect(() => {
    if (!sound || !isPlaying) return;

    const interval = setInterval(() => {
      const currentTime = sound.seek();
      if (typeof currentTime === 'number' && duration > 0) {
        setProgress((currentTime / duration) * 100);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [sound, isPlaying, duration]);

  const togglePlayback = () => {
    if (!sound) return;
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  const skipNarration = () => {
    if (!sound) return;
    sound.stop();
    setIsPlaying(false);
    setProgress(100);
  };

  if (!narrationEnabled || !narrations[location.pathname]) return null;

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
          <h4 className="text-sm font-medium truncate">{narrations[location.pathname]?.title}</h4>
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
