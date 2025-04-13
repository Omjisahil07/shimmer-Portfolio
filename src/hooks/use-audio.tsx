
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ambientSounds } from '@/utils/sounds';

type AudioState = {
  soundsEnabled: boolean;
  narrationEnabled: boolean;
  ambientEnabled: boolean;
  volume: number;
  toggleSounds: () => void;
  toggleNarration: () => void;
  toggleAmbient: () => void;
  setVolume: (volume: number) => void;
};

export const useAudio = create<AudioState>()(
  persist(
    (set, get) => ({
      soundsEnabled: true,
      narrationEnabled: false,
      ambientEnabled: false,
      volume: 0.5,
      toggleSounds: () => set((state) => ({ soundsEnabled: !state.soundsEnabled })),
      toggleNarration: () => set((state) => ({ narrationEnabled: !state.narrationEnabled })),
      toggleAmbient: () => {
        const newState = !get().ambientEnabled;
        set({ ambientEnabled: newState });
        
        // Control ambient sounds
        if (newState) {
          ambientSounds.setVolume(get().volume * 0.3); // Lower volume for ambient
          ambientSounds.start();
        } else {
          ambientSounds.stop();
        }
      },
      setVolume: (volume) => {
        set({ volume });
        
        // Update ambient volume if enabled
        if (get().ambientEnabled) {
          ambientSounds.setVolume(volume * 0.3);
        }
      },
    }),
    {
      name: 'audio-settings',
      onRehydrateStorage: () => (state) => {
        // Initialize ambient sounds when state is rehydrated
        if (state?.ambientEnabled) {
          ambientSounds.setVolume(state.volume * 0.3);
          ambientSounds.start();
        }
      },
    }
  )
);
