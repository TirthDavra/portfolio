"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const SimpleLoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simple progress simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-600 ease-in-out ${
        isVisible 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}
      style={{
        background: `linear-gradient(135deg, 
          rgb(var(--bg-primary)) 0%, 
          rgb(var(--bg-secondary)) 100%)`
      }}
    >
      <div className="text-center">
        {/* Simple counter */}
        <div className="text-8xl font-bold text-gradient mb-8">
          {Math.round(progress)}%
        </div>
        
        {/* Simple progress bar */}
        <div className="w-80 h-1 bg-theme-tertiary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleLoadingScreen;
