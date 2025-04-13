
import React from 'react';
import { Volume2, VolumeX, Mic, MicOff, Music, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAudio } from '@/hooks/use-audio';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { playSound } from '@/utils/sounds';

const AudioControls = () => {
  const { 
    soundsEnabled, 
    narrationEnabled, 
    ambientEnabled, 
    volume, 
    toggleSounds, 
    toggleNarration, 
    toggleAmbient, 
    setVolume 
  } = useAudio();

  const handleToggleSounds = () => {
    toggleSounds();
    if (!soundsEnabled) {
      playSound('switch');
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (soundsEnabled) {
      playSound('hover', value[0]);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full w-10 h-10 shadow-md bg-background/80 backdrop-blur-sm"
            onClick={() => soundsEnabled && playSound('click')}
          >
            {soundsEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4" side="top" align="end">
          <div className="space-y-4">
            <h3 className="font-medium">Audio Settings</h3>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Sound Effects</span>
              <Button 
                variant={soundsEnabled ? "default" : "outline"}
                size="sm"
                onClick={handleToggleSounds}
                className="gap-2"
              >
                {soundsEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                {soundsEnabled ? "On" : "Off"}
              </Button>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Voice Narration</span>
              <Button 
                variant={narrationEnabled ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  toggleNarration();
                  if (soundsEnabled) playSound('switch');
                }}
                className="gap-2"
              >
                {narrationEnabled ? <Mic size={16} /> : <MicOff size={16} />}
                {narrationEnabled ? "On" : "Off"}
              </Button>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">Ambient Sounds</span>
              <Button 
                variant={ambientEnabled ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  toggleAmbient();
                  if (soundsEnabled) playSound('switch');
                }}
                className="gap-2"
              >
                {ambientEnabled ? <Music size={16} /> : <Music2 size={16} />}
                {ambientEnabled ? "On" : "Off"}
              </Button>
            </div>
            
            {soundsEnabled && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Volume</span>
                  <span className="text-sm">{Math.round(volume * 100)}%</span>
                </div>
                <Slider
                  value={[volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                />
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </motion.div>
  );
};

export default AudioControls;
