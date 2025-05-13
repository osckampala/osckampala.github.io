
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface PageLoaderProps {
  isLoading?: boolean;
  className?: string;
  minDuration?: number; 
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  isLoading = true, 
  className,
  minDuration = 400 // Reduced from 800ms to 400ms for faster loading
}) => {
  const [shouldShow, setShouldShow] = useState(isLoading);
  
  useEffect(() => {
    if (!isLoading) {
      // Set a minimum duration for the loader to avoid flashing
      const timer = setTimeout(() => {
        setShouldShow(false);
      }, minDuration);
      
      return () => clearTimeout(timer);
    } else {
      setShouldShow(true);
    }
  }, [isLoading, minDuration]);
  
  if (!shouldShow) return null;
  
  return (
    <div className={cn(
      "fixed inset-0 bg-white/80 dark:bg-gray-900/80 z-[9999] flex items-center justify-center backdrop-blur-md transition-opacity duration-200", // Reduced duration from 300ms to 200ms
      className
    )}>
      <div className="relative flex flex-col items-center">
        {/* Main loader animation - optimized for faster rendering */}
        <div className="relative h-24 w-24"> {/* Reduced size from 28x28 to 24x24 */}
          {/* Outer glowing ring - optimized animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tekOrange to-orange-600 opacity-20 blur-md"></div>
          
          {/* Outer spinning circle - faster animation */}
          <div className="absolute h-full w-full border-4 border-t-tekOrange border-r-tekOrange/30 border-b-tekOrange/10 border-l-tekOrange/60 rounded-full animate-spin" style={{animationDuration: '1s'}}></div>
          
          {/* Middle spinning circle - faster animation */}
          <div className="absolute h-3/4 w-3/4 top-1/8 left-1/8 border-4 border-t-transparent border-r-tekOrange/70 border-b-transparent border-l-tekOrange/20 rounded-full animate-spin animation-reverse" style={{top: '12.5%', left: '12.5%', animationDuration: '0.8s'}}></div>
          
          {/* Inner spinning circle - faster animation */}
          <div className="absolute h-1/2 w-1/2 top-1/4 left-1/4 border-4 border-t-tekOrange/40 border-r-transparent border-b-tekOrange border-l-transparent rounded-full animate-spin" style={{animationDuration: '0.6s'}}></div>
          
          {/* Central dot */}
          <div className="absolute h-1/4 w-1/4 top-[37.5%] left-[37.5%] bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
            <div className="h-2 w-2 bg-tekOrange rounded-full animate-pulse" style={{animationDuration: '0.8s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
