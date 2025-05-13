
import React, { useEffect, useRef } from "react";

interface CarouselProps {
  images: string[];
  direction: "left" | "right";
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}

const ImageCarousel: React.FC<CarouselProps> = ({ 
  images, 
  direction, 
  className, 
  speed = 30,
  pauseOnHover = true
}) => {
  // Create twice as many images to ensure smooth looping
  const duplicatedImages = [...images, ...images];
  const trackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (trackRef.current) {
        const scrollPosition = window.scrollY;
        // Apply a subtle parallax effect to the carousel
        trackRef.current.style.transform = `translateY(${scrollPosition * 0.05}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`carousel-container ${className || ''} overflow-hidden`}>
      <div 
        ref={trackRef}
        className={`carousel-track ${pauseOnHover ? "hover:pause-animation" : ""}`}
      >
        <div className={`animate-slide-${direction}`}>
          {duplicatedImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 p-1 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`Carousel image ${index + 1}`} 
                  className="rounded-lg h-40 w-64 object-cover hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>
          ))}
        </div>
        <div className={`animate-slide-${direction}`}>
          {duplicatedImages.map((image, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="flex-shrink-0 p-1 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`Carousel image ${index + 1}`} 
                  className="rounded-lg h-40 w-64 object-cover hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
