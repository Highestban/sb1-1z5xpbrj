import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Utensils, Users, Calendar, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import AnnouncementCard from '../components/AnnouncementCard';
import SessionCard from '../components/SessionCard';

const Home = () => {
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    observerRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => observer.disconnect();
  }, []);
  
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current[index] = el;
    }
  };

  return (
    <>
      <HeroSection />
      
      <section id="content-section" className="section bg-neutral-50">
        <div className="container-custom">
          <div 
            ref={el => addToRefs(el, 0)}
            className="fade-in max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Welcome to <span className="text-primary">Sakura</span>
              <span className="text-accent">Dining</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Immerse yourself in an authentic Japanese dining experience within Roblox. 
              Choose your role, interact with other players, and enjoy a unique roleplaying adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              ref={el => addToRefs(el, 1)}
              className="fade-in"
              style={{ transitionDelay: '0.1s' }}
            >
              <FeatureCard
                icon={ChefHat}
                title="Be a Chef"
                description="Master the art of Japanese cuisine. Prepare sushi, ramen, and other delicacies for customers to enjoy."
              />
            </div>
            
            <div 
              ref={el => addToRefs(el, 2)}
              className="fade-in"
              style={{ transitionDelay: '0.2s' }}
            >
              <FeatureCard
                icon={Utensils}
                title="Serve Customers"
                description="Take on the role of a server. Ensure customers have an exceptional dining experience with friendly service."
              />
            </div>
            
            <div 
              ref={el => addToRefs(el, 3)}
              className="fade-in"
              style={{ transitionDelay: '0.3s' }}
            >
              <FeatureCard
                icon={Users}
                title="Enjoy as a Customer"
                description="Relax and enjoy being served. Order from our menu and interact with other players in our cozy setting."
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-wood-texture bg-cover bg-center opacity-10"
        ></div>
        <div className="container-custom relative">
          <div 
            ref={el => addToRefs(el, 4)}
            className="fade-in max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Latest <span className="text-primary">Announcements</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Stay updated with the latest news, events, and updates from our restaurant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              ref={el => addToRefs(el, 5)}
              className="fade-in"
              style={{ transitionDelay: '0.1s' }}
            >
              <AnnouncementCard
                title="Summer Festival Event"
                date="June 15, 2025"
                content="Join us for our annual Summer Festival with special menu items, decorations, and in-game rewards for all participants."
                image="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
            
            <div 
              ref={el => addToRefs(el, 6)}
              className="fade-in"
              style={{ transitionDelay: '0.2s' }}
            >
              <AnnouncementCard
                title="New Menu Items"
                date="May 28, 2025"
                content="We've added new authentic Japanese dishes to our menu. Come try our fresh sushi platters and seasonal specialties!"
                image="https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
            
            <div 
              ref={el => addToRefs(el, 7)}
              className="fade-in"
              style={{ transitionDelay: '0.3s' }}
            >
              <AnnouncementCard
                title="Staff Recruitment"
                date="May 10, 2025"
                content="We're looking for dedicated players to join our staff team. Apply now to become a chef, server, or host at SakuraDining."
                image="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/announcements">
              <Button variant="outline">
                View All Announcements
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div 
            ref={el => addToRefs(el, 8)}
            className="fade-in max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Upcoming <span className="text-primary">Sessions</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Join our scheduled roleplaying sessions. Reserve your spot now!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              ref={el => addToRefs(el, 9)}
              className="fade-in"
              style={{ transitionDelay: '0.1s' }}
            >
              <SessionCard
                title="Evening Dining Experience"
                date="June 20, 2025"
                time="7:00 PM - 9:00 PM EST"
                host="Chef_Hiroshi"
                slots={{
                  total: 12,
                  filled: 8
                }}
                description="Join us for an elegant evening dining experience featuring a special seasonal menu and themed interactions."
              />
            </div>
            
            <div 
              ref={el => addToRefs(el, 10)}
              className="fade-in"
              style={{ transitionDelay: '0.2s' }}
            >
              <SessionCard
                title="Lunch Rush Challenge"
                date="June 22, 2025"
                time="12:00 PM - 2:00 PM EST"
                host="Manager_Tanaka"
                slots={{
                  total: 15,
                  filled: 15
                }}
                description="Experience the excitement of a busy lunch service! Staff will be challenged to handle the rush while maintaining excellent service."
              />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/sessions">
              <Button variant="outline">
                View All Sessions
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section relative overflow-hidden bg-primary text-white">
        <div className="container-custom">
          <div 
            ref={el => addToRefs(el, 11)} 
            className="fade-in grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="text-accent">Community</span>
              </h2>
              <p className="text-lg mb-8">
                Connect with other players, participate in events, and stay updated on the latest news and announcements from SakuraDining.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://discord.gg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn bg-white text-primary hover:bg-neutral-100"
                >
                  Join Discord
                </a>
                <a 
                  href="https://www.roblox.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn bg-accent text-white hover:bg-accent-light"
                >
                  Play Now
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Community" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-lg p-4 shadow-lg rotate-3 animate-float">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="text-white fill-white" />
                  ))}
                </div>
                <p className="text-white font-medium mt-1">Join 10,000+ players!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;