
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AudioState = {
  soundsEnabled: boolean;
  narrationEnabled: boolean;
  volume: number;
  toggleSounds: () => void;
  toggleNarration: () => void;
  setVolume: (volume: number) => void;
};

export const useAudio = create<AudioState>()(
  persist(
    (set) => ({
      soundsEnabled: true,
      narrationEnabled: false,
      volume: 0.5,
      toggleSounds: () => set((state) => ({ soundsEnabled: !state.soundsEnabled })),
      toggleNarration: () => set((state) => ({ narrationEnabled: !state.narrationEnabled })),
      setVolume: (volume) => set({ volume }),
    }),
    {
      name: 'audio-settings',
    }
  )
);
