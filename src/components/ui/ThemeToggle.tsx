'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Monitor, Moon, Sun } from 'lucide-react';
import React from 'react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  showLabel = false,
  size = 'md'
}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className={iconSizes[size]} />;
    }
    return resolvedTheme === 'dark' ? 
      <Moon className={iconSizes[size]} /> : 
      <Sun className={iconSizes[size]} />;
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light mode';
      case 'dark':
        return 'Dark mode';
      case 'system':
        return 'System theme';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className={`
        relative group inline-flex items-center justify-center
        ${sizeClasses[size]}
        rounded-xl transition-all duration-300
        bg-white/20 backdrop-blur-sm border border-white/30
        hover:bg-white/30 hover:border-white/50
        focus:outline-none focus:ring-2 focus:ring-ghl-primary-500/50 focus:ring-offset-2
        dark:bg-gray-800/20 dark:border-gray-700/30
        dark:hover:bg-gray-800/30 dark:hover:border-gray-700/50
        ${className}
      `}
      aria-label={getLabel()}
      title={getLabel()}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-600/20 to-ghl-secondary-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className="relative z-10 text-ghl-neutral-700 dark:text-gray-300 group-hover:text-ghl-primary-600 dark:group-hover:text-ghl-primary-400 transition-colors duration-300">
        {getIcon()}
      </div>

      {/* Label */}
      {showLabel && (
        <span className="ml-2 text-sm font-medium text-ghl-neutral-700 dark:text-gray-300 group-hover:text-ghl-primary-600 dark:group-hover:text-ghl-primary-400 transition-colors duration-300">
          {getLabel()}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
