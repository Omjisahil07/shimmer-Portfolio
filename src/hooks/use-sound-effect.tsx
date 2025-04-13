
import { useCallback } from 'react';
import { useAudio } from './use-audio';
import { playSound, SoundType } from '@/utils/sounds';

type SoundEffectOptions = {
  clickSound?: SoundType;
  hoverSound?: SoundType;
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
