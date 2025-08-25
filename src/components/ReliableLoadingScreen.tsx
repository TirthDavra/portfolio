"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const ReliableLoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const { theme } = useTheme();

  // Hybrid approach: simulated progress with resource tracking
  const startLoading = useCallback(() => {
    return new Promise<number>((resolve) => {
      let currentProgress = 0;
      let loadedResources = 0;
      let totalResources = 0;
      let isResourceTrackingActive = false;

      // Count actual resources
      const images = Array.from(document.querySelectorAll('img'));
      const scripts = Array.from(document.querySelectorAll('script[src]')) as HTMLScriptElement[];
      totalResources = images.length + scripts.length + 2; // +2 for fonts and base resources

      // Ensure minimum resources for smooth progress
      if (totalResources < 3) totalResources = 3;

      const updateProgress = (newProgress: number) => {
        currentProgress = Math.min(newProgress, 100);
        setProgress(Math.round(currentProgress));
        
        if (currentProgress >= 100) {
          setTimeout(() => {
            resolve(100);
          }, 300);
        }
      };

      // Phase 1: Initial loading (0-40%)
      const phase1Intervals = [
        { duration: 200, increment: 10, text: 'Initializing...' },
        { duration: 300, increment: 15, text: 'Loading Resources...' },
        { duration: 400, increment: 15, text: 'Preparing Interface...' },
      ];

      let phase1Index = 0;
      const runPhase1 = () => {
        if (phase1Index < phase1Intervals.length) {
          const interval = phase1Intervals[phase1Index];
          currentProgress += interval.increment;
          setLoadingText(interval.text);
          updateProgress(currentProgress);
          phase1Index++;
          setTimeout(runPhase1, interval.duration);
        } else {
          // Start resource tracking phase
          isResourceTrackingActive = true;
          setLoadingText('Optimizing Experience...');
          runPhase2();
        }
      };

      // Phase 2: Resource tracking (40-90%)
      const runPhase2 = () => {
        // Track image loading
        images.forEach((img) => {
          if (img.complete) {
            loadedResources++;
          } else {
            img.addEventListener('load', () => {
              loadedResources++;
              updateResourceProgress();
            });
            img.addEventListener('error', () => {
              loadedResources++;
              updateResourceProgress();
            });
          }
        });

        // Track font loading
        if ('fonts' in document) {
          document.fonts.ready.then(() => {
            loadedResources++;
            updateResourceProgress();
          }).catch(() => {
            loadedResources++;
            updateResourceProgress();
          });
        }

        // Track script loading
        scripts.forEach((script) => {
          // Scripts don't have a 'complete' property like images
          // We can only track them via load/error events
          script.addEventListener('load', () => {
            loadedResources++;
            updateResourceProgress();
          });
          script.addEventListener('error', () => {
            loadedResources++;
            updateResourceProgress();
          });
        });

        // Fallback timer for resource tracking
        setTimeout(() => {
          if (isResourceTrackingActive && currentProgress < 90) {
            currentProgress = 90;
            setLoadingText('Almost Ready...');
            updateProgress(currentProgress);
          }
        }, 1500);
      };

      const updateResourceProgress = () => {
        if (!isResourceTrackingActive) return;
        
        const resourceProgress = (loadedResources / totalResources) * 50; // Resources add up to 50%
        const newProgress = 40 + resourceProgress; // Start from 40%
        updateProgress(newProgress);
      };

      // Phase 3: Final completion (90-100%)
      const runPhase3 = () => {
        setLoadingText('Almost Ready...');
        const finalIntervals = [
          { duration: 200, increment: 3 },
          { duration: 200, increment: 3 },
          { duration: 200, increment: 4 },
        ];

        let finalIndex = 0;
        const runFinalPhase = () => {
          if (finalIndex < finalIntervals.length) {
            const interval = finalIntervals[finalIndex];
            currentProgress += interval.increment;
            updateProgress(currentProgress);
            finalIndex++;
            setTimeout(runFinalPhase, interval.duration);
          }
        };

        runFinalPhase();
      };

      // Start the loading process
      runPhase1();

      // Global fallback timer to ensure completion
      setTimeout(() => {
        if (currentProgress < 100) {
          currentProgress = 100;
          setLoadingText('Ready!');
          updateProgress(currentProgress);
        }
      }, 4000);
    });
  }, []);

  useEffect(() => {
    const handleLoading = async () => {
      const finalProgress = await startLoading();
      setProgress(finalProgress);
      setLoadingText('Ready!');
      
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onLoadingComplete, 800);
      }, 500);
    };

    handleLoading();
  }, [startLoading, onLoadingComplete]);

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

export default ReliableLoadingScreen;
