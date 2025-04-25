import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Disc as Discord, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-medium text-white mb-4">
              Highest's<span className="text-accent">Restaurant</span>
            </h3>
            <p className="text-neutral-300 mb-6">
              Experience the finest virtual Japanese restaurant roleplay on Roblox. Join our community and become part of our story.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-accent transition-colors"
                aria-label="Discord"
              >
                <Discord size={20} />
              </a>
              <a 
                href="https://www.roblox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-accent transition-colors"
                aria-label="Roblox"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/announcements" className="text-neutral-300 hover:text-accent transition-colors">
                  Announcements
                </Link>
              </li>
              <li>
                <Link to="/sessions" className="text-neutral-300 hover:text-accent transition-colors">
                  Sessions
                </Link>
              </li>
              <li>
                <Link to="/info" className="text-neutral-300 hover:text-accent transition-colors">
                  Info
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">Sessions</h4>
            <ul className="space-y-2">
              <li className="text-neutral-300">
                <span className="text-accent">Mon-Fri:</span> 3PM - 9PM EST
              </li>
              <li className="text-neutral-300">
                <span className="text-accent">Sat-Sun:</span> 12PM - 11PM EST
              </li>
              <li className="text-neutral-300">
                <span className="text-accent">Special Events:</span> Check announcements
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Discord className="text-accent mt-1 mr-3" size={18} />
                <span className="text-neutral-300">Join our Discord for support</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-accent mt-1 mr-3" size={18} />
                <a href="mailto:contact@highestrestaurant.com" className="text-neutral-300 hover:text-accent transition-colors">
                  contact@highestrestaurant.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} Highest's Restaurant. All rights reserved.</p>
          <p className="mt-2">Not affiliated with Roblox Corporation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;