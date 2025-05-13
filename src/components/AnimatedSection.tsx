
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-right' | 'scale-in' | 'zoom-in';
  id?: string; // Added id prop
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  delay = 0,
  threshold = 0.2,
  animation = 'fade-in',
  id // Use the id prop
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(section);
        }
      },
      { threshold }
    );
    
    observer.observe(section);
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return 'transition-opacity duration-700 ease-out';
      case 'slide-up':
        return 'transition-all duration-700 ease-out';
      case 'slide-in-right':
        return 'transition-all duration-700 ease-out';
      case 'scale-in':
        return 'transition-all duration-700 ease-out';
      case 'zoom-in':
        return 'transition-all duration-700 ease-out';
      default:
        return '';
    }
  };

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return 'opacity-0';
        case 'slide-up':
          return 'opacity-0 translate-y-16';
        case 'slide-in-right':
          return 'opacity-0 translate-x-16';
        case 'scale-in':
          return 'opacity-0 scale-95';
        case 'zoom-in':
          return 'opacity-0 scale-90';
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={sectionRef}
      id={id} // Apply the id prop
      className={`${className} ${getAnimationClass()} ${getAnimationStyles()}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
