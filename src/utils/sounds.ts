
import { Howl } from 'howler';
import * as Tone from 'tone';

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

// Web Speech API for narrations
const synth = window.speechSynthesis;
let narrationVoice: SpeechSynthesisVoice | null = null;

// Initialize Web Speech API
export const initWebSpeech = () => {
  // Wait for voices to be loaded
  const loadVoices = () => {
    const voices = synth.getVoices();
    if (voices.length > 0) {
      // Choose a nice English voice (preferably Google or Microsoft)
      narrationVoice = voices.find(voice => 
        (voice.name.includes('Google') || voice.name.includes('Microsoft')) && 
        voice.lang.startsWith('en')
      ) || voices[0];
      
      console.log(`Using voice: ${narrationVoice.name}`);
    }
  };
  
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }
  
  // Initial load attempt
  loadVoices();
};

// Initialize speech synthesis
initWebSpeech();

// Speak text with Web Speech API
export const speakText = (text: string, volume: number = 0.5, onStart?: () => void, onEnd?: () => void) => {
  if (!synth) {
    console.warn('Speech synthesis not supported in this browser');
    return;
  }
  
  // Cancel any ongoing speech
  synth.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Set voice
  if (narrationVoice) {
    utterance.voice = narrationVoice;
  }
  
  // Set properties
  utterance.volume = volume;
  utterance.rate = 0.95; // Slightly slower for better clarity
  utterance.pitch = 1;
  
  // Event handlers
  utterance.onstart = () => {
    if (onStart) onStart();
  };
  
  utterance.onend = () => {
    if (onEnd) onEnd();
  };
  
  utterance.onerror = (event) => {
    console.error('Speech synthesis error:', event);
    if (onEnd) onEnd();
  };
  
  // Speak the text
  synth.speak(utterance);
  
  return {
    stop: () => {
      synth.cancel();
      if (onEnd) onEnd();
    }
  };
};

// Create ambient sound generator using Tone.js
export class AmbientSoundGenerator {
  private synths: Tone.Synth[] = [];
  private isPlaying = false;
  private volume: Tone.Volume;
  
  constructor(private baseVolume: number = 0.1) {
    // Create volume control
    this.volume = new Tone.Volume(-20).toDestination();
    
    // Create synths
    for (let i = 0; i < 4; i++) {
      const synth = new Tone.Synth({
        oscillator: {
          type: "sine"
        },
        envelope: {
          attack: 2,
          decay: 1,
          sustain: 0.8,
          release: 4
        }
      }).connect(this.volume);
      
      this.synths.push(synth);
    }
  }
  
  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    
    // Start Tone.js audio context
    Tone.start();
    
    // Set volume
    this.volume.volume.value = Math.log10(this.baseVolume) * 20;
    
    // Play ambient sounds
    this.playRandomNotes();
  }
  
  stop() {
    this.isPlaying = false;
    
    // Release all synths
    this.synths.forEach(synth => {
      synth.triggerRelease();
    });
  }
  
  setVolume(volume: number) {
    this.baseVolume = volume;
    if (this.volume) {
      // Convert linear volume to decibels (logarithmic)
      this.volume.volume.value = Math.log10(volume) * 20;
    }
  }
  
  private playRandomNotes() {
    if (!this.isPlaying) return;
    
    // Notes in a pleasant scale (pentatonic)
    const notes = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5'];
    
    // Play a random note on a random synth
    const synthIndex = Math.floor(Math.random() * this.synths.length);
    const noteIndex = Math.floor(Math.random() * notes.length);
    const note = notes[noteIndex];
    const duration = 2 + Math.random() * 4; // 2-6 second note
    
    this.synths[synthIndex].triggerAttackRelease(note, duration);
    
    // Schedule next note
    const nextNoteTime = 1000 + Math.random() * 3000; // 1-4 seconds
    setTimeout(() => {
      if (this.isPlaying) {
        this.playRandomNotes();
      }
    }, nextNoteTime);
  }
}

// Create singleton ambient sound generator
export const ambientSounds = new AmbientSoundGenerator();
