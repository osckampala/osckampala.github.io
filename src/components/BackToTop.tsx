
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show back-to-top button only when scrolled halfway down the page
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const halfwayPoint = (scrollHeight - clientHeight) / 2;
    
    if (window.scrollY > halfwayPoint) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? 'opacity-100' : 'opacity-0 invisible'}`}>
      <Button
        className="rounded-full w-12 h-12 bg-tekOrange hover:bg-orange-600 text-white shadow-lg"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </Button>
    </div>
  );
};

export default BackToTop;
