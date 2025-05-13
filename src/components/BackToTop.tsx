
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 overflow-hidden p-3 rounded-full bg-tekOrange shadow-lg transition-all duration-300 ease-in-out hover:bg-tekOrangeDark focus:outline-none focus:ring-2 focus:ring-tekOrange focus:ring-offset-2 ${
        show ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'
      } transform hover:scale-110 group`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-white relative z-10" />
      
      {/* Ripple effect */}
      <span className="absolute inset-0 w-full h-full bg-white/30 transform scale-0 rounded-full opacity-0 group-active:scale-[2.5] group-active:opacity-50 transition-all duration-500"></span>
      
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-tekOrange/50 blur-md transform scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
    </button>
  );
};

export default BackToTop;
