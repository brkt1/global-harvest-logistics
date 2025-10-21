'use client';

import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeDemo() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-ghl-primary-600 dark:text-ghl-primary-400 mb-4">
              Theme Demo
            </h1>
            <p className="text-lg text-ghl-neutral-600 dark:text-gray-300 mb-8">
              Experience our modern dark and light mode implementation
            </p>
            
            {/* Theme Toggle with Label */}
            <div className="flex items-center justify-center space-x-4">
              <ThemeToggle size="lg" showLabel={true} />
            </div>
          </div>

          {/* Current Theme Info */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 p-8 mb-8">
            <h2 className="text-2xl font-heading font-semibold text-ghl-neutral-800 dark:text-gray-100 mb-4">
              Current Theme Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-ghl-primary-50 dark:bg-ghl-primary-900/20 p-4 rounded-xl">
                <p className="text-sm font-medium text-ghl-neutral-600 dark:text-gray-400">Selected Theme</p>
                <p className="text-lg font-semibold text-ghl-primary-600 dark:text-ghl-primary-400 capitalize">
                  {theme}
                </p>
              </div>
              <div className="bg-ghl-secondary-50 dark:bg-ghl-secondary-900/20 p-4 rounded-xl">
                <p className="text-sm font-medium text-ghl-neutral-600 dark:text-gray-400">Resolved Theme</p>
                <p className="text-lg font-semibold text-ghl-secondary-600 dark:text-ghl-secondary-400 capitalize">
                  {resolvedTheme}
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-ghl-primary-50 to-ghl-primary-100 dark:from-ghl-primary-900/20 dark:to-ghl-primary-800/20 p-6 rounded-xl border border-ghl-primary-200 dark:border-ghl-primary-700/30">
              <div className="w-12 h-12 bg-ghl-primary-600 dark:bg-ghl-primary-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌙</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-800 dark:text-gray-100 mb-2">
                Dark Mode
              </h3>
              <p className="text-ghl-neutral-600 dark:text-gray-300">
                Easy on the eyes with carefully crafted dark color schemes
              </p>
            </div>

            <div className="bg-gradient-to-br from-ghl-secondary-50 to-ghl-secondary-100 dark:from-ghl-secondary-900/20 dark:to-ghl-secondary-800/20 p-6 rounded-xl border border-ghl-secondary-200 dark:border-ghl-secondary-700/30">
              <div className="w-12 h-12 bg-ghl-secondary-600 dark:bg-ghl-secondary-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">☀️</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-800 dark:text-gray-100 mb-2">
                Light Mode
              </h3>
              <p className="text-ghl-neutral-600 dark:text-gray-300">
                Clean and bright interface for optimal daytime viewing
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20 p-6 rounded-xl border border-gray-200 dark:border-gray-600/30">
              <div className="w-12 h-12 bg-gray-600 dark:bg-gray-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-ghl-neutral-800 dark:text-gray-100 mb-2">
                System Theme
              </h3>
              <p className="text-ghl-neutral-600 dark:text-gray-300">
                Automatically follows your system preferences
              </p>
            </div>
          </div>

          {/* Color Palette Demo */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 p-8">
            <h2 className="text-2xl font-heading font-semibold text-ghl-neutral-800 dark:text-gray-100 mb-6">
              Color Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-16 bg-ghl-primary-600 dark:bg-ghl-primary-400 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-ghl-neutral-600 dark:text-gray-300">Primary</p>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-ghl-secondary-600 dark:bg-ghl-secondary-400 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-ghl-neutral-600 dark:text-gray-300">Secondary</p>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-ghl-neutral-600 dark:bg-ghl-neutral-400 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-ghl-neutral-600 dark:text-gray-300">Neutral</p>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-gray-600 dark:bg-gray-400 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-ghl-neutral-600 dark:text-gray-300">Gray</p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <p className="text-ghl-neutral-600 dark:text-gray-300 mb-4">
              Try switching between themes using the toggle button above
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-ghl-primary-100 dark:bg-ghl-primary-900/30 text-ghl-primary-700 dark:text-ghl-primary-300 rounded-full text-sm">
                Light Mode
              </span>
              <span className="px-3 py-1 bg-ghl-secondary-100 dark:bg-ghl-secondary-900/30 text-ghl-secondary-700 dark:text-ghl-secondary-300 rounded-full text-sm">
                Dark Mode
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                System Theme
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
