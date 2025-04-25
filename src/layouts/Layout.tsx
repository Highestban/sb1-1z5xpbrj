import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Github, Disc as Discord } from 'lucide-react';
import Footer from '../components/Footer';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="font-serif text-xl md:text-2xl font-bold text-primary">
                Highest's
                <span className="text-accent">Restaurant</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>
                Home
              </Link>
              <Link to="/announcements" className={`nav-link ${isActive('/announcements') ? 'nav-link-active' : ''}`}>
                Announcements
              </Link>
              <Link to="/sessions" className={`nav-link ${isActive('/sessions') ? 'nav-link-active' : ''}`}>
                Sessions
              </Link>
              <Link to="/info" className={`nav-link ${isActive('/info') ? 'nav-link-active' : ''}`}>
                Info
              </Link>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>
                About
              </Link>
              
              <div className="ml-6 flex items-center space-x-3">
                <a 
                  href="https://discord.gg/tJ6uTMwskR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary transition-colors"
                  aria-label="Discord"
                >
                  <Discord size={20} />
                </a>
                <a 
                  href="https://www.roblox.com/games/13346630012/Highests-Restaurant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary transition-colors"
                  aria-label="Roblox"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.roblox.com/games/13346630012/Highests-Restaurant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm py-2 px-4"
                >
                  Play Now
                </a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-neutral-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="container-custom flex flex-col space-y-3 px-4">
            <Link to="/" className="nav-link text-lg">
              Home
            </Link>
            <Link to="/announcements" className="nav-link text-lg">
              Announcements
            </Link>
            <Link to="/sessions" className="nav-link text-lg">
              Sessions
            </Link>
            <Link to="/info" className="nav-link text-lg">
              Info
            </Link>
            <Link to="/about" className="nav-link text-lg">
              About
            </Link>
            
            <div className="pt-4 flex items-center space-x-4 border-t border-neutral-200">
              <a 
                href="https://discord.gg/tJ6uTMwskR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <Discord size={20} />
              </a>
              <a 
                href="https://www.roblox.com/games/13346630012/Highests-Restaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary transition-colors"
                aria-label="Roblox"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.roblox.com/games/13346630012/Highests-Restaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary text-sm py-2 px-4 w-full flex justify-center"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;