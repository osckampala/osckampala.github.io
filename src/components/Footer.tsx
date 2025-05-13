
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="dark:bg-tekBlack text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <img 
              src="/uploads/tektalentlogo.png" 
              alt="Tek Talent Africa" 
              className="h-14 mb-6" 
            />
            <p className="dark:text-gray-300 text-gray-700 mb-4">
              Empowering innovation through collaboration, creativity and community engagement.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Community Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/events" className="dark:text-gray-300 text-gray-700 hover:text-tekOrange transition-colors">Events</Link>
              <Link to="/projects" className="dark:text-gray-300 text-gray-700 hover:text-tekOrange transition-colors">Projects</Link>
              <Link to="/blog" className="dark:text-gray-300 text-gray-700 hover:text-tekOrange transition-colors">Blog Posts</Link>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link to="#join-us" className="dark:text-gray-300 text-gray-700 hover:text-tekOrange transition-colors">Join Us</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="dark:text-gray-300 text-gray-700 text-sm mb-4 md:mb-0">© 2025 Tek Talent Africa.</p>
          
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-500 hover:text-tekOrange transition-colors">
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-tekOrange transition-colors">
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            
            <Link to="#" className="text-gray-500 hover:text-tekOrange transition-colors">
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
