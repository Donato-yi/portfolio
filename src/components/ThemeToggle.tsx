/**
 * Theme toggle button component
 * Switches between light and dark themes with theme-aware favicon
 */
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useSound } from '../hooks/useSound';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { playClickSound } = useSound();

  const toggleTheme = () => {
    playClickSound();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Update favicon based on theme
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      if (theme === 'dark') {
        favicon.href = '/favicon-dark.ico';
      } else {
        favicon.href = '/favicon.ico';
      }
    }
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;