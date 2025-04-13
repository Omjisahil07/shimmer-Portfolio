
import { useCallback } from 'react';
import { useAudio } from './use-audio';
import { playSound } from '@/utils/sounds';

type SoundEffectOptions = {
  clickSound?: keyof typeof playSound;
  hoverSound?: keyof typeof playSound;
};

export const useSoundEffect = (options?: SoundEffectOptions) => {
  const { soundsEnabled, volume } = useAudio();
  const clickSound = options?.clickSound || 'click';
  const hoverSound = options?.hoverSound || 'hover';

  const handleClick = useCallback(() => {
    if (soundsEnabled) {
      playSound(clickSound, volume);
    }
  }, [soundsEnabled, volume, clickSound]);

  const handleHover = useCallback(() => {
    if (soundsEnabled) {
      playSound(hoverSound, volume);
    }
  }, [soundsEnabled, volume, hoverSound]);

  return {
    soundEnabled: soundsEnabled,
    handleClick,
    handleHover,
    onClick: handleClick,
    onMouseEnter: handleHover,
  };
};
