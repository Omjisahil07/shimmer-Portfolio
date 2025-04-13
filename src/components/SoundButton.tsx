
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useSoundEffect } from '@/hooks/use-sound-effect';
import { motion } from 'framer-motion';

interface SoundButtonProps extends ButtonProps {
  soundType?: 'click' | 'hover' | 'switch' | 'success';
}

const SoundButton = ({ children, soundType = 'click', ...props }: SoundButtonProps) => {
  const { onClick, onMouseEnter } = useSoundEffect({
    clickSound: soundType,
    hoverSound: 'hover',
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick();
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        {...props}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default SoundButton;
