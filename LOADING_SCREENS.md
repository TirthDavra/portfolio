# Loading Screen Components

This project includes three different loading screen components that provide smooth loading experiences with progress counters from 0 to 100%.

## Available Components

### 1. AdvancedLoadingScreen (Recommended)
- **File**: `src/components/AdvancedLoadingScreen.tsx`
- **Features**:
  - Tracks actual resource loading (images, fonts, scripts)
  - Real progress based on actual loading completion
  - Animated background particles
  - Dynamic loading text
  - Shimmer effects on progress bar
  - Rotating accent elements
  - Smooth fade transitions

### 2. LoadingScreen (Simulated)
- **File**: `src/components/LoadingScreen.tsx`
- **Features**:
  - Simulated loading progress with realistic timing
  - Animated background particles
  - Dynamic loading text
  - Smooth animations
  - Good for consistent loading experience

### 3. SimpleLoadingScreen (Minimal)
- **File**: `src/components/SimpleLoadingScreen.tsx`
- **Features**:
  - Clean, minimal design
  - Simple progress simulation
  - Large counter display
  - Basic progress bar
  - Fast loading experience

## Usage

### Basic Implementation

```tsx
"use client";
import { useState } from "react";
import AdvancedLoadingScreen from "@/components/AdvancedLoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <AdvancedLoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`transition-all duration-1000 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Your main content */}
      </div>
    </>
  );
}
```

### Switching Between Components

To use a different loading screen, simply import and replace the component:

```tsx
// For simple loading
import SimpleLoadingScreen from "@/components/SimpleLoadingScreen";

// For simulated loading
import LoadingScreen from "@/components/LoadingScreen";

// For advanced loading (recommended)
import AdvancedLoadingScreen from "@/components/AdvancedLoadingScreen";
```

## Customization

### Theme Integration
All loading screens automatically use your site's theme colors through CSS variables:
- `--bg-primary`, `--bg-secondary`: Background colors
- `--accent-primary`, `--accent-secondary`: Accent colors
- `--text-primary`, `--text-secondary`: Text colors

### Animation Customization
You can modify animations by editing the CSS classes in `src/app/globals.css`:
- `animate-fade-in`: Fade in animation
- `animate-scale-in`: Scale in animation
- `animate-float`: Floating particle animation
- `animate-pulse-glow`: Pulsing glow effect
- `animate-rotate`: Rotation animation
- `animate-shimmer`: Shimmer effect

### Progress Timing
For simulated loading screens, you can adjust the timing by modifying the intervals in the component files.

## Features

### AdvancedLoadingScreen Features
- **Real Resource Tracking**: Monitors actual loading of images, fonts, and scripts
- **Dynamic Text**: Shows different messages based on loading progress
- **Visual Effects**: Particles, shimmer, and rotating elements
- **Smooth Transitions**: 800ms fade out with easing
- **Responsive Design**: Works on all screen sizes

### Performance Considerations
- The advanced loading screen tracks actual resources for accurate progress
- All animations use CSS transforms for optimal performance
- Components are optimized for smooth 60fps animations
- Memory efficient with proper cleanup

## Browser Compatibility
- Modern browsers with CSS Grid and Flexbox support
- Requires JavaScript for resource tracking
- Graceful fallback for older browsers

## Troubleshooting

### Loading Screen Not Appearing
- Ensure the component is properly imported
- Check that `isLoading` state is initially `true`
- Verify the component is rendered before main content

### Progress Not Updating
- For AdvancedLoadingScreen, ensure resources are properly loaded
- Check browser console for any JavaScript errors
- Verify CSS animations are working

### Transition Issues
- Ensure proper CSS transition classes are applied
- Check z-index values for proper layering
- Verify timing functions and durations

## Best Practices

1. **Use AdvancedLoadingScreen** for production sites with many resources
2. **Use SimpleLoadingScreen** for fast-loading sites or minimal designs
3. **Test on different devices** to ensure smooth performance
4. **Monitor loading times** and adjust timing as needed
5. **Consider user experience** - don't make loading too long or too short
