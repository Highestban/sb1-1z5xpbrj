import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './Button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay before starting animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Animated sakura petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => {
          const randomDelay = Math.random() * 10;
          const randomLeft = Math.random() * 100;
          const randomSize = Math.random() * 20 + 10;
          
          return (
            <div 
              key={index}
              className="sakura absolute"
              style={{
                left: `${randomLeft}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                backgroundImage: "url('https://www.transparentpng.com/thumb/sakura/tBrnqX-sakura-image.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                animationDelay: `${randomDelay}s`,
                animationDuration: `${10 + Math.random() * 15}s`,
              }}
            ></div>
          );
        })}
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 1s ease-out, transform 1s ease-out' }}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience <span className="text-accent">Authentic</span> Japanese Dining
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 mb-8">
            Join our immersive restaurant roleplay experience. Be a chef, waiter, or customer in our virtual Japanese restaurant.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" size="lg">
              Play Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900">
              Join Discord
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToContent}
      >
        <ChevronDown size={32} className="text-white" />
      </div>
    </div>
  );
};

export default HeroSection;