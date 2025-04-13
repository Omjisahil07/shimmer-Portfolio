
import { Howl } from 'howler';

// Sound effects for different interactions
export const sounds = {
  click: new Howl({
    src: ['/sounds/click.mp3'],
    volume: 0.5,
  }),
  hover: new Howl({
    src: ['/sounds/hover.mp3'],
    volume: 0.2,
  }),
  switch: new Howl({
    src: ['/sounds/switch.mp3'],
    volume: 0.4,
  }),
  success: new Howl({
    src: ['/sounds/success.mp3'],
    volume: 0.5,
  }),
};

export type SoundType = keyof typeof sounds;

// Play a sound with optional volume override
export const playSound = (sound: SoundType, volumeOverride?: number) => {
  const soundToPlay = sounds[sound];
  if (soundToPlay) {
    if (volumeOverride !== undefined) {
      soundToPlay.volume(volumeOverride);
    }
    soundToPlay.play();
  }
};
