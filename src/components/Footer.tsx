import { Link } from "react-router-dom";
import { ArrowUp, Twitter, Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <img 
              src="/images/logo.png" 
              alt="Tek Talent Africa" 
              className="h-20" 
            />
            <p className="text-gray-400 leading-relaxed">
              Empowering innovation through collaboration, creativity, and community engagement.
            </p>
          </div>
          
          {/* Community Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Community Links</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/events" className="text-gray-400 hover:text-tekOrange transition-colors">Events</Link>
              <Link to="/projects" className="text-gray-400 hover:text-tekOrange transition-colors">Projects</Link>
              <Link to="/blog" className="text-gray-400 hover:text-tekOrange transition-colors">Blog Posts</Link>
            </div>
          </div>
          
          {/* Explore Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Explore</h4>
            <div className="flex flex-col space-y-3">
              <Link to="#join-us" className="text-gray-400 hover:text-tekOrange transition-colors">Join Us</Link>
            </div>
          </div>
          
          {/* Company Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/about" className="text-gray-400 hover:text-tekOrange transition-colors">About us</Link>
              <Link to="/contact" className="text-gray-400 hover:text-tekOrange transition-colors">Contact us</Link>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 Tek Talent Africa. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-gray-400 hover:text-tekOrange transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-tekOrange transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-tekOrange transition-colors" aria-label="GitHub">
                <Github size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-tekOrange p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} className="text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
