
import { Howl } from 'howler';

// Helper function to check if a file exists
const fileExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (e) {
    return false;
  }
};

// Sound effects with lazy loading and fallback handling
export const createSound = (path: string, volume: number = 0.5): Howl => {
  return new Howl({
    src: [path],
    volume,
    html5: true,
    onloaderror: () => {
      console.warn(`Failed to load sound: ${path}`);
    }
  });
};

// Initialize sounds map
let soundsMap: Record<string, Howl> = {};

// Sound type definition
export type SoundType = 'click' | 'hover' | 'switch' | 'success';

// Initialize sounds with lazy loading
const initializeSounds = () => {
  // Define sound configurations
  const soundConfigs = {
    click: { path: '/sounds/click.mp3', volume: 0.5 },
    hover: { path: '/sounds/hover.mp3', volume: 0.2 },
    switch: { path: '/sounds/switch.mp3', volume: 0.4 },
    success: { path: '/sounds/success.mp3', volume: 0.5 },
  };

  // Create sound objects
  soundsMap = Object.entries(soundConfigs).reduce((acc, [key, config]) => {
    acc[key] = createSound(config.path, config.volume);
    return acc;
  }, {} as Record<string, Howl>);
};

// Initialize sounds
initializeSounds();

// Play a sound with optional volume override and error handling
export const playSound = (sound: SoundType, volumeOverride?: number) => {
  try {
    const soundToPlay = soundsMap[sound];
    if (!soundToPlay) {
      console.warn(`Sound not found: ${sound}`);
      return;
    }
    
    if (volumeOverride !== undefined) {
      soundToPlay.volume(volumeOverride);
    }
    
    // Check if the sound is loaded
    if (soundToPlay.state() === 'loaded') {
      soundToPlay.play();
    } else {
      // If not loaded yet, try to load it again
      soundToPlay.once('load', () => {
        soundToPlay.play();
      });
      
      // Handle load timeout
      setTimeout(() => {
        if (soundToPlay.state() !== 'loaded') {
          console.warn(`Timeout loading sound: ${sound}`);
        }
      }, 2000);
    }
  } catch (error) {
    console.warn(`Error playing sound: ${sound}`, error);
  }
};

// Export sounds for other components to use
export const sounds = soundsMap;
