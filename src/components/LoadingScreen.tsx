"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading progress with realistic timing
    const simulateLoading = () => {
      const intervals = [
        { duration: 300, increment: 15 }, // Initial load (0-15%)
        { duration: 500, increment: 25 }, // Resources loading (15-40%)
        { duration: 800, increment: 30 }, // Images and fonts (40-70%)
        { duration: 600, increment: 20 }, // Scripts and final assets (70-90%)
        { duration: 400, increment: 10 }, // Final touches (90-100%)
      ];

      let currentProgress = 0;
      let intervalIndex = 0;

      const updateProgress = () => {
        if (intervalIndex < intervals.length) {
          const interval = intervals[intervalIndex];
          currentProgress += interval.increment;
          setProgress(Math.min(currentProgress, 100));
          intervalIndex++;

          if (currentProgress < 100) {
            setTimeout(updateProgress, interval.duration);
          } else {
            // Loading complete, start fade out
            setTimeout(() => {
              setIsVisible(false);
              setTimeout(onLoadingComplete, 800); // Wait for fade out animation
            }, 500);
          }
        }
      };

      updateProgress();
    };

    simulateLoading();
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ease-in-out ${
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
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              background: `rgba(var(--accent-primary), ${0.3 + Math.random() * 0.4})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand area */}
        <div className="mb-8 animate-fade-in">
          <div className="text-4xl font-bold text-gradient mb-2">
            Tirth Davara
          </div>
          <div className="text-theme-secondary text-lg">
            React Developer
          </div>
        </div>

        {/* Progress counter */}
        <div className="mb-8 animate-scale-in">
          <div className="text-6xl font-bold text-gradient mb-4">
            {progress}%
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-2 bg-theme-tertiary rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-theme-secondary text-sm uppercase tracking-wider">
            {progress < 30 && 'Initializing...'}
            {progress >= 30 && progress < 60 && 'Loading Resources...'}
            {progress >= 60 && progress < 90 && 'Optimizing Experience...'}
            {progress >= 90 && 'Almost Ready...'}
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center mt-4 space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-pulse-glow"
              style={{
                background: `rgb(var(--accent-primary))`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner accent elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-2 border-[rgb(var(--accent-primary))] rounded-lg opacity-20 animate-rotate" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-[rgb(var(--accent-secondary))] rounded-full opacity-20 animate-rotate" style={{ animationDirection: 'reverse' }} />
    </div>
  );
};

export default LoadingScreen;
