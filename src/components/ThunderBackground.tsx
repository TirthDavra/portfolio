"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightningBolt {
  id: string;
  path: string;
  opacity: number;
  duration: number;
  delay: number;
  strokeWidth: number;
}

interface ThunderFlash {
  id: string;
  intensity: number;
  duration: number;
  delay: number;
}

interface FullScreenThunder {
  id: string;
  isActive: boolean;
  lightningBolts: LightningBolt[];
  flashes: ThunderFlash[];
}

const ThunderBackground: React.FC = () => {
  const [fullScreenThunder, setFullScreenThunder] = useState<FullScreenThunder | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [screenDimensions, setScreenDimensions] = useState({ width: 1920, height: 1080 });

  // Check theme and screen dimensions
  useEffect(() => {
    const checkTheme = () => {
      const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDark(isDarkTheme);
    };
    
    const updateDimensions = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    checkTheme();
    updateDimensions();
    
    const themeObserver = new MutationObserver(checkTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      themeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Generate full-screen lightning network
  const generateFullScreenLightning = useCallback((): LightningBolt[] => {
    const bolts: LightningBolt[] = [];
    const { width, height } = screenDimensions;
    
    // Main vertical bolts across the screen
    const mainBoltCount = Math.floor(width / 300) + 2; // Responsive bolt count
    
    for (let i = 0; i < mainBoltCount; i++) {
      const startX = (width / (mainBoltCount - 1)) * i + (Math.random() - 0.5) * 100;
      const endX = startX + (Math.random() - 0.5) * 200;
      
      // Create main vertical lightning bolt
      const mainPath = generateLightningPath(
        startX, 
        -50, 
        endX, 
        height + 50,
        15 // More segments for full screen
      );
      
      bolts.push({
        id: `main-${i}`,
        path: mainPath,
        opacity: 0.8 + Math.random() * 0.2,
        duration: 0.3 + Math.random() * 0.2,
        delay: Math.random() * 0.1,
        strokeWidth: 3 + Math.random() * 2
      });
      
      // Add branching bolts
      const branchCount = 2 + Math.floor(Math.random() * 3);
      for (let j = 0; j < branchCount; j++) {
        const branchY = height * (0.2 + Math.random() * 0.6);
        const branchEndX = startX + (Math.random() - 0.5) * 300;
        const branchEndY = branchY + 100 + Math.random() * 200;
        
        const branchPath = generateLightningPath(
          startX + (Math.random() - 0.5) * 50,
          branchY,
          branchEndX,
          branchEndY,
          8
        );
        
        bolts.push({
          id: `branch-${i}-${j}`,
          path: branchPath,
          opacity: 0.6 + Math.random() * 0.3,
          duration: 0.2 + Math.random() * 0.15,
          delay: 0.05 + Math.random() * 0.1,
          strokeWidth: 1 + Math.random() * 2
        });
      }
    }
    
    return bolts;
  }, [screenDimensions]);
  
  // Enhanced lightning path generation
  const generateLightningPath = (startX: number, startY: number, endX: number, endY: number, segments: number = 12): string => {
    let path = `M ${startX} ${startY}`;
    
    for (let i = 1; i <= segments; i++) {
      const progress = i / segments;
      const baseX = startX + (endX - startX) * progress;
      const baseY = startY + (endY - startY) * progress;
      
      // Add more dramatic zigzag for full-screen effect
      const offsetX = (Math.random() - 0.5) * 80 * (1 - Math.abs(progress - 0.5) * 2);
      const offsetY = (Math.random() - 0.5) * 20;
      
      const x = baseX + offsetX;
      const y = baseY + offsetY;
      
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  // Generate thunder flashes for full-screen effect
  const generateThunderFlashes = useCallback((): ThunderFlash[] => {
    return [
      {
        id: 'main-flash',
        intensity: 0.15 + Math.random() * 0.1,
        duration: 0.1 + Math.random() * 0.05,
        delay: 0
      },
      {
        id: 'secondary-flash',
        intensity: 0.08 + Math.random() * 0.05,
        duration: 0.15 + Math.random() * 0.1,
        delay: 0.2 + Math.random() * 0.1
      },
      {
        id: 'afterglow',
        intensity: 0.05 + Math.random() * 0.03,
        duration: 0.3 + Math.random() * 0.2,
        delay: 0.4 + Math.random() * 0.1
      }
    ];
  }, []);

  // Trigger full-screen thunder effect
  const triggerFullScreenThunder = useCallback(() => {
    const thunderId = Math.random().toString(36).substr(2, 9);
    const lightningBolts = generateFullScreenLightning();
    const flashes = generateThunderFlashes();
    
    setFullScreenThunder({
      id: thunderId,
      isActive: true,
      lightningBolts,
      flashes
    });
    
    // Clear thunder effect after animation completes
    setTimeout(() => {
      setFullScreenThunder(null);
    }, 1000);
  }, [generateFullScreenLightning, generateThunderFlashes]);

  // 5-second looping thunder with randomness
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const scheduleThunder = () => {
      // Base 5-second interval with ±1 second randomness for realism
      const delay = 5000 + (Math.random() - 0.5) * 2000; // 4-6 seconds
      timeoutId = setTimeout(() => {
        triggerFullScreenThunder();
        scheduleThunder(); // Schedule next thunder
      }, delay);
    };
    
    // Initial thunder after 2 seconds
    const initialTimeout = setTimeout(() => {
      triggerFullScreenThunder();
      scheduleThunder();
    }, 2000);
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
    };
  }, [triggerFullScreenThunder]);

  // Ambient particles - optimized for performance
  const AmbientParticles = React.memo(() => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            isDark 
              ? 'bg-blue-400/20' 
              : 'bg-purple-400/15'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
            y: [0, -40, -80],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  ));

  // Subtle electrical field effect - memoized for performance
  const ElectricalField = React.memo(() => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 2 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-radial from-blue-500/3 via-purple-500/2 to-transparent'
              : 'bg-gradient-radial from-purple-500/2 via-blue-500/1 to-transparent'
          }`}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  ));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Electrical Field - Subtle ambient effect */}
      <ElectricalField />
      
      {/* Ambient Particles */}
      <AmbientParticles />
      
      {/* Full-Screen Thunder System */}
      <AnimatePresence>
        {fullScreenThunder && (
          <motion.div
            key={fullScreenThunder.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* Thunder Flashes - Multiple layers for dramatic effect */}
            {fullScreenThunder.flashes.map((flash) => (
              <motion.div
                key={flash.id}
                className={`absolute inset-0 ${
                  isDark 
                    ? 'bg-gradient-to-b from-blue-50/20 via-white/10 to-purple-50/15' 
                    : 'bg-gradient-to-b from-yellow-50/25 via-white/15 to-blue-50/20'
                }`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, flash.intensity, 0],
                }}
                transition={{ 
                  duration: flash.duration,
                  delay: flash.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
            
            {/* Full-Screen Lightning Network */}
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${screenDimensions.width} ${screenDimensions.height}`}
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <filter id="lightning-glow-intense" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feGaussianBlur stdDeviation="8" result="bigBlur"/>
                  <feMerge> 
                    <feMergeNode in="bigBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {fullScreenThunder.lightningBolts.map((bolt) => (
                <motion.g key={bolt.id}>
                  {/* Outer glow */}
                  <motion.path
                    d={bolt.path}
                    stroke={isDark ? "#3B82F6" : "#A855F7"}
                    strokeWidth={bolt.strokeWidth + 8}
                    fill="none"
                    opacity="0.15"
                    initial={{ 
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{ 
                      opacity: [0, 0.15, 0],
                      pathLength: [0, 1, 1],
                    }}
                    transition={{ 
                      duration: bolt.duration,
                      delay: bolt.delay,
                      ease: "easeOut",
                    }}
                  />
                  
                  {/* Main lightning bolt with intense glow */}
                  <motion.path
                    d={bolt.path}
                    stroke={isDark ? "#60A5FA" : "#8B5CF6"}
                    strokeWidth={bolt.strokeWidth}
                    fill="none"
                    filter="url(#lightning-glow-intense)"
                    initial={{ 
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{ 
                      opacity: [0, bolt.opacity, 0],
                      pathLength: [0, 1, 1],
                    }}
                    transition={{ 
                      duration: bolt.duration,
                      delay: bolt.delay,
                      ease: "easeOut",
                    }}
                  />
                  
                  {/* Core lightning - brightest */}
                  <motion.path
                    d={bolt.path}
                    stroke={isDark ? "#DBEAFE" : "#F3E8FF"}
                    strokeWidth={Math.max(1, bolt.strokeWidth - 1)}
                    fill="none"
                    initial={{ 
                      opacity: 0,
                      pathLength: 0,
                    }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      pathLength: [0, 1, 1],
                    }}
                    transition={{ 
                      duration: bolt.duration * 0.8,
                      delay: bolt.delay,
                      ease: "easeOut",
                    }}
                  />
                </motion.g>
              ))}
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Subtle background gradient overlay - maintains text readability */}
      <div className={`absolute inset-0 ${
        isDark
          ? 'bg-gradient-to-b from-slate-900/5 via-transparent to-slate-900/10'
          : 'bg-gradient-to-b from-slate-50/10 via-transparent to-slate-100/5'
      }`} />
    </div>
  );
};

export default ThunderBackground;
