/**
 * Scroll progress bar component
 * Shows reading progress at the top of the page
 */
import React from 'react';
import { useScrollProgress } from '../hooks/useScrollAnimation';

const ScrollProgressBar: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/20 dark:bg-gray-800/20">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;