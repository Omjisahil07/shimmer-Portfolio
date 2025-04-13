
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSoundEffect } from '@/hooks/use-sound-effect';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { handleClick } = useSoundEffect({ clickSound: 'switch' });

  const handleToggle = () => {
    toggleTheme();
    handleClick();
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="rounded-full w-10 h-10 transition-all duration-300 hover:bg-accent dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-foreground" />
      ) : (
        <Sun size={20} className="text-yellow-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;
