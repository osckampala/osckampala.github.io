import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Tobias or anyone can add this WhatsApp community link here
  const whatsappLink = '';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="public/uploads/tektalentlogo.png" alt="Tek Talent Africa" className="h-10" />
          <span className="text-xl font-bold text-tekOrange dark:text-tekOrange hidden md:inline">
            TekTalent Africa Community
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`${isActive('/') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200`}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={`${isActive('/events') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200`}
          >
            Events & Activities
          </Link>
          <Link
            to="/projects"
            className={`${isActive('/projects') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200`}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className={`${isActive('/blog') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200`}
          >
            Blog
          </Link>
          <ThemeToggle />
          <Button
            className="bg-tekOrange hover:bg-orange-600 text-white"
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
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-0.5 bg-current absolute transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-current absolute transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-current absolute transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
            ></span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-4">
          <Link
            to="/"
            className={`py-3 px-4 ${isActive('/') ? 'text-tekOrange font-semibold' : ''} dark:text-gray-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={`py-3 px-4 ${isActive('/events') ? 'text-tekOrange font-semibold' : ''} dark:text-gray-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            Events & Activities
          </Link>
          <Link
            to="/projects"
            className={`py-3 px-4 ${isActive('/projects') ? 'text-tekOrange font-semibold' : ''} dark:text-gray-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className={`py-3 px-4 ${isActive('/blog') ? 'text-tekOrange font-semibold' : ''} dark:text-gray-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <div className="px-4 pt-2">
            <Button
              className="bg-tekOrange hover:bg-orange-600 text-white w-full"
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
