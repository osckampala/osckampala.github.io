
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Community link
  const whatsappLink = "https://chat.whatsapp.com/EFuw7WPQzTjKswuvJQX2n3";
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md py-2 backdrop-blur-md" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/assets/favicon.png" 
            alt="Tek Talent Africa" 
            className="h-10 transition-transform group-hover:scale-110 duration-300" 
          />
          <span className="text-xl font-bold text-tekOrange dark:text-tekOrange hidden md:inline group-hover:text-gradient transition-all duration-300">
            Open Source Community Kampala
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`relative ${isActive('/') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-tekOrange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
          >
            Home
          </Link>
          <Link 
            to="/events" 
            className={`relative ${isActive('/events') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-tekOrange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
          >
            Events & Activities
          </Link>
          <Link 
            to="/projects" 
            className={`relative ${isActive('/projects') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-tekOrange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
          >
            Projects
          </Link>
          <Link 
            to="/blog" 
            className={`relative ${isActive('/blog') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-tekOrange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
          >
            Blog
          </Link>
          <ThemeToggle />
          <Button 
            className="bg-tekOrange hover:bg-orange-600 text-white btn-ripple transform transition-transform hover:scale-105 shadow-md hover:shadow-glow"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Join Us
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-2 h-10 w-10"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-5 h-0.5 bg-current absolute transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></span>
            <span className={`block w-5 h-0.5 bg-current absolute transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-current absolute transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></span>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu - Fixed text visibility issue */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-4 bg-white dark:bg-gray-900 shadow-lg">
          <Link 
            to="/" 
            className={`py-3 px-4 ${isActive('/') ? 'text-tekOrange font-semibold' : 'text-gray-800 dark:text-white'} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/events" 
            className={`py-3 px-4 ${isActive('/events') ? 'text-tekOrange font-semibold' : 'text-gray-800 dark:text-white'} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md`}
            onClick={() => setIsMenuOpen(false)}
          >
            Events & Activities
          </Link>
          <Link 
            to="/projects" 
            className={`py-3 px-4 ${isActive('/projects') ? 'text-tekOrange font-semibold' : 'text-gray-800 dark:text-white'} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/blog" 
            className={`py-3 px-4 ${isActive('/blog') ? 'text-tekOrange font-semibold' : 'text-gray-800 dark:text-white'} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md`}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <div className="px-4 pt-2">
            <Button 
              className="bg-tekOrange hover:bg-orange-600 text-white w-full btn-ripple"
              onClick={() => {
                window.open(whatsappLink, '_blank');
                setIsMenuOpen(false);
              }}
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
