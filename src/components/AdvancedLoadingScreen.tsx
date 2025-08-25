"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const AdvancedLoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const { theme } = useTheme();

  // Track actual resource loading with fallback
  const trackResourceLoading = useCallback(() => {
    return new Promise<number>((resolve) => {
      let loadedResources = 0;
      let totalResources = 0;
      let baseProgress = 0;
      let hasStartedResourceTracking = false;

      // Track images
      const images = Array.from(document.querySelectorAll('img'));
      totalResources += images.length;

      // Track fonts
      if ('fonts' in document) {
        totalResources += 1; // Count fonts as one resource
      }

      // Track scripts
      const scripts = Array.from(document.querySelectorAll('script[src]')) as HTMLScriptElement[];
      totalResources += scripts.length;

      // Add some base resources for CSS, HTML, etc.
      totalResources += 3;

      // Ensure minimum total resources for smooth progress
      if (totalResources < 5) {
        totalResources = 5;
      }

      const updateProgress = () => {
        const resourceProgress = (loadedResources / totalResources) * 60; // Resources account for 60% of progress
        const totalProgress = Math.min(baseProgress + resourceProgress, 100);
        setProgress(Math.round(totalProgress));

        // Fallback: if we're stuck and have been tracking for a while, force completion
        if (totalProgress >= 95 || (hasStartedResourceTracking && loadedResources > 0 && totalProgress >= 50)) {
          setTimeout(() => {
            setProgress(100);
            resolve(100);
          }, 500);
        }
      };

      // Track image loading
      images.forEach((img) => {
        if (img.complete) {
          loadedResources++;
          updateProgress();
        } else {
          img.addEventListener('load', () => {
            loadedResources++;
            updateProgress();
          });
          img.addEventListener('error', () => {
            loadedResources++; // Count as loaded even if failed
            updateProgress();
          });
        }
      });

      // Track font loading
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          loadedResources++;
          updateProgress();
        }).catch(() => {
          loadedResources++; // Count as loaded even if failed
          updateProgress();
        });
      }

      // Track script loading
      scripts.forEach((script) => {
        // Scripts don't have a 'complete' property like images
        // We can only track them via load/error events
        script.addEventListener('load', () => {
          loadedResources++;
          updateProgress();
        });
        script.addEventListener('error', () => {
          loadedResources++; // Count as loaded even if failed
          updateProgress();
        });
      });

      // Simulate base loading progress
      const baseIntervals = [
        { duration: 200, increment: 15, text: 'Initializing...' },
        { duration: 300, increment: 20, text: 'Loading Resources...' },
        { duration: 400, increment: 5, text: 'Optimizing Experience...' },
      ];

      let intervalIndex = 0;
      const updateBaseProgress = () => {
        if (intervalIndex < baseIntervals.length) {
          const interval = baseIntervals[intervalIndex];
          baseProgress += interval.increment;
          setLoadingText(interval.text);
          updateProgress();
          intervalIndex++;
          setTimeout(updateBaseProgress, interval.duration);
        } else {
          // Start resource tracking phase
          hasStartedResourceTracking = true;
          setLoadingText('Finalizing...');
          
          // Fallback timer to ensure completion
          setTimeout(() => {
            if (progress < 100) {
              setProgress(100);
              resolve(100);
            }
          }, 2000);
        }
      };

      updateBaseProgress();
    });
  }, [progress]);

  useEffect(() => {
    const startLoading = async () => {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', async () => {
          const finalProgress = await trackResourceLoading();
          setProgress(finalProgress);
          setLoadingText('Almost Ready...');
          
          // Final delay for smooth transition
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 800);
          }, 500);
        });
      } else {
        const finalProgress = await trackResourceLoading();
        setProgress(finalProgress);
        setLoadingText('Almost Ready...');
        
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onLoadingComplete, 800);
        }, 500);
      }
    };

    startLoading();
  }, [trackResourceLoading, onLoadingComplete]);

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
          <div className="w-64 h-2 bg-theme-tertiary rounded-full overflow-hidden mx-auto relative">
            <div
              className="h-full bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-theme-secondary text-sm uppercase tracking-wider">
            {loadingText}
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
      
      {/* Progress rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
        <div className="absolute inset-0 border-2 border-[rgb(var(--accent-primary))] rounded-full opacity-10 animate-rotate" />
        <div className="absolute inset-4 border-2 border-[rgb(var(--accent-secondary))] rounded-full opacity-10 animate-rotate" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      </div>
    </div>
  );
};

export default AdvancedLoadingScreen;
